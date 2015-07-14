import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "./utils/promiseMiddleware";
import socket from "./utils/socketMiddleware";
import * as reducers from "./reducers";

let initialState;

if (process.env.BROWSER) {
  initialState = window.__payloadData__;
}

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(socket, thunk)(createStore);
const store = finalCreateStore(reducer);

export default store;
