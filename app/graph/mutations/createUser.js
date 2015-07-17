import { GraphQLObject } from "graphql/lib/type";
import { User } from "../../models";

export default {
  type: GraphQLObject,
  description: "Creates a user",
  resolve: async (obj, params, source, fieldASTs) => {
    console.log("obj", obj);
    console.log("params", params);
    console.log("source", source);
    console.log("fieldASTs", fieldASTs);

    return true;
  }
};
