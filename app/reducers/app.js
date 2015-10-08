/* @flow */

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../constants/actionTypes';

import type { CounterAction } from '../actions/counterActions';

type StateObject = {
  counter: number;
};

const initialState: StateObject = {
  counter: 0,
};

export default function app(
  state: StateObject = initialState,
  action: CounterAction
): StateObject {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return {
      ...state,
      counter: state.counter + 1,
    };
  case DECREMENT_COUNTER:
    return {
      ...state,
      counter: state.counter - 1,
    };
  default:
    return state;
  }
}
