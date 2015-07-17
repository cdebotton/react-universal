import React, { Component, PropTypes } from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router";
import { DebugPanel, LogMonitor, DevTools } from "redux-devtools/lib/react";
import StyleSheet from "./Application.styl";
import store from "../../store";

const DEV = process.env.NODE_ENV === "development";

export default class Application extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <DocumentTitle title="React Universal">
        <div>
          <h1>Application</h1>
          { children }
          { DEV && (
            <DebugPanel top right bottom>
              <DevTools store={ store }
                        monitor={ LogMonitor } />
            </DebugPanel>
          ) }
        </div>
      </DocumentTitle>
    );
  }
}


