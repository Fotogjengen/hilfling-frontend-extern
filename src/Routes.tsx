import React, { FC } from "react";
import { Route, Swich } from "react-router-dom";
import App from "./views/App/App";
import About from "./views/About/About";
import MyProfile from "./views/MyProfile/MyProfile";
import showMotive from "./components/ImageViewer/ShowMotive";
import PhotoUpload from "./views/Intern/PhotoUpload/PhotoUpload";
import Arkivsjef from "./views/Intern/Arkivsjef/ArchiveBoss";
import NotFound from "./views/NotFound/NotFound";
import Search from "./components/searchPage/Search";
import ProtectedRoute from "./utils/auth/ProtectedRoute";
import CsaTester from "./views/CsaTester";

const Routes: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/motive" component={showMotive} />
        <Route exact path="/motive/:id" component={showMotive} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/search/:term" component={Search} />
        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/csa-tester" component={CsaTester} />
        <ProtectedRoute exact path="/intern/last-opp" component={PhotoUpload} />
        <ProtectedRoute exact path="/intern/arkivsjef" component={Arkivsjef} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
