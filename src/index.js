import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { SlashAuthProvider } from '@slashauth/slashauth-react';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <SlashAuthProvider 
    clientID="airs2d9_gbv5arln"
  >
    <App />
  </SlashAuthProvider>,
  rootElement
);
