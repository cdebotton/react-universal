import SocketAction from "./SocketAction";
import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:3000");

export default ({ dispatch, getState }) => {
  ws.onmessage = (message) => {
    const json = JSON.parse(message.data);
    const { type, data } = json;

    dispatch({ type, ...data });
  };

  return (next) => (action) => {
    if (action instanceof SocketAction) {
      const { type, ...rest } = action;
      const [SUCCESS, FAILURE] = rest.responseTypes;

      dispatch({ type });

      ws.send(JSON.stringify(action));
    }
    else {
      next(action);
    }
  };
};
