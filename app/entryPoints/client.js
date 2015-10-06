/* @flow */

import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import routes from '../routes';

const history = createBrowserHistory();
const store = configureStore();

render((
  <Provider store={store}>
    <Router
      history={history}
      children={routes} />
  </Provider>
), document.getElementById('mount'));
