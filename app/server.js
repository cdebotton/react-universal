import http from 'http';
import path from 'path';
import koa from 'koa';
import compress from 'koa-compress';
import serveStatic from 'koa-static';
import React from 'react';
import Layout from './views/Layout';
import {
  readWebpackStats,
  renderMarkupWithPayload
} from './utils/server-utils';

const app = koa();
const PORT = process.env.PORT || 3000;

app.use(compress());
app.use(serveStatic(path.join(__dirname, '..', 'public')));
app.use(function* render() {
  const stats = yield readWebpackStats();
  const {markup, payload} = yield renderMarkupWithPayload(this.req.url);

  const html = React.renderToStaticMarkup(
    <Layout
      markup={markup}
      payload={payload}
      {...stats} />
  );

  this.body = `<!doctype>\n${html}`;
});

const server = http.createServer(app.callback());

server.listen(PORT, () => {
  const {port} = server.address();
  console.log(`Web server listening on port ${port}.`);
});
