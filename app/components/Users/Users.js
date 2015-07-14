import React, { Component, PropTypes } from "react";
import StyleSheet from "./Users.styl";

export default class Users extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string.isRequired
    })).isRequired,
    getUsers: PropTypes.func.isRequired
  }

  handleGetUsers() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <button type="button"
                onClick={ () => ::this.handleGetUsers() }>
          Get Users
        </button>
      </div>
    );
  }
}
