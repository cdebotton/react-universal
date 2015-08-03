import React, {Component, PropTypes} from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import routes from '../routes';
import store from '../store';

export default class ClientContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  render()  {
    return (
      <Provider store={store}>
        {() => {
          return (
            <Router history={this.props.history}>
              {routes}
            </Router>
          );
        }}
      </Provider>
    );
  }
}
