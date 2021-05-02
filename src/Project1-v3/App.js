import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import User from "./User";
import NotFound from "./NotFound";

import Alert from "./Alert"; 
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GitState from "./GitState";
import AlertState from "./AlertState";

const App = () => {
  return (
    <GitState>
      <AlertState>
        <Router>  
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitState>
  );
}; 
export default App;
