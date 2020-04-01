import React from "react";
import "./reset.css";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
// import Account from "./Components/Account/Account";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import AboutUs from "./Components/AboutUs/AboutUs";
// import Subscribe from "./Components/Subscribe/Subscribe";
// import Contact from "./Components/Contact/Contact";

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
        {/* <Route path="/Account" component={Account} /> */}
        {/* <Route path="/Dashboard" component={Dashboard} /> */}
        {/* <Route path="/AboutUs" component={AboutUs} /> */}
        {/* <Route path="/Subscribe" component={Subscribe} /> */}
        {/* <Route path="/Contact" component={Contact} /> */}
        {/* <Route path="/Footer" component={Footer} /> */}
      </Switch>
      <Footer />
      </div>
    </div>
  );
}

export default App;