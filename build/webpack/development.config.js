import webpack from 'webpack';
import base from './base';
import {
  webpackHmrPath,
  paths,
} from '../../config';

export default {
  ...base,
  name: 'client',
  target: 'web',
  devtool: 'eval',
  entry: {
    ...base.entry,
    app: [
      `webpack-hot-middleware/client?path=${webpackHmrPath}`,
      ...base.entry.app,
    ],
  },
  module: {
    ...base.module,
    loaders: base.module.loaders.map(loaderConfig => {
      if (loaderConfig.loader === 'babel') {
        return {
          ...loaderConfig,
          query: {
            plugins: ['react-transform'],
            extra: {
              'react-transform': {
                transforms: [{
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module'],
                }, {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react'],
                }],
              },
            },
          },
        };
      }
      return loaderConfig;
    }),
  },
  plugins: [
    ...base.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  eslint: {
    configFile: paths.base('.eslintrc'),
    failOnError: false,
    emitWarning: true,
  },
};
