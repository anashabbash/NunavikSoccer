import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer1 from "./components/Footer";
import Home from "./components/Home";
import Resources from "./components/Resources";
import Events from "./components/Events";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import participationAndFacilities from "./components/participationAndFacilities";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resources" exact component={Resources} />
          <Route path="/events" exact component={Events} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route
            path="/participation"
            exact
            component={participationAndFacilities}
          />
        </Switch>
        <Footer1 />
      </Router>
    </div>
  );
}

export default App;
