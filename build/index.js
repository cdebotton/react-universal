import express from 'express';
import webpack from 'webpack';
import config from '../config/webconfig';
import webpackConfig from '../webpack.config';

const app = express();
const paths = config.get('utilsPaths');
const compiler = webpack(webpackConfig[0]);

app.use(require('webpack-dev-middleware')(compiler, {
  contentBase: paths.project(config.get('src')),
  hot: true,
  quiet: true,
  noInfo: true,
  lazy: false,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

export default app;
