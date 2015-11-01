/* @flow */

import express from 'express';
import webpack from 'webpack';
import config from './webpack/development.config';

export const app = express();
export const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  quiet: true,
  noInfo: true,
}));

app.use(require('webpack-hot-middleware')(compiler));
