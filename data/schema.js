import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    viewer: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});

export const Schema = new GraphQLSchema({
  query: queryType,
});
