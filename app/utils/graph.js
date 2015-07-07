import { graphql } from "graphql";
import schema from "./graph/schema";

export default function () {
  return function* (next) {
    const { query } = this.request.body;

    this.body = yield graphql(schema, query);
  };
}
