import * as actionTypes from "../constants/actionTypes";

const initialState = {
  newUserEmail: "",
  isLoading: false,
  errors: [],
  data: {}
};

export default function users(state=initialState, action) {
  switch (action.type) {
  case actionTypes.INITIALIZE_USER:
    return {
      ...state,
      newUserEmail: action.email
    };
  case actionTypes.CANCEL_INITIALIZE_USER:
    return {
      ...state,
      newUserEmail: ""
    };
  case actionTypes.GET_USERS_REQUEST:
    return {
      ...state,
      errors: [],
      isLoading: true
    };
  case actionTypes.GET_USERS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      errors: [],
      ...action.data.users.reduce((memo, user) => {
        memo[user.id] = user;
      }, {})
    };
  case actionTypes.GET_USERS_FAILURE:
    return {
      ...state,
      errors: [action.errors],
      isLoading: false
    };
  default:
    return state;
  }
}
