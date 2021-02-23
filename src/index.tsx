import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/index";
import "./index.css";
import Routes from "./Routes";

import guistyles from "./styles/utilities.module.css";
import { GuiFooter } from "./gui-components";
import HeaderComponent from "./components/Header/Header";

const store = configureStore();

const Root: React.FC = () => (
  <Provider store={store}>
    <div>
      <div className={guistyles.container}>
        <div className={"container"}>
          <HeaderComponent />
          <Routes />
        </div>
      </div>
      <GuiFooter />
    </div>
  </Provider>
);

render(<Root />, document.getElementById("root"));
