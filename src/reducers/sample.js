import {
  INCREASE,
  INCREASE_ASYNC,
  DECREASE,
} from '../constants/actionTypes';

const initialState = {
  count: 0,
  isIncreasing: false,
};

export default function sample(state=initialState, action) {
  switch (action.type) {
  case INCREASE:
    return {...state, isIncreasing: false, count: state.count + 1};
  case DECREASE:
    return {...state, count: state.count - 1};
  case INCREASE_ASYNC:
    return {...state, isIncreasing: true};
  default:
    return state;
  }
}
