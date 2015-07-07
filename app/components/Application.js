import React, { Component, PropTypes } from "react";
import radium from "radium";
import StyleSheet from "../utils/globals.styl";

@radium
export default class Application extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <h1>Application</h1>
        { children }
      </div>
    );
  }
}


