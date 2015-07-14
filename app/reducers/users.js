import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from "../constants/ActionTypes";

const initialState = {
  loading: false,
  data: {}
};

export default (state=initialState, action) => {
  switch (action.type) {
  case GET_USERS_REQUEST:
    return {
      loading: true,
      ...state
    };
  case GET_USERS_SUCCESS:
    return {
      loading: false,
      ...state
    };
  default:
    return state;
  }
};
