/* @flow */

import { combineReducers } from 'redux';
import app from 'reducers/app';
import session from 'reducers/session';

export default combineReducers({ app, session });
