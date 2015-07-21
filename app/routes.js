import React from "react";
import { Route } from "react-router";

import {
  ApplicationContainer,
  UsersContainer,
  UsersCreateContainer
} from "./containers";

export default (
  <Route path="/" component={ApplicationContainer}>
    <Route path="users" component={UsersContainer}>
      <Route path="create" component={UsersCreateContainer} />
    </Route>
  </Route>
);
