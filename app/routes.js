import React from "react";
import { Route } from "react-router";

export default (
  <Route path="/"
        component={require("./containers/ApplicationContainer")}>
    <Route path="users"
           component={require("./containers/UsersContainer")}>
      <Route path="create"
             component={require("./containers/UsersCreateContainer")} />
    </Route>
  </Route>
);
