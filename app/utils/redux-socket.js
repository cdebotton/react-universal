import SocketAction from "./SocketAction";
import WebSocket from "ws";
import * as Transports from "../constants/Transports";

const TIMEOUT = 10000;
const ws = new WebSocket("ws://localhost:3000");
let handlers = {};
let promises = [];

ws.on = (type, handler) => {
  handlers[type] = handlers[type] || [];
  const callbacks = handlers[type];
  if (callbacks.indexOf(handler) === -1) {
    handlers[type].push(handler);
  }
};

ws.once = (type, handler) => {
  let wrappedHandler = function wrappedHandler(...args) {
    handlers[type] = handlers[type].filter((cb) => cb !== wrappedHandler);
    handler.apply(ws, args);
  };
  ws.on(type, wrappedHandler);
};

ws.onmessage = (message) => {
  const { type, data, ...json } = JSON.parse(message.data);
  if (handlers[type]) {
    handlers[type].forEach((callback) => callback(message));
  }
};

const socketReady = new Promise((resolve, reject) => {
  setTimeout(reject, TIMEOUT);
  ws.onopen = () => resolve(ws);
});

export const getRequests = () => {
  return Promise.all(promises);
};

export const addRequest = (promise) => {
  promise.then(() => {
    promises = promises.filter((p) => p !== promise);
  });

  promises.push(promise);

  return promise;
};

export default ({ dispatch, getState }) => {
  return (next) => (action) => {
    const isSocket = action.transport &&
                     action.transport === Transports.WEB_SOCKET;
    const isBrowser = process.env.BROWSER;

    if (isSocket && isBrowser) {
      const { type, responseTypes, ...rest } = action;
      const [SUCCESS, FAILURE] = responseTypes;

      next({ type, ...rest });

      const promise = new Promise((resolve, reject) => {
        ws.once(SUCCESS, (message) => {
          const data = JSON.parse(message.data);
          next(data);
          promises = promises.filter((p) => p !== promise);
          resolve(data);
        });

        ws.once(FAILURE, (message) => {
          const data = JSON.parse(message.data);
          next(data);
          promises = promises.filter((p) => p !== promise);
          reject(data);
        });

        const json = JSON.stringify(action);
        socketReady.then(() => ws.send(json));
      });

      promises.push(promise);

      return promise;
    }
    else if (isSocket) {
      if (!process.env.BROWSER) {
        const { responseTypes, query, params } = action;
        const [SUCCESS, FAILURE] = responseTypes;
        const {queryGraph} = require("./ws-server");

        addRequest(queryGraph(query, params)).then((data) => {
          if (data.errors) {
            dispatch({
              type: FAILURE,
              errors: data.errors
            });
          }
          else {
            dispatch({
              type: SUCCESS,
              ...data
            });
          }
        });
      }
    }
    else {
      next(action);
    }
  };
};
