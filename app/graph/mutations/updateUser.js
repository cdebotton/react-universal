import { GraphQLNonNull, GraphQLString } from "graphql/lib/type";
import { userType } from "../types";
import { User } from "../../models";

export default {
  type: userType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      name: "email",
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      name: "password",
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (obj, params, source, fieldASTs) => {
    const { id, email, password } = params;
    let user = await User.findById(id);

    return await user.update({ email, password });
  }
};
