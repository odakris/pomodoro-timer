import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Pomodoro from "./Pomodoro";
import reducer, { initialState } from "./reducer";
import StateProvider from "./contexts/stateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <Pomodoro />
    </StateProvider>
  </React.StrictMode>
);
