/* @flow */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'constants/actionTypes';

export class SessionError extends Error {
  error: string;
  code: number;

  constructor(
    error: string,
    code: number = 401
  ): SessionError {
    super(error);

    this.message = error;
    this.code = code;

    return this;
  }
}

type SessionState = {
  authed: boolean;
  loading: boolean;
  userId: ?number;
  error: ?SessionError;
};

export type SessionAction = {
  type: string;
  email?: string;
  password?: string;
};

const initialState: SessionState = {
  authed: false,
  loading: false,
  userId: null,
  error: null,
};

export default function session(
  state: SessionState = initialState,
  action: SessionAction
): SessionState {
  switch (action.type) {
  case LOGIN_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
    };
  case LOGIN_FAILURE:
    return {
      ...state,
      loading: false,
    };
  default:
    return state;
  }
}
