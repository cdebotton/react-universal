import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import store from '../store';

export default class ServerContainer extends Component {
  static propTypes = {
    routerProps: PropTypes.object.isRequired,
  }

  static getStoreState() {
    return store.getState();
  }

  render() {
    return (
      <Provider store={store}>
        {() => <Router {...this.props.routerProps} />}
      </Provider>
    );
  }
}
