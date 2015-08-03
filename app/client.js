import React from 'react';
import ClientContainer from './containers/ClientContainer';
import HashHistory from 'react-router/lib/HashHistory';
import BrowserHistory from 'react-router/lib/BrowserHistory';

require('font-awesome/css/font-awesome.css');

const mount = document.getElementById('mount');

let history;
try {
  history = new BrowserHistory();
} catch (ex) {
  history = new HashHistory();
}

React.render((
  <ClientContainer history={history} />
), mount);
