/* @flow */

import express from 'express';
import graphQLHTTP from 'express-graphql';
import { Schema } from './schema';

const app = express();

app.use(graphQLHTTP(request => ({
  schema: Schema,
  pretty: true,
  rootValue: { sid: request.headers.authorization },
})));

export default app;
