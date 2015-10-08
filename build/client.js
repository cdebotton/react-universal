import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import {
  webpackPublicPath,
} from '../config';

const app = express();
const compiler = webpack(webpackConfig[0]);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackPublicPath,
  overlay: true,
  hot: true,
  quiet: true,
  noInfo: true,
  lazy: false,
  historyApiFallback: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

export default app;
