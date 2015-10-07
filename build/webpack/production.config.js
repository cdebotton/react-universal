import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import base from './base';
import { paths } from '../../config';

export default {
  ...base,
  name: 'client',
  target: 'web',
  module: {
    ...base.module,
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
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
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        screw_ie8: true,
      },
    }),
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true,
    }),
  ],
  eslint: {
    configFile: paths.base('.eslintrc'),
    failOnError: true,
    emitWarning: false,
  },
};
