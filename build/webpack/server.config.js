import webpack from 'webpack';
import fs from 'fs';
import config from '../../config/webconfig';

const paths = config.get('utilsPaths');
const { __PROD__ } = config.get('globals');
const cssIdentName = __PROD__ ?
  '[hash:base64:16]' :
  '[name]__[local]___[hash:base64:5]';

const webpackConfig = {
  name: 'server',
  target: 'node',
  entry: {
    app: [
      paths.src('entry-points/server'),
    ],
  },
  externals: fs.readdirSync('node_modules').filter(x => x !== '.bin'),
  output: {
    filename: 'index.js',
    path: paths.dist('server'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin(Object.assign(config.get('globals'), {
      __SERVER__: true,
      __CLIENT__: false,
    })),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    extensions: ['', '.js'],
    alias: config.get('utilsAliases'),
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: paths.project(config.get('src')),
        loaders: ['eslint'],
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        include: paths.project(config.get('src')),
        loaders: ['babel?optional[]=runtime&stage=0'],
      },
      {
        test: /\.css$/,
        include: paths.project(config.get('src')),
        loaders: [
          'css/locals?modules&localIdentName=' + cssIdentName,
          'cssnext',
        ],
      },
      {
        test: /\.css$/,
        include: paths.project('node_modules'),
        loaders: [
          'css',
        ],
      },
    ],
  },
  eslint: {
    configFile: paths.project('.eslintrc'),
    failOnError: __PROD__,
  }
};

export default webpackConfig;
