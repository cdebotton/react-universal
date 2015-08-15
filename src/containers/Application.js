import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {
  DebugPanel,
  DevTools,
  LogMonitor
} from 'redux-devtools/lib/react';

import store from '../store';

const {NODE_ENV} = process.env;
const DEV = !NODE_ENV || (NODE_ENV === 'development');

export default class Application extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  static getState() {
    return store.getState();
  }

  renderDebugPanel() {
    if (DEV && this.state.mounted) {
      return (
        <DebugPanel top right bottom>
          <DevTools
            store={store}
            select={(state) => state}
            monitor={LogMonitor} />
        </DebugPanel>
      );
    }
  }

  render() {
    const debugPanel = this.renderDebugPanel();
    const {children, ...props} = this.props;

    return (
      <Provider store={store}>
        {() => {
          return (
            <span>
              {React.cloneElement(children, props)}
              {debugPanel}
            </span>
          );
        }}
      </Provider>
    );
  }

  state = {mounted: false}
}
