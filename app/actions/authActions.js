/* @flow */

import fetch from 'isomorphic-fetch';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'constants/actionTypes';

export function login(
  email: string,
  password: string
): Function {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST, email });

    try {
      const result = fetch('/api/login', {
        method: 'post',
        data: new FormData({ email, password }),
      });

      dispatch({ type: LOGIN_SUCCESS, ...result });
    } catch (ex) {
      dispatch({ type: LOGIN_FAILURE, error: ex });
    }
  };
}
