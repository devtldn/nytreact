import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Pages/Home";
import Saved from "./components/Pages/Saved";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" home={Home} />
          <Route exact path="/saved" saved={Saved} />
        </div>
      </Router>
    )
  }
}


export default App;
