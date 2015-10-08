/* @flow */

import { combineReducers } from 'redux';
import app from './app';
import session from './session';

export default combineReducers({ app, session });
