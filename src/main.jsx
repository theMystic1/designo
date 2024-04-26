import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager
      shouldForwardProp={(props) => props !== "img" || props !== "bgImg"}
    >
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
