import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from 'components/App/App.css';

import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';

@cssModules(styles)
export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div styleName="container">
        <h1 styleName="greeting">Hello, <i className="fa fa-globe" />!</h1>
        {this.props.children}
      </div>
    );
  }
}
