import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Pages/Home";
import Saved from "./components/Pages/Saved";


const App = () => (
  <Router>
    <div className="container">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>
);


export default App;
