import * as React from "react";
import { render } from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import guistyles from "./styles/utilities.module.css";
import { GuiFooter } from "./gui-components";
import HeaderComponent from "./components/Header/Header";
import { theme } from "./styles/muiStyles";

const Root: React.FC = () => (
  <>
    <MuiThemeProvider theme={theme}>
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
