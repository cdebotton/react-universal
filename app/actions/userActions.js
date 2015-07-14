import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CREATE_USER,
  UPDATE_USER,
  DESTROY_USER
} from "../constants/ActionTypes";

import SocketAction from "../utils/SocketAction";

export function getUsers() {
  return new SocketAction(GET_USERS_REQUEST, {
    responseTypes: [GET_USERS_SUCCESS, GET_USERS_FAILURE],
    query: `{
      users {
        id,
        email
      }
    }`
  });
}

export function addUser(email) {
  return (dispatch) => {
    dispatch({ type: CREATE_USER, email });
  };
}
