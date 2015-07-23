import koa from "koa";
import serveStatic from "koa-static";
import compress from "koa-compress";
import bodyparser from "koa-bodyparser";
import path from "path";
import http from "http";
import proxy from "koa-proxy";
import ws from "ws";
import errors from "./middleware/errors";
import react from "./middleware/react";
import {
  GRAPHQL_REQUEST,
  GRAPHQL_SUCCESS,
  GRAPHQL_FAILURE
} from "./constants/actionTypes";
import {graphql} from "graphql";
import schema from "./graph/schema";

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
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on(GRAPHQL_REQUEST, (message) => {
    const {query, params} = message;
    graphql(schema, query, "Query", params).then((data) => {
      if (data.errors) {
        socket.emit(GRAPHQL_FAILURE, data);
      }
      else {
        socket.emit(GRAPHQL_SUCCESS, data);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

