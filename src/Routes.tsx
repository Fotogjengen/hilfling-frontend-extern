import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import App from "./views/App/App";
import About from "./views/About/About";
import MyProfile from "./views/MyProfile/MyProfile";
import showMotive from "./components/Temp/ShowMotive";
import Arkivsjef from "./views/Arkivsjef/ArchiveBoss";
import NotFound from "./views/NotFound/NotFound";
import EditMyProfile from "./views/EditMyProfile/EditMyProfile";

const Routes: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/intern/Arkivsjef" component={Arkivsjef} />
        <Route exact path="/motive" component={showMotive} />
        <Route exact path="/about" component={About} />
        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/myprofile/edit" component={EditMyProfile} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
