/* @flow */

import fs from 'fs';
import thenify from 'thenify';

const readFileAsync = thenify(fs.readFile);

export default async function readJSON(path) {
  try {
    let json = await readFileAsync(path);
    let data = JSON.parse(json);

    return data;
  } catch (ex) {
    throw ex;
  }
}
