import React from "react";
import { Route } from "react-router";
import AsyncProps from "react-router/lib/experimental/AsyncProps";
import * as Components from "./components";

export default (
  <Route component={ Components.Application }>
    <Route path="/"
           component={ Components.Home } />
    <Route path="users"
           component={ Components.Users } />
  </Route>
);
