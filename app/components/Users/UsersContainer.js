import React, { Component, PropTypes } from "react";
import { Connector } from "react-redux";
import { bindActionCreators } from "redux";
import Users from "./Users";
import { userActions } from "../../actions";

const select = ({ users }) => ({ users });

export default class UsersContainer extends Component {
  render() {
    return (
      <Connector select={ select }>
        { ({ dispatch, users }) => (
          <Users users={ users }
                 { ...bindActionCreators(userActions, dispatch) } />
        ) }
      </Connector>
    );
  }
}
