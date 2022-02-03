import * as React from "react";
import { render } from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import guistyles from "./styles/utilities.module.css";
import { GuiFooter } from "./gui-components";
import HeaderComponent from "./components/Header/Header";
import { theme } from "./styles/muiStyles";
import { Auth0Provider } from "@auth0/auth0-react";

const Root: React.FC = () => (
  <>
    <Auth0Provider
      domain="carosa.eu.auth0.com"
      clientId="7zfnSz84t1gQLq9D5NxFAbQPijqY1IgK"
      redirectUri={window.location.origin}
    >
      <ThemeProvider theme={theme}>
        <div className={guistyles.container}>
          <div className={"container"}>
            <Router>
              <HeaderComponent />
              <Routes />
            </Router>
          </div>
        </div>
        <GuiFooter />
      </ThemeProvider>
    </Auth0Provider>
  </>
);

render(<Root />, document.getElementById("root"));
