import React, { Component, PropTypes } from "react";
import DocumentTitle from "react-document-title";
import StyleSheet from "../../utils/globals.styl";

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
        </div>
      </DocumentTitle>
    );
  }
}


