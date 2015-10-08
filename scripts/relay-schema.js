#!/usr/bin/env node_modules/.bin/babel-node

/* @flow */

import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';
import { Schema } from '../data/schema';

(async () => {
  const result = await graphql(Schema, introspectionQuery);

  if (result.errors) {
    console.error(`Relay Error: ${JSON.stringify(result.errors, null, 2)}`);
  } else {
    const target = path.join(__dirname, '..', 'dist', 'server', 'schema.json');
    fs.writeFileSync(target, JSON.stringify(result, null, 2));
    console.log(`Success: Relay Schema Compiled`);
  }
})();
