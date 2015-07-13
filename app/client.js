import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import BrowserHistory from "react-router/lib/BrowserHistory";
import routes from "./routes";
import store from "./store";

const history = new BrowserHistory();
const mount = document.getElementById("app");

React.render((
  <Provider store={ store }>
    { () => (
      <Router history={ history } >
        { routes }
      </Router>
    ) }
  </Provider>
), mount);
