import React, { Component, PropTypes } from "react";
import radium from "radium";

@radium
export default class Home extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <h2>Home</h2>
        <p>Hello!</p>
      </div>
    );
  }
}
