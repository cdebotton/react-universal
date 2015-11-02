/* @flow */

import { format } from 'util';
import koa from 'koa';
import mount from 'koa-mount';
import proxy from 'koa-proxy';
import { app as admin } from '../app/admin/src';
import { app as dataLayer } from '../app/data/src';

import {
  host as APP_HOST,
  port as APP_PORT,
  name as APP_NAME,
} from '../config';

import {
  host as ADMIN_HOST,
  port as ADMIN_PORT,
} from '../app/admin/config';

import {
  host as GRAPHQL_HOST,
  port as GRAPHQL_PORT,
} from '../app/data/config';

const debug = require('debug')(format('%s:bootstrap', APP_NAME));
const error = require('debug')(format('%s:bootstrap:error', APP_NAME));
const app = koa();

admin.listen(ADMIN_PORT, ADMIN_HOST, err => {
  if (err) {
    error(err);
  } else {
    debug('Admin running at http://%s:%s', ADMIN_HOST, ADMIN_PORT);
  }
});

app.use(mount('/admin', proxy({
  host: format('http://%s:%s', ADMIN_HOST, ADMIN_PORT),
})));


dataLayer.listen(GRAPHQL_PORT, GRAPHQL_HOST, err => {
  if (err) {
    error(err);
  } else {
    debug('DataLayer is running at http://%s:%s', GRAPHQL_HOST, GRAPHQL_PORT);
  }
});

app.listen(APP_PORT, APP_HOST, err => {
  if (err) {
    error(err);
  } else {
    debug('Gateway running at http://%s:%s', APP_HOST, APP_PORT);
  }
});
