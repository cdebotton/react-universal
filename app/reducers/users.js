import {
  CREATE_USER,
  READ_USERS,
  READ_USER,
  UPDATE_USER,
  DESTROY_USER
} from "../constants/ActionTypes";

const initialState = [];

export default (state=initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      const { email } = action;
      return [{ email }, ...state];
    case UPDATE_USER:
    case DESTROY_USER:
    default:
      return state;
  }
};
