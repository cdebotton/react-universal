import React from 'react';
import fs from 'fs';
import path from 'path';
import {Router} from 'react-router';
import Location from 'react-router/lib/Location';
import ServerContainer from '../containers/ServerContainer';

export const readWebpackStats = () => new Promise((resolve, reject) => {
  const statsFile = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'webpack-stats.json'
  );
  const defaults = {css: [], js: []};

  fs.readFile(statsFile, (err, data) => {
    if (err) {
      return resolve(defaults);
    }

    try {
      resolve(JSON.parse(data));
    }
    catch (ex) {
      resolve(defaults);
    }
  });
});

export const renderMarkupWithPayload = (url) => {
  return new Promise((resolve, reject) => {
    const routes = require('../../build/application.compiled');
    const location = new Location(url);
    Router.run(routes, location, (err, routerProps) => {
      if (err) {
        resolve(err);
      }
      else {
        const markup = React.renderToString(
          <ServerContainer routerProps={routerProps} />
        );
        const payload = ServerContainer.getStoreState();

        resolve({markup, payload});
      }
    });
  });
};

