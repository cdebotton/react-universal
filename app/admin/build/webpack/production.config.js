import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import base from './base';

// import { paths } from '../../config';

export default {
  ...base,
  module: {
    ...base.module,
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     include: paths.base('src/**/*.js'),
    //     loader: 'eslint',
    //   },
    // ],
    loaders: base.module.loaders.map(loaderConfig => {
      if (/css/.test(loaderConfig.test)) {
        const [first, ...rest] = loaderConfig.loaders;
        loaderConfig.loader = ExtractTextPlugin.extract(first, rest.join('!'));
        delete loaderConfig.loaders;
      }

      return loaderConfig;
    }),
  },
  plugins: [
    ...base.plugins,
    new ExtractTextPlugin('stylesheets/[name].[hash].css'),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        screw_ie8: true,
      },
    }),
  ],
  eslint: {
    failOnError: true,
  },
  babel: {
    ...base.babel,
    plugins: [
      'transform-react-inline-elements',
      'transform-react-constant-elements',
      'transform-remove-console',
      'transform-merge-sibling-variables',
      'transform-remove-debugger',
    ],
  },
};
