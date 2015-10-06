import React from 'react';
import cssModules from 'react-css-modules';
import styles from './HomeRoute.css';

@cssModules(styles)
export default class HomeRoute extends React.Component {
  render() {
    return (
      <div styleName="container">
        <i className="fa fa-home" />
      </div>
    );
  }
}
