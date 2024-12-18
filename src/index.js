import React from "react";
import "bulma/css/bulma.css";
import "./styles.css";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
