import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {userActions} from "../actions";
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

  componentWillMount() {
    const { dispatch } = this.context.store;

    dispatch(userActions.getUsers());
  }

  render() {
    const {users, dispatch} = this.props;
    const actions = bindActionCreators(userActions, dispatch);

    return (
      <UsersIndex users={users}
                  {...actions} />
    );
  }
}
