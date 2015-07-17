import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {userActions} from "../actions";
import UsersCreate from "../components/UsersCreate";

@connect((state) => ({
  newUserEmail: state.users.newUserEmail
}))
export default class UsersCreateContainer extends Component {
  static propTypes = {
    newUserEmail: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.any
  }

  render() {
    const {newUserEmail, dispatch} = this.props;
    const actions = bindActionCreators(userActions, dispatch);

    return (
      <UsersCreate newUserEmail={newUserEmail}
                   {...actions} />
    );
  }
}
