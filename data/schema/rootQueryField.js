import { GraphQLObjectType } from 'graphql';

export default (refs) => new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    node: refs.nodeField,
  }),
});
