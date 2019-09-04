import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FirstComponent from "./components/FirstComponent";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={FirstComponent} />
    </Router>
  );
};

export default Routes;
