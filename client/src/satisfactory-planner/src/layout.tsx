import React, { useContext } from "react";
import Plane from "./plane";
import { StateManagerContext } from "./stateManager";

const Layout = () => {
  const state = useContext(StateManagerContext);

  return (
    <div
      style={{
        position: "absolute",
        left: state.windowDimensions[0] / 2,
        top: state.windowDimensions[1] / 2,
        width: 1,
        height: 1,
        border: "solid red 3px",
      }}
    >
      {state.planes.map((a) => (
        <Plane key={a.index} state={a} />
      ))}
    </div>
  );
};

export default Layout;
