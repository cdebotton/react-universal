import React, {Component, PropTypes} from "react";
import Users from "../../components/Users";
import UsersIndexContainer from "./UsersIndexContainer";

export default class UsersContainer extends Component {
  render() {
    const props = {
      ...this.props,
      children: this.props.children || <UsersIndexContainer />
    };

    return (
      <Users {...props} />
    );
  }
}
