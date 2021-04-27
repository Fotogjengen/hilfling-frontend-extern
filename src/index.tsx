import * as React from "react";
import { render } from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import guistyles from "./styles/utilities.module.css";
import { GuiFooter } from "./gui-components";
import HeaderComponent from "./components/Header/Header";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Raleway", sans-serif`,
  },
});

const Root: React.FC = () => (
  <>
    <MuiThemeProvider theme={THEME}>
      <div className={guistyles.container}>
        <div className={"container"}>
          <Router>
            <HeaderComponent />
            <Routes />
          </Router>
        </div>
      </div>
      <GuiFooter />
    </MuiThemeProvider>
  </>
);

render(<Root />, document.getElementById("root"));
