import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { devTools } from "redux-devtools";
import thunk from "redux-thunk";
import promise from "./utils/promiseMiddleware";
import socket from "./utils/socketMiddleware";
import * as reducers from "./reducers";

const DEV = process.env.NODE_ENV === "development";
let initialState;

if (process.env.BROWSER) {
  initialState = window.__payloadData__;
}

const reducer = combineReducers(reducers);
const middlewares = applyMiddleware(socket, thunk);
const createCompStore = DEV ? compose(devTools(), createStore) : createStore;
const finalCreateStore = middlewares(createCompStore);
const store = finalCreateStore(reducer);

export default store;
