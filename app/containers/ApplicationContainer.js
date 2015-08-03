import React, {Component, PropTypes} from 'react';
import {DebugPanel, DevTools, LogMonitor} from 'redux-devtools/lib/react';
import Application from '../components/Application';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';

export default class ApplicationContainer extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  renderDevTools() {
    return (
      <DebugPanel
        top
        right
        bottom>
        <DevTools
          store={this.context.store}
          monitor={LogMonitor}
          select={(state) => state} />
      </DebugPanel>
    );
  }

  render() {
    const DEBUG = DEV && this.state.mounted;

    return (
      <span>
        <Application {...this.props} />
        {DEBUG && this.renderDevTools()}
      </span>
    );
  }

  state = {mounted: false}
}
