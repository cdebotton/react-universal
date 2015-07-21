import {Server as WebSocketServer} from "ws";

export default (app) => {
  const server = new WebSocketServer({ server: app });

};
