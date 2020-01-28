import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/index";
import "./index.css";

import Routes from "./Routes";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <div>
      <Routes />
    </div>
  </Provider>
);

render(<Root />, document.getElementById("root"));
