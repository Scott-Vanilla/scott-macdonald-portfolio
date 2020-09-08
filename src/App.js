import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

import NavBar from 'components/elements/NavBar';
import Home from "components/pages/Home";
import Audi from "components/pages/Audi";
import Social from "components/pages/Social";

function App() {

  return (
    <div className="app">
      <div className="gradient-background__ui01">
        <Router basename="/scott-macdonald-portfolio">
          <div className="app__nav-bar">
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/socials" component={Social}></Route>
            <Route path="/audi" component={Audi}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
