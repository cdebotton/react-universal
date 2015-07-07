import { graphql } from "graphql";
import Router from "koa-router";
import schema from "../graph/schema";

const router = new Router();

router.post("/graph", function* (next) {
  const { query } = this.request.body;

  this.body = yield graphql(schema, query);
});

export default router;
