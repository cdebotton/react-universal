/* @flow */

import express from 'express';
import graphQLHTTP from 'express-graphql';
import { Schema } from './schema';
import {
  __DEV__,
  __DEBUG__,
} from '../config';

export const app = express();

app.use(graphQLHTTP(request => {
  const { authorization } = request.header;

  return {
    schema: Schema,
    pretty: __DEV__,
    graphiql: __DEBUG__,
    rootValue: { authorization },
  };
}));
