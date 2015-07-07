import {
  GraphQLNonNull,
  GraphQLString
} from "graphql/lib/type";
import { userType } from "../types";
import { User } from "../models";

export default {
  type: userType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, { id }, source, fieldASTs) => {
    const user = await User.findById(id);

    return user.toJSON();
  }
}
