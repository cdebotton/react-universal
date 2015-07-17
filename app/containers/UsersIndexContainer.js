import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {userActions} from "../actions";
import UsersIndex from "../../components/UsersIndex";

@connect(({users}) => ({users}))
export default class UsersIndexContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.any
  }

  render() {
    return (
      <UsersIndex users={users}
                  {...bindActionCreators(userActions, dispatch)} />
    );
  }
}
