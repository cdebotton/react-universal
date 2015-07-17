import React from "react";
import { Router } from "react-router";
import Location from "react-router/lib/Location";
import Application from "../containers/Application";
import HTMLDocument from "../views/HTMLDocument";

export default function () {
  return function* (next) {
    const routes = yield getRoutes();
    const routerProps = yield getRouterProps(routes, this.req.url);
    const markup = React.renderToString(
      <Application getRouter={() => (
        <Router {...routerProps} />
      )} />
    );
    const stats = require("../assets/webpack-stats.json");
    const store = Application.getStoreState();
    const html = React.renderToStaticMarkup(
      <HTMLDocument markup={ markup }
                    store={ store }
                    { ...stats } />
    );

    this.body = `<!doctype html>${html}`;
  };
}

const getRoutes = () => new Promise((resolve, reject) => {
  let timer = setInterval(() => {
    try {
      const routes = require("../assets/routes.compiled");
      clearInterval(timer);
      timer = null;
      resolve(routes);
    }
    catch (ex) {
      console.log("Awaiting assets...");
    }
  }, 100);
});

const getRouterProps = (routes, url) => new Promise((resolve, reject) => {
  const location = new Location(url);

  try {
    Router.run(routes, location, (err, props, abort={}) => {
      if (abort.isCancelled) {
        return reject(abort);
      }
      err ? reject(err) : resolve(props);
    });
  }
  catch (ex) {
    reject(ex);
  }
});
