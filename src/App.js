import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddTask />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
