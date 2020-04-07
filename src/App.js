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
import Step1 from "./Components/Steps/Step1";
import Step2 from "./Components/Steps/Step2";
import Step3 from "./Components/Steps/Step3";
import Step4 from "./Components/Steps/Step4";

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
        <Route path="/Step1" component={Step1} />
        <Route path="/Step2" component={Step2} />
        <Route path="/Step3" component={Step3} />
        <Route path="/Step4" component={Step4} />
      </Switch>
      <Footer />
      </div>
    </div>
  );
}

export default App;