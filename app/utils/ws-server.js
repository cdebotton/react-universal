import {Server as WebSocketServer} from "ws";

export default (params) => {
  const {port, ...rest} = params;
  const server = new WebSocketServer({port});

  server.on("connection", () => {
    const socket = server.clients[server.clients.length - 1];
    socket.broadcast = (message) => {
      socket.clients.forEach((client) => client.send(message));
    };
  });

  return server;
};
