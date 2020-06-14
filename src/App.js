import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from 'components/elements/NavBar';
import Home from "components/pages/Home";
import Audi from "components/pages/Audi";
import Social from "components/pages/Social";

function App() {

  return (
    <div className="app">
      <div className="gradient-background__ui01">
        <Router basename={process.env.PUBLIC_URL}>
          <div className="app__nav-bar">
            <NavBar />
          </div>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} component={Home}></Route>
            <Route path={process.env.PUBLIC_URL + "/socials"} component={Social}></Route>
            <Route path={process.env.PUBLIC_URL + "/audi"} component={Audi}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
