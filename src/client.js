import React from 'react';
import ReactDOM from 'react-dom';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
import Application from './containers/Application';
import Client from './containers/Client';

let history;
try {
  history = new BrowserHistory();
} catch (ex) {
  history = new HashHistory();
}

require('font-awesome/css/font-awesome.css');

ReactDOM.render((
  <Application>
    <Client history={history} />
  </Application>
), document.getElementById('mount'));
