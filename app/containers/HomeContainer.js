import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Home from "../components/Home";
import {counterActions} from "../actions";

@connect(({counter}) => ({counter}))
export default class HomeContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    children: PropTypes.any
  }

  render() {
    const {counter, dispatch} = this.props;
    const actions = bindActionCreators(counterActions, dispatch);

    return (
      <Home counter={counter}
            {...actions} />
    );
  }
}
