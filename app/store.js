import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "./utils/promiseMiddleware";
import * as reducers from "./reducers";

let initialState;

if (process.env.BROWSER) {
  initialState = window.__payloadData__;
}

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(thunk, promise)(createStore);
const store = finalCreateStore(reducer);

console.log(store);

export default store;
