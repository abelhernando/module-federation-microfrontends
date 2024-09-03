import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount function to start up the app
function mount(element) {
  ReactDOM.render(<App />, element);
}

// If dev and isolation call immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through container and we should export mount function
export { mount };
