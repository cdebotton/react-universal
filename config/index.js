/* @flow */

import { format } from 'util';
import { argv } from 'yargs';
import { resolve } from 'path';

export const NODE_ENV = (process.env.NODE_ENV || 'development').trim();
export const __DEV__ = NODE_ENV === 'development';
export const __PROD__ = NODE_ENV === 'production';
export const __DEBUG__ = __DEV__ && !argv.no_debug;

export const name = (process.env.APP_NAME || 'app').trim();
export const host = (process.env.HOST || 'localhost').trim();
export const port = parseInt((process.env.PORT || 3000), 10);

export function dirSetup(ROOT: string): Function {
  return function getDir(
    prefix: ?string,
    path: string,
    ...replacements: Array<any>
  ): string {
    const DIR = resolve.apply(null, [
      ROOT,
      (prefix || ''),
      replacements.length ? format(path, replacements) : path,
    ]);

    return DIR;
  };
}
