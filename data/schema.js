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
  () => {

  },
  () => {

  },
);

const refs = Object.keys(refCreators).reduce((acc, key) => {
  let ref: ?{};

  if (typeof refCreators[key] === 'function') {
    ref = refCreators[key](acc);
  }

  if (ref instanceof GraphQLObjectType) {
    acc[key] = ref;
  }

  const { type, connectionType, edgeType } = ref;

  if (type) {
    acc[key] = type;
  }

  if (connectionType) {
    acc[key + 'Connection'] = connectionType;
  }

  if (edgeType) {
    acc[key + 'Edge'] = edgeType;
  }

  return acc;
}, { nodeInterface, nodeField });

export const Schema = new GraphQLSchema({
  query: refs.rootQuery,
});
