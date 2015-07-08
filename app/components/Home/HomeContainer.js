import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { Connector } from "redux/react";
import { userActions } from "../../actions";
import Home from "./Home";

const select = (state) => {
  return {
    users: state.users
  };
};

export default class HomeContainer {
  static fetchData(params, dispatch) {
    const action = userActions.addUser("admin@test.com");
    dispatch(action);

    return action.promise;
  }

  render() {
    return (
      <Connector select={ select }>
        { ({ users, dispatch }) => (
          <Home
            actions={ Object.assign({},
              bindActionCreators(userActions, dispatch)
            ) }
            users={ users } />
        ) }
      </Connector>
    );
  }
}
