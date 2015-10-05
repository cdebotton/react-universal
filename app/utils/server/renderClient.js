/* @flow */

import React from 'react';
import createLocation from 'history/lib/createLocation';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';

import {
  paths,
  globals,
} from '../../../config';

let routes: ?{};
let store: ?{};
const __DEV__ = globals.__DEV__;
const __PROD__ = globals.__PROD__;

if (__PROD__) {
  ({routes, store} = require(paths.dist('server')));
}

export default function renderClient() {
  return function* renderClientMiddleware(): Generator {
    if (__DEV__) {
      try {
        ({routes, store} = require(paths.dist('server')));
      } catch (ex) {
        routes = null;
        store = null;
      }
    }

    let location = createLocation(this.req.url);

    match({ routes, location }, (error, redirectLocation, renderProps): void => {
      if (redirectLocation) {
        this.redirect(301, redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        this.status = 500;
        this.body = error.message;
      } else if (renderProps === null) {
        this.status = 404;
        this.body = 'Not found';
      } else {
        this.body = renderToString(<RoutingContext {...renderProps} />);
      }
    });
  }
}
