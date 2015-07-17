import React, { Component, PropTypes } from "react";
import StyleSheet from "./Application.styl";

export default class Application extends Component {
  render() {
    return (
      <div className={StyleSheet.container}>
        <h1>Application</h1>
        {this.props.children}
      </div>
    );
  }
}
