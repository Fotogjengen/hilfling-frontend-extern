import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./views/App/App";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  );
};

export default Routes;
