import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { devTools } from "redux-devtools";
import thunk from "redux-thunk";
import socket from "./utils/redux-socket";
import * as reducers from "./reducers";

const DEV = process.env.NODE_ENV === "development";
let initialState;

if (process.env.BROWSER) {
  initialState = JSON.parse(window.__initialPayload__.innerHTML);
}

const WS_URL = "http://localhost:3000";

const io = require("socket.io-client")(WS_URL, {
  transports: ["websocket"]
});

const reducer = combineReducers(reducers);
const middlewares = applyMiddleware(socket(io), thunk);
const createCompStore = DEV ? compose(devTools(), createStore) : createStore;
const finalCreateStore = middlewares(createCompStore);
const store = finalCreateStore(reducer, initialState);

export default store;
