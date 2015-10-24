/* @flow */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from 'reducers/app';
import session from 'reducers/session';

export default combineReducers({
  app,
  session,
  form: formReducer,
});
