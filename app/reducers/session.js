/* @flow */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/actionTypes';

type SessionState = {
  authed: boolean;
  userId: ?number;
};

type ActionType = {
  type: string;
};

const initialState: SessionState = {
  authed: false,
  userId: null,
};

export default function session(
  state: SessionState = initialState,
  action: ActionType
): SessionState {
  switch (action.type) {
  case LOGIN_REQUEST:
  case LOGIN_SUCCESS:
  case LOGIN_FAILURE:
  default:
    return state;
  }
}
