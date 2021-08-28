import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./views/assets/styles/App.css";

import Register from "./views/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
