import React from 'react';
import './App.css';
import Home from "./Home"
import Receipt from "./receipt"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/receipt">
          <Receipt />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
