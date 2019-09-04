import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/index";

import Routes from "./Routes";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

render(<Root />, document.getElementById("root"));
