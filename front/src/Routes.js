import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
};

export default Routes;