import React from "react";
import "./reset.css";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Account from "./Components/Account/Account";
import Objects from "./Components/Objects/Objects";

function App() {
  return (
    <div className="App">
      <div className="Navigation-bar">
      <Navigation>  
      </Navigation>
      </div>
      <div className="main-content">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Account" component={Account} />
        <Route path="/Objects" component={Objects} />
      </Switch>
      <Footer />
      </div>
    </div>
  );
}

export default App;