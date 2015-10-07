/* @flow */

import path from 'path';
import koa from 'koa';
import compress from 'koa-compress';
import proxy from 'koa-proxy';
import mount from 'koa-mount';
import serve from 'koa-static';
import Jade from 'koa-jade';
import renderClient from './utils/server/renderClient';

import {
  globals,
  paths,
  webpackPublicPath,
} from '../config';

const __DEV__ = globals.__DEV__;
const app = koa();
const jade = new Jade({ viewPath: path.join(__dirname, 'views') });

app.use(compress());

if (__DEV__) {
  app.use(mount('/build', proxy({ host: webpackPublicPath })));
} else {
  app.use(mount('/build', serve(paths.dist('client'))));
}

app.use(jade.middleware);
app.use(renderClient());

export default app;
