import React from "react";
import { Router } from "react-router";
import BrowserHistory from "react-router/lib/BrowserHistory";
import routes from "./routes";
import Application from "./containers/Application";

const history = new BrowserHistory();
const mount = document.getElementById("application");

React.render((
  <Application getRouter={() => (
     <Router history={history}
             children={routes} />
   )} />
), mount);
