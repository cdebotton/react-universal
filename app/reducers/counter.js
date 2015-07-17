import { UP, DOWN } from "../constants/ActionTypes";

const initialState = 0;

export default function counter(state=initialState, action) {
  switch (action.type) {
    case UP:
      return state + 1;
    case DOWN:
      return state - 1;
    default:
      return state;
  }
}
