import { GraphQLSchema } from 'graphql';
import { nodeDefinitions } from 'graphql-relay';
import rootQuery from './rootQueryField';
import rootMutation from './rootMutationField';
import * as types from './types';

const refCreators = {
  rootQuery,
  rootMutation,
  ...types,
};

const {
  nodeInterface,
  nodeField,
} = nodeDefinitions(
  (globalId) => {

  },
  (object) => {

  },
);

let refs = Object.keys(refCreators).reduce((acc, x) => {
  if (typeof refCreators[x] === 'function') {
    acc[x] = refCreators[x](acc);
  }

  return acc;
}, { nodeInterface, nodeField });

export const Schema = new GraphQLSchema({
  query: refs.rootQuery,
});
