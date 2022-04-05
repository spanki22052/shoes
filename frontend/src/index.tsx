import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {
  FooterComponent,
  MainpageComponent,
  NavbarComponent,
} from "./components";
import "antd/dist/antd.css";
import "./main.scss";
import { Provider } from "react-redux";
import { store } from "./components/state/store";

ReactDOM.render(
  <Provider store={store}>
    <NavbarComponent />
    <MainpageComponent />
    <FooterComponent />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
