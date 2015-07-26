import * as actions from "../constants/adminActionTypes";

const initialState = {
  navOpen: true
};

export default function adminUi(state=initialState, action) {
  switch (action.type) {
  case actions.TOGGLE_NAV:
    return {
      ...state,
      navOpen: !state.navOpen
    };
  default:
    return state;
  }
}
