import {
  GraphQLObjectType,
  GraphQLSchema
} from "graphql/lib/type";

import * as queries from "./queries";
import * as mutations from "./mutations";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: queries
  }),
  mutations: new GraphQLObjectType({
    name: "RootMutationType",
    fields: mutations
  })
});
