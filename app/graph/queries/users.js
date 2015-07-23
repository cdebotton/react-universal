import { GraphQLList } from "graphql/lib/type";
import { User } from "../../models";
import { userType } from "../types";

const getProjections = (fieldASTs) => {
  const {selections} = fieldASTs.selectionSet;
  return selections.reduce((projections, selection) => {
    projections.push(selection.name.value);
    return projections;
  }, []);
};

export default {
  type: new GraphQLList(userType),
  resolve: async (root, params, source, fieldASTs) => {
    const users = await User.findAll({
      attributes: getProjections(fieldASTs)
    });

    return users.map((user) => user.toJSON());
  }
};
