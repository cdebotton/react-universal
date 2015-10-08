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

let DebugPanel: ?Function;
let LogMonitor: ?Function;
let DevTools: ?Function;

render((
  <Provider store={store}>
    <Router
      history={history}
      children={routes} />
  </Provider>
), document.getElementById('mount'));

if (__DEV__) {
  ({
    DevTools,
    DebugPanel,
    LogMonitor,
  } = require('redux-devtools/lib/react'));

  const devNode = document.createElement('div');
  document.body.appendChild(devNode);

  render((
    <DebugPanel top right bottom>
      <DevTools
        store={store}
        monitor={LogMonitor}
        select={(state) => state} />
    </DebugPanel>
  ), devNode);
}
