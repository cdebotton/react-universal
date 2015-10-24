/* @flow */

import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from 'components/App/App.css';

import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';

class App extends React.Component {
  static propTypes: {[key: string]: Function};
  static contextTypes: {[key: string]: Function};

  render(): any {
    return (
      <div styleName="container">
        <h1 styleName="greeting">Hello, <i className="fa fa-globe" />!</h1>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any,
};

App.contextTypes = {
  store: PropTypes.object.isRequired,
};

export default cssModules(styles)(App);
