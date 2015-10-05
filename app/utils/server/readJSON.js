/* @flow */

import fs from 'fs';
import thenify from 'thenify';

const readFileAsync = thenify(fs.readFile);

export type WebStats = {
  css: Array<string>;
  js: Array<string>;
};

export default async function readJSON(path: string): Promise {
  try {
    let json = await readFileAsync(path);
    let data = {
      css: [],
      js: [],
      ...JSON.parse(json),
    };

    return data;
  } catch (ex) {
    throw ex;
  }
}
