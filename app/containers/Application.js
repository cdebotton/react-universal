import React, {Component, PropTypes} from "react";
import {Provider} from "react-redux";
import {DebugPanel, LogMonitor, DevTools} from "redux-devtools/lib/react";
import store from "../store";

export default class Application extends Component {
  static propTypes = {
    getRouter: PropTypes.func.isRequired
  }

  static getStoreState() {
    return store.getState();
  }

  getDebug() {
    return (
      <DebugPanel top right bottom>
        <DevTools store={store}
                  monitor={LogMonitor} />
      </DebugPanel>
    );
  }

  render() {
    const ENV = process.env.NODE_ENV || "development";

    return (
      <span>
        <Provider store={ store }>
          { this.props.getRouter }
        </Provider>
        { ENV === "development" && this.getDebug() }
      </span>
    );
  }
}
