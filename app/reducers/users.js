import * as actionTypes from "../constants/actionTypes";

const initialState = {
  newUserEmail: "",
  data: {}
};

export default function users(state=initialState, action) {
  switch (action.type) {
  case actionTypes.INITIALIZE_USER:
    return {
      ...initialState,
      newUserEmail: action.email
    };
  default:
    return state;
  }
}
