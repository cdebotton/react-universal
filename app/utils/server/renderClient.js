/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { createLocation } from 'history';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import readJSON from './readJSON';

import {
  paths,
  globals,
} from '../../../config';

const RouterResult = {
  NOT_FOUND: 'notFound',
  ERROR: 'error',
  REDIRECT: 'redirect',
};

type ContextError = {
  errorType?: string;
  error?: {
    message: string;
  };
  redirectLocation?: {
    pathname: string;
    search?: string;
  };
};

const __DEV__ = globals.__DEV__;
const __PROD__ = globals.__PROD__;

let routes: ?{};
let configureStore: ?Function;

if (__PROD__) {
  ({routes, configureStore} = require(paths.dist('server')));
}

function getRoutingContext(routes: ?{}, location: {}): Promise {
  return new Promise((resolve, reject) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        reject({ errorType: RouterResult.REDIRECT, redirectLocation });
      } else if (error) {
        reject({ errorType: RouterResult.ERROR, error });
      } else if (typeof renderProps === 'undefined') {
        reject({ errorType: RouterResult.NOT_FOUND });
      } else {
        resolve(renderProps);
      }
    });
  });
}

export default function renderClient(): Function {
  return function* renderClientMiddleware(next: Generator): Generator {
    if (__DEV__) {
      Object.keys(require.cache).forEach(key => {
        delete require.cache[key];
      });

      try {
        ({routes, configureStore} = require(paths.dist('server')));
      } catch (ex) {
        routes = null;
        configureStore = null;
        throw ex;
      }
    }

    const location = createLocation(this.req.url);
    const result = yield getRoutingContext(routes, location);

    if (!(routes && configureStore)) {
      throw new Error(
        'App has not compiled yet. Either {routes} ' +
        'or {configureStore} is unavailable.'
      );
    }

    if (result && result.errorType) {
      switch (result.errorType) {
      case RouterResult.REDIRECT:
        this.redirect(
          301,
          result.redirectLocation.pathname + result.redirectLocation.search
        );
        break;
      case RouterResult.ERROR:
        this.status = 500;
        this.body = result.error.message;
        break;
      case RouterResult.NOT_FOUND:
      default:
        this.status = 404;
        this.body = 'Not Found';
        break;
      }
    } else {
      if (result) {
        const stats = yield readJSON(paths.dist('webpack-stats.json'));
        const store = configureStore();
        const markup = renderToString(
          <Provider store={store}>
            <RoutingContext {...result} />
          </Provider>
        );

        this.render('index', { ...stats, markup });
      }
    }
  }
}
