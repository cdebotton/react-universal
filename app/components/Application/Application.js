import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import DocumentTitle from "react-document-title";
import StyleSheet from "./Application.styl";

export default class Application extends Component {
  render() {
    return (
      <DocumentTitle title="React Universal">
        <div className={StyleSheet.container}>
          {this.props.children}
        </div>
      </DocumentTitle>
    );
  }
}
