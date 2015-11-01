/* @flow */

import path from 'path';
import koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import proxy from 'koa-proxy';
import Jade from 'koa-jade';
import { format } from 'util';

import {
  paths,
  host as HOST,
  webpackPort as WEBPACK_PORT,
  __DEV__,
  __PROD__,
} from '../config';

export const app = koa();
const { middleware: jade } = new Jade({
  viewPath: path.resolve(__dirname, 'views'),
});

const statsPath: string = path.resolve(
  __dirname,
  '..',
  'dist',
  'webpack-stats.json'
);
let stats: {[key: string]: Array<string>} = { css: [], js: [] };

if (__PROD__) {
  stats = require(statsPath);
}

if (__DEV__) {
  app.use(mount('/build', proxy({
    host: format('http://%s:%s', HOST, WEBPACK_PORT),
  })));
} else {
  app.use(mount('/build', serve(paths.dist('client'))));
}

app.use(jade);

app.use(function* renderView() {
  if (__DEV__) {
    stats = require(statsPath);
    delete require.cache[statsPath];
  }

  this.render('index', { ...stats });
});
