import React, {Component, PropTypes} from "react";
import Users from "../components/Users";

export default class UsersContainer extends Component {
  render() {
    return (
      <Users {...this.props} />
    );
  }
}
