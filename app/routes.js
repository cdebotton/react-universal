import React from "react";
import { Route } from "react-router";
import Application from "./components/Application";
import Home from "./components/Home";

export default (
  <Route component={ Application }>
    <Route path="/" component={ Home } />
  </Route>
);
