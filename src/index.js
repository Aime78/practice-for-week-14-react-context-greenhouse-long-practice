import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import ClimateProvider from "./context/ClimateContext";

function Root() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ClimateProvider>
          <App />
        </ClimateProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
