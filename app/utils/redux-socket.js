import SocketAction from "./SocketAction";
import WebSocket from "ws";

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

export const getRequests = () => Promise.all(promises);

export default ({ dispatch, getState }) => {
  return (next) => (action) => {
    if (action instanceof SocketAction) {
      const { type, responseTypes, ...rest } = action;
      const [SUCCESS, FAILURE] = responseTypes;

      dispatch({ type, ...rest });
      const promise = new Promise((resolve, reject) => {
        ws.once(SUCCESS, (message) => {
          const data = JSON.parse(message.data);
          dispatch(data);
          promises = promises.filter((p) => p !== promise);
          resolve(data);
        });

        ws.once(FAILURE, (message) => {
          const data = JSON.parse(message.data);
          dispatch(data);
          promises = promises.filter((p) => p !== promise);
          reject(data);
        });

        socketReady.then(() => ws.send(JSON.stringify(action)));
      });

      promises.push(promise);

      return promise;
    }
    else {
      next(action);
    }
  };
};
