import React from "react";
import { Route } from "react-router";

import {
  ApplicationContainer,
  AdminContainer,
  UsersContainer
} from "./containers";

export default (
  <Route>
    <Route path="/" component={ApplicationContainer} />
    <Route path="/admin" component={AdminContainer}>
      <Route path="/users" component={UsersContainer} />
    </Route>
  </Route>
);
