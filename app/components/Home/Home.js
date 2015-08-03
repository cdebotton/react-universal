import React, {Component, PropTypes} from 'react';
import {Connector} from 'react-redux';
import {bindActionCreators} from 'redux';
import StyleSheet from './Home.styl';
import * as CounterActions from '../../actions/CounterActions';

class Home extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increaseAsync: PropTypes.func.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
    increasing: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div className={StyleSheet.container}>
        <h2><i className="fa fa-home" />Home</h2>
        <p><strong>Counter:</strong> {this.props.count}</p>
        <button
          onClick={() => this.props.increaseAsync()}
          disabled={this.props.increasing}>
          Async Up
        </button>
        <button onClick={() => this.props.increase()}>Up</button>
        <button onClick={() => this.props.decrease()}>Down</button>
      </div>
    );
  }
}

export default class HomeConnector extends Component {
  render() {
    return (
      <Connector select={(state) => ({
        count: state.counter.count,
        increasing: state.counter.increasing,
      })}>
        {({dispatch, ...props}) => {
          const counterActions = bindActionCreators(CounterActions, dispatch);
          return (
            <Home
              {...props}
              {...counterActions}
              {...this.props} />
          );
        }}
      </Connector>
    );
  }
}
