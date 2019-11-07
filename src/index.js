import React from "react";
import ReactDOM from "react-dom";

// *** STEP TWO - set up store and provider ***
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "bulma/css/bulma.css";
import "./styles.scss";
import { reducer } from "./reducers/reducer";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
