/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { renderToString } from 'react-dom/server';
import { RoutingContext } from 'react-router';
import { getRoutingContext, RouterResult } from './getRoutingContext';
import readJSON from './readJSON';

import {
  paths,
  globals,
} from '../../../config';

const __DEV__ = globals.__DEV__;
const __PROD__ = globals.__PROD__;

let routes: ?{};
let configureStore: ?Function;

if (__PROD__) {
  ({routes, configureStore} = require(paths.dist('server')));
}

export default function renderClient(): Function {
  return function* renderClientMiddleware() {
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

    const location = createMemoryHistory().createLocation(this.req.url);
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

        const state = JSON.stringify(store.getState());

        this.render('index', { ...stats, markup, state });
      }
    }
  };
}
