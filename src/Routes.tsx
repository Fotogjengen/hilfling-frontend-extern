import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./views/App/App";
import About from "./views/About/About";
import MyProfile from "./views/MyProfile/MyProfile";

const Routes: FC = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/myprofile" component={MyProfile} />
    </Router>
  );
};

export default Routes;
