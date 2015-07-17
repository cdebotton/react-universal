import { Server as WebSocketServer } from "ws";
import { graphql } from "graphql";
import schema from "../graph/schema";

export function queryGraph (query, params) {
  const promise = graphql(schema, query, "", params);

  return promise;
}

export default (server) => {
  const ws = new WebSocketServer({ server: server });

  ws.on("connection", () => {
    const socket = ws.clients[ws.clients.length - 1];
    socket.broadcast = (msg) => ws.clients.forEach((client) => {
      client.send(msg);
    });

    socket.on("message", (msg) => {
      const json = JSON.parse(msg);
      const { responseTypes, query, params } = json;
      const [SUCCESS, FAILURE] = responseTypes;

      if (typeof query !== "undefined") {
        const promise = queryGraph(query, params);

        promise.then((data) => {
          if (data.errors) {
            data.type = FAILURE;
            socket.send(JSON.stringify(data));
          }
          else {
            data.type = SUCCESS;
            const json = JSON.stringify(data);

            if (data.broadcast && data.broadcast === true) {
              socket.broadcast(json);
            }
            else {
              socket.send(json);
            }
          }
        });
      }
    });
  });
};
