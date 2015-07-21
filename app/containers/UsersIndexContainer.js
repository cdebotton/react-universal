import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import UsersIndex from "../components/UsersIndex";

@connect(({users}) => ({users}))
export default class UsersIndexContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    children: PropTypes.any
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  static queries = {
    users() {
      return `{
        users {
          id,
          email
        }
      }`;
    }
  }

  render() {
    const {users, dispatch} = this.props;
    const actions = {};

    return (
      <UsersIndex users={users}
                  {...actions} />
    );
  }
}
