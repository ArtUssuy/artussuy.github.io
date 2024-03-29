import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import allReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById("root")
);
