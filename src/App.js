import React, { Component } from "react";
import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

// SCREENS
import Welcome from "./screens/Welcome";
import Register from "./screens/Register";
import Login from "./screens/Login";
import ForgotPsw from "./screens/ForgotPsw";

const ls = localStorage.getItem("data");

if (!ls) {
  localStorage.setItem("data", JSON.stringify([]));
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/register" component={Register} />
          <Route path="/forgotPsw" component={ForgotPsw} />
        </Switch>
      </Router>
    );
  }
}

export default App;
