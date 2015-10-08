/* @flow */

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../constants/actionTypes';

export type CounterAction = {
  type: string;
};

export function increment(): CounterAction {
  return { type: INCREMENT_COUNTER };
}

export function decrement(): CounterAction {
  return { type: DECREMENT_COUNTER };
}
