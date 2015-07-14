import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from "../constants/ActionTypes";

const initialState = [];

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      console.log("REQUEST");
      return state;
    case GET_USERS_SUCCESS:
      console.log(action);
      console.log("SUCCESS");
      return state;
    default:
      return state;
  }
};
