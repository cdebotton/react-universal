import React, {Component, PropTypes} from "react";
import StyleSheet from "./Users.styl";

export default class Users extends Component {
  render() {
    return (
      <div className={StyleSheet.container}>
        <h2>Users</h2>
        {this.props.children}
      </div>
    );
  }
}
