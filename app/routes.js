import React from "react";
import { Route } from "react-router";
import {
  Application,
  Home
} from "./components";

export default (
  <Route components={ Application }>
    <Route path="/"
           components={ Home } />
  </Route>
);
