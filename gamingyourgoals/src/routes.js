import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Dashboard from "./Components/Dashboard/Dashboard";
import Progress from "./Components/Progress/Progress";
import Goals from "./Components/Goals/Goals"

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/goals" component={Goals}/>
    <Route path="/new" component={Progress}/>
  </Switch>
);