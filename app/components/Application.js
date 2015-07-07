import React, { Component, PropTypes } from "react";
import radium from "radium";

@radium
export default class Application extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <h1 style={ [styles.base] }>Application</h1>
        { children }
      </div>
    );
  }
}

const styles = {
  base: {
    backgroundColor: "red",
    ":hover": {
      backgroundColor: "green"
    }
  }
};