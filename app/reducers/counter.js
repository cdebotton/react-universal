import {
  ASYNC_INCREASE_BEGIN,
  ASYNC_INCREASE_COMPLETE,
  INCREASE,
  DECREASE
} from '../constants/actionTypes';

const initialState = {
  count: 0,
  increasing: false,
};

export default function counter(state=initialState, action) {
  switch (action.type) {
  case ASYNC_INCREASE_BEGIN:
    return {...state, increasing: true};
  case ASYNC_INCREASE_COMPLETE:
    return {...state, increasing: false, count: state.count + 1};
  case INCREASE:
    return {...state, count: state.count + 1};
  case DECREASE:
    return {...state, count: state.count - 1};
  default:
    return state;
  }
}
