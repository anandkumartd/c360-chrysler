// routes.jsx
import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
// import { Dashboard, Journey, Attributes, Behaviors } from "./views/index";
// import ProfileDetail from "./components/ProfileDetail";

const Routes = () => (
  //   <App>
  // <Route exact path="/profile_detail/:email" component={ProfileDetail} />
  // <Route exact path="/dashboard" component={Dashboard} />
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
  //   </App>
);

export default Routes;
