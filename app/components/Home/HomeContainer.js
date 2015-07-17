import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { Connector } from "react-redux";
import Home from "./Home";
import { counterActions } from "../../actions";

const select = (state) => {
  return {
    counter: state.counter
  };
};

export default class HomeContainer {
  render() {
    return (
      <Connector select={ select }>
        { ({ counter, dispatch }) => (
          <Home counter={ counter }
                { ...bindActionCreators(counterActions, dispatch) } />
        ) }
      </Connector>
    );
  }
}
