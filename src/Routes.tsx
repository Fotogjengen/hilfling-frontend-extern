import React, { FC } from "react";
import { Route } from "react-router-dom";
import App from "./views/App/App";
import PhotoGangBangers from "./views/PhotoGangBangers/PhotoGangBangers";
import MyProfile from "./views/MyProfile/MyProfile";
import About from "./views/About/About";

const Routes: FC = () => {
  return (
    <>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/fotogjengen" component={PhotoGangBangers} />
      <Route exact path="/myprofile" component={MyProfile} />
    </>
  );
};

export default Routes;
