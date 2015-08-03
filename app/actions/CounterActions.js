import {
  ASYNC_INCREASE_BEGIN,
  ASYNC_INCREASE_COMPLETE,
  INCREASE,
  DECREASE
} from '../constants/actionTypes';

export function increase() {
  return {type: INCREASE};
}

export function decrease() {
  return {type: DECREASE};
}

export function increaseAsync() {
  return (dispatch) => {
    dispatch({type: ASYNC_INCREASE_BEGIN});
    setTimeout(() => {
      dispatch({type: ASYNC_INCREASE_COMPLETE});
    }, 1500);
  };
}
