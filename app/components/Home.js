import React, { Component, PropTypes } from "react";
import radium from "radium";
import { bindActionCreators } from "redux";
import { Connector } from "redux/react";
import { userActions } from "../actions";

@radium
class Home extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <h2>Home</h2>
        <p>Hello!</p>
      </div>
    );
  }
}

const select = (state) => {
  return {
    users: state.users
  };
};

export default class HomeContainer {
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
