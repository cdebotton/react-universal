import { createStore } from "redux";
import thunkMiddleware from "redux/lib/middleware/thunk";
import promiseMiddleware from "./utils/promiseMiddleware";
import * as reducers from "./reducers";

let initialState;

if (process.env.BROWSER) {
  initialState = window.__payloadData__;
}

export default createStore(reducers, (getState) => [
  promiseMiddleware(getState),
  thunkMiddleware(getState)
]);
