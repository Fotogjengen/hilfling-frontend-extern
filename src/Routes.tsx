import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./views/App/App";
import About from "./views/About/About";
import MyProfile from "./views/MyProfile/MyProfile";

/*const config = { // TODO: Can probably use something similar for Caro-FG-Auth
  issuer: "https://dev-812828.okta.com/oauth2/default",
  redirectUri: window.location.origin + "/implicit/callback",
  clientId: "0oa2lxbl9mygTznZy357",
  pkce: true,
};*/

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
