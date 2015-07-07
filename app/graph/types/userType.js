import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean
} from "graphql/lib/type";

import { User } from "../../models";

export default new GraphQLObjectType({
  name: "User",
  description: "User type",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The id of the user"
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user"
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The password of the user"
    },
    active: {
      type: GraphQLBoolean,
      description: "Whether or not the user is active"
    },
    lastLogin: {
      type: GraphQLString,
      description: "When the user last logged in"
    }
  })
});
