import React from 'react';
import {Route} from 'react-router';
import ApplicationContainer from './containers/ApplicationContainer';
import Home from './components/Home';

export default (
  <Route component={ApplicationContainer}>
    <Route path="/" component={Home} />
  </Route>
);
