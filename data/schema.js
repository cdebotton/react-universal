import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
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
  let ref: ?{};

  if (typeof refCreators[x] === 'function') {
    ref = refCreators[x](acc);
  }

  if (ref instanceof GraphQLObjectType) {
    acc[x] = ref;
  }

  const { type, connectionType, edgeType } = ref;

  type && acc[x] = type;
  connectionType && acc[x + 'Connection'] = connectionType;
  edgeType && acc[x + 'Edge'] = edgeType;

  return acc;
}, { nodeInterface, nodeField });

export const Schema = new GraphQLSchema({
  query: refs.rootQuery,
});
