import React, { FC } from "react";
import { Route } from "react-router-dom";
import App from "./views/App/App";
import About from "./views/About/About";
import MyProfile from "./views/MyProfile/MyProfile";
import DigitalPhotoUpload from "./views/PhotoUpload/DigitalPhotoUpload";
import showMotive from "./components/Temp/ShowMotive";

const Routes: FC = () => {
  return (
    <>
      <Route exact path="/" component={App} />
      <Route exact path="/motive" component={showMotive} />
      <Route exact path="/about" component={About} />
      <Route exact path="/myprofile" component={MyProfile} />

      <Route exact path="/intern/last-opp" component={DigitalPhotoUpload} />
    </>
  );
};

export default Routes;
