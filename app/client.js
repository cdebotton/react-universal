import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import AsyncProps from "react-router/lib/experimental/AsyncProps";
import BrowserHistory from "react-router/lib/BrowserHistory";
import routes from "./routes";
import store from "./store";

const history = new BrowserHistory();
const mount = document.getElementById("app");

React.render((
  <Provider store={ store }>
    { () => (
      <Router history={ history }>
        { routes }
      </Router>
    ) }
  </Provider>
), mount);
