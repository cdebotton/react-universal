import React, {Component, PropTypes} from "react";
import Admin from "../components/Admin";

export default class AdminContainer {
  render() {
    return (
      <Admin {...this.props} />
    );
  }
}
