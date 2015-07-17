import { GraphQLList } from "graphql/lib/type";
import { User } from "../../models";
import { userType } from "../types";

export default {
  type: new GraphQLList(userType),
  resolve: async (root, params, source, fieldASTs) => {
    const users = await User.findAll();

    return [{
      id: 1,
      email: "cdebotton@gmail.com",
      firstName: "Christian",
      lastName: "de Botton"
    }];
    // return users.map((user) => user.toJSON());
  }
};
