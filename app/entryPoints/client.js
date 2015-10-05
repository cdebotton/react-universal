import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from '../routes';

const history = createBrowserHistory();

ReactDOM.render((
  <Router history={ history }>
    {routes}
  </Router>
), document.getElementById('mount'));
