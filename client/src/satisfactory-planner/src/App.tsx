import React from "react";
import "./App.css";
import Layout from "./layout";
import Menu from "./menu";
import StateManager from "./stateManager";

const App = () => {
  return (
    <StateManager>
      <Menu />
      <Layout />
    </StateManager>
  );
};

export default App;
