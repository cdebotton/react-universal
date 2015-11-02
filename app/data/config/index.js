/* @flow */

import * as rootConfig from '../../../config';

export const NODE_ENV = rootConfig.NODE_ENV;
export const __DEV__ = rootConfig.__DEV__;
export const __PROD__ = rootConfig.__PROD__;
export const __DEBUG__ = rootConfig.__DEBUG__;
export const host = (process.env.GRAPHQL_HOST || 'localhost');
export const port = parseInt((process.env.GRAPHQL_PORT || 8080), 10);
