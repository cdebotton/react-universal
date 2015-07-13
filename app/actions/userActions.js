import {
  CREATE_USER,
  UPDATE_USER,
  DESTROY_USER
} from "../constants/ActionTypes";

export function addUser(email) {
  return (dispatch) => {
    dispatch({ type: CREATE_USER, email });
  };
}
