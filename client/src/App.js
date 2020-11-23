import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Search from "./views/Search"
import Saved from "./views/Saved"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          {/* <Route path="/search">
            <Search/>
          </Route> */}
          <Route path="/saved">
            <Saved/>
          </Route>
          <Route path="/">
            <Search/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
