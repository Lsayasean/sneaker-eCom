import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/about" component={About} />
  </Switch>
);
