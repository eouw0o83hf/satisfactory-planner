import React from "react";
import "./App.css";
import Layout from "./layout";
import StateManager from "./stateManager";

const App = () => {
  return (
    <StateManager>
      <Layout />
    </StateManager>
  );
};

export default App;
