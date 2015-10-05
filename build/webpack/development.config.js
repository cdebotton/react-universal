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
