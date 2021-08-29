import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./views/assets/styles/App.css";

import Page404 from "./views/pages/404";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";
import Leads from "./views/pages/Leads";
import NewLead from "./views/pages/NewLead";

import { checkSession } from "./helpers/session";

function PrivateRoutes() {
  return (
    <React.Fragment>
      {checkSession() ? (
        <React.Fragment>
          <Route exact path="/leads" component={Leads} />
          <Route exact path="/leads/new" component={NewLead} />
        </React.Fragment>
      ) : (
        <Redirect to="/" />
      )}
    </React.Fragment>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoutes />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
