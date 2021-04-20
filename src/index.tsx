import * as React from "react";
import { render } from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

import guistyles from "./styles/utilities.module.css";
import { GuiFooter } from "./gui-components";
import HeaderComponent from "./components/Header/Header";

const Root: React.FC = () => (
  <>
    <div className={guistyles.container}>
      <div className={"container"}>
        <Router>
          <HeaderComponent />
          <Routes />
        </Router>
      </div>
    </div>
    <GuiFooter />
  </>
);

render(<Root />, document.getElementById("root"));
