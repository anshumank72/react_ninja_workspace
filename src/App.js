import React from "react";
import Login from "./Component/Login";
import Home from "./Component/Home";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default App;