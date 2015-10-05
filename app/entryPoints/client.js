/* @flow */

import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { render } from 'react-dom';
import { Router } from 'react-router';
import routes from '../routes';

const history = createBrowserHistory();

render((
  <Router history={ history }>
    {routes}
  </Router>
), document.getElementById('mount'));
