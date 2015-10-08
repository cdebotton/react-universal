/* @flow */

import fs from 'fs';
import thenify from 'thenify';

const readFileAsync: Function = thenify(fs.readFile);

export type WebStats = {
  css: Array<string>;
  js: Array<string>;
};

export default async function readJSON(path: string): Promise {
  try {
    const json: string = await readFileAsync(path);
    const data: WebStats = {
      css: [],
      js: [],
      ...JSON.parse(json),
    };

    return data;
  } catch (ex) {
    throw ex;
  }
}
