import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./templates/Navbar";
import Login from "./views/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Navbar />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
