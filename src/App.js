import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import NavBar from "components/elements/NavBar";

import Home from "components/pages/Home";
import Clients from "components/pages/Clients";
import Social from "components/pages/Social";
import Projects from "components/pages/Projects";
import Blog from "components/pages/Blog";
import Post1 from "components/pages/blogposts/Post1";

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
          <Route path="/clients" component={Clients}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/post1" component={Post1}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
