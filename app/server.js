import koa from "koa";
import serveStatic from "koa-static";
import compress from "koa-compress";
import bodyparser from "koa-bodyparser";
import path from "path";
import http from "http";
import proxy from "koa-proxy";
import { Server as WebSocketServer } from "ws";
import { graphql } from "graphql";
import schema from "./graph/schema";
import graph from "./utils/graph"
import errors from "./utils/errors";
import react from "./utils/react";

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";
const app = koa();

if (ENV !== "production") {
  app.use(proxy({
    host: "http://localhost:8080",
    match: /^\/build\//
  }));
}

app.use(errors());
app.use(compress());
app.use(bodyparser());
app.use(serveStatic(path.join(__dirname, "../public")));
app.use(react());

const server = http.createServer(app.callback());
const ws = new WebSocketServer({ server: server });

ws.on("connection", () => {
  const socket = ws.clients[ws.clients.length - 1];
  socket.broadcast = (msg) => ws.clients.forEach((client) => {
    client.send(msg);
  });

  socket.on("message", (msg) => {
    const json = JSON.parse(msg);
    const { responseTypes, query } = json;
    const [SUCCESS, FAILURE] = responseTypes;

    if (typeof query !== "undefined") {
      graphql(schema, query).then((data) => {
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

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

