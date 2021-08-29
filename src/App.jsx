import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./views/assets/styles/App.css";

import Login from "./views/pages/Login";
import Register from "./views/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
