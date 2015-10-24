/* @flow */

import React from 'react';

import {
  Route,
  IndexRoute,
} from 'react-router';

import App from 'components/App';
import HomeRoute from 'routes/HomeRoute';

export default (
  <Route component={App} path="/">
    <IndexRoute component={HomeRoute} />
  </Route>
);
