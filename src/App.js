import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import NavBar from "components/elements/NavBar";

import Home from "components/pages/Home";
import Audi from "components/pages/Audi";
import Social from "components/pages/Social";
import Projects from "components/pages/Projects";

function App() {
  return (
    <div className="app">
      <div className="app__nav-bar">
        <NavBar />
      </div>
      <Router basename="/scott-macdonald-portfolio">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={Social}></Route>
          <Route path="/clients" component={Audi}></Route>
          <Route path="/projects" component={Projects}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
