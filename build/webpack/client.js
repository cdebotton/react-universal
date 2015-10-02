import webpack from 'webpack';
import config from '../../config/webconfig';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import Clean from 'clean-webpack-plugin';
import {
  ReportStatsPlugin,
  WriteStatsPlugin,
} from '../utils';

const paths = config.get('utilsPaths');
const {
  __DEV__,
  __PROD__,
} = config.get('globals');
const cssIdentName = __PROD__ ?
  '[hash:base64:16]' :
  '[name]__[local]___[hash:base64:5]';

const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: 'source-map',
  entry: {
    app: [
      paths.src('entry-points/client'),
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: paths.dist('client'),
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin(Object.assign(config.get('globals'), {
      __CLIENT__: true,
      __SERVER__: false,
    })),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ReportStatsPlugin(),
    new WriteStatsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js'],
    alias: config.get('utilsAliases'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: paths.project(config.get('src')),
        loaders: ['babel?optional[]=runtime'],
      },
      {
        test: /\.css$/,
        include: paths.project(config.get('src')),
        loaders: [
          'style',
          'css?modules&localIdentName=' + cssIdentName,
          'cssnext',
        ],
      },
      {
        test: /\.css$/,
        include: paths.project('node_modules'),
        loaders: [
          'style',
          'css',
        ],
      },
    ],
  },
  eslint: {
    configFile: paths.project('.eslintrc'),
    failOnError: __PROD__,
    emitWarning: __DEV__,
  },
};

webpackConfig.entry.vendor = config.get('vendorDependencies');

const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
  'vendor', '[name].[hash].js'
);
commonChunkPlugin.__KARMA_IGNORE__ = true;
webpackConfig.plugins.push(commonChunkPlugin);

if (__DEV__) {
  webpackConfig.entry.app.unshift(
    'webpack-hot-middleware/client?path=' + config.get('webpackPublicPath')
      + '/__webpack_hmr',
  );
  webpackConfig.plugins.unshift(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

if (__PROD__) {
  webpackConfig.module.loaders = webpackConfig.module.loaders.map(loader => {
    if (/css/.test(loader.test)) {
      const [first, ...rest] = loader.loaders;

      loader.loader = ExtractTextPlugin.extract(first, rest.join('!'));
      delete loader.loaders;
    }
  });

  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        unused: true,
        warnings: false,
        dead_code: true,
        screw_ie8: true,
      },
    }),
    new Clean(['/client'], paths.dist())
  );
}

if (!__DEV__ || (__DEV__ && config.get('webpackLintInDev'))) {
  webpackConfig.module.preLoaders = [
    {
      test: /\.js$/,
      loaders: ['eslint'],
      include: paths.project(config.get('src')),
    },
  ];
}

export default webpackConfig;
