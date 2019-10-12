import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FirstComponent from "./components/FirstComponent";
import Test from "./components/Test";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Test} />
    </Router>
  );
};

export default Routes;
