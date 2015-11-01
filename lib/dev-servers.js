/* @flow */

import { format } from 'util';

import {
  name as APP_NAME,
} from '../config';

import {
  app as adminDevServer,
} from '../app/admin/build/server';

import {
  webpackPort as ADMIN_WEBPACK_PORT,
  host as HOST,
} from '../app/admin/config';

const debug = require('debug')(format('%s:dev-servers', APP_NAME));
const error = require('debug')(format('%s:dev-servers:error', APP_NAME));

adminDevServer.listen(ADMIN_WEBPACK_PORT, HOST, err => {
  if (err) {
    error(err);
  } else {
    debug(
      'AdminDevServer is running at http://%s:%s',
      HOST,
      ADMIN_WEBPACK_PORT
    );
  }
});
