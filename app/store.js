import {devTools} from 'redux-devtools';
import thunk from 'redux-thunk';
import promise from './utils/redux-promise';
import * as reducers from './reducers';
import {
  createStore as reduxCreateStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const reducer = combineReducers(reducers);

let createStore;
if (DEV) {
  createStore = compose(devTools(), reduxCreateStore);
} else {
  createStore = reduxCreateStore;
}

let initialPayload;

try {
  const {innerHTML: payload} = document.getElementById('__payload__');
  initialPayload = JSON.parse(payload);
} catch (ex) {
  initialPayload = {};
}

createStore = applyMiddleware(thunk, promise)(createStore);

export default createStore(reducer, initialPayload);
