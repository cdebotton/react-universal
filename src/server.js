import path from 'path';
import koa from 'koa';
import mount from 'koa-mount';
import proxy from 'koa-proxy';
import statics from 'koa-static';
import compress from 'koa-compress';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {Router} from 'react-router';
import Location from 'react-router/lib/Location';
import {green} from 'colors';
import {Schema} from '../data/schema';
import Layout from './views/Layout';
import Application from './containers/Application';

const ENV = process.env.NODE_ENV || 'development';
const APP_PORT = process.env.PORT || 3000;
const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 8080;
const WEBPACK_PORT = process.env.WEBPACK_PORT || 3333;

const app = koa();
const graphQLServer = express();

graphQLServer.use(graphqlHTTP({
  schema: Schema,
  pretty: true,
}));

graphQLServer.listen(GRAPHQL_PORT, () => {
  console.log(green(`GraphQL is running at http://localhost:${GRAPHQL_PORT}`));
});

app.use(compress());

app.use(statics(path.join(__dirname, '..', 'public')));

app.use(mount('/graphql', proxy({
  host: `http://localhost:${GRAPHQL_PORT}`,
})));

if (ENV === 'development') {
  app.use(mount('/build', proxy({
    host: `http://localhost:${WEBPACK_PORT}`,
  })));
}

app.use(function* render() {
  const stats = require('../build/webpack-stats.json');
  const routes = require('../build/routes-compiled');

  const routerProps = yield new Promise((resolve, reject) => {
    const location = new Location(this.req.url);
    Router.run(routes, location, (err, initialState) => {
      if (err) {
        return reject(err);
      }

      resolve(initialState);
    });
  });

  const markup = ReactDOM.renderToString(
    <Application>
      <Router {...routerProps} />
    </Application>
  );

  const html = ReactDOM.renderToStaticMarkup(
    <Layout
      markup={markup}
      payload={Application.getState()}
      {...stats} />
  );

  this.body = `<!doctype>\n${html}`;
});

app.listen(APP_PORT, () => {
  console.log(green(`App is running at http://localhost:${APP_PORT}`));
});
