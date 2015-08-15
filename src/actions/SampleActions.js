import {
  INCREASE,
  DECREASE,
  INCREASE_ASYNC,
} from '../constants/actionTypes';

export function increase() {
  return {type: INCREASE};
}

export function decrease() {
  return {type: DECREASE};
}

export function increaseAsync() {
  return (dispatch) => {
    dispatch({type: INCREASE_ASYNC});
    setTimeout(() => {
      dispatch({type: INCREASE});
    }, 1500);
  };
}
