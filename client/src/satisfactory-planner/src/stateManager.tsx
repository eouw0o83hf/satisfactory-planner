import React, { useCallback, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { generatePlanes } from "./plane";
import { Coordinates, PlaneState, SquareState } from "./types";

export type State = {
  planes: PlaneState[];
  windowDimensions: Coordinates;
  mutatePlane: (planeState: PlaneState) => void;
  mutateSquare: (planeIndex: number, squareState: SquareState) => void;
};

export const StateManagerContext = React.createContext({} as State);

const StateManager: React.FC = ({ children }) => {
  const [planes, setPlanes] = useState(generatePlanes());
  const windowDimensions = useWindowDimensions();

  const mutatePlane = useCallback(
    (planeState: PlaneState) =>
      setPlanes((prevPlanes) =>
        prevPlanes.map((a) => (a.index === planeState.index ? planeState : a))
      ),
    []
  );

  const mutateSquare = useCallback(
    (planeIndex: number, squareState: SquareState) =>
      setPlanes((prevPlanes) => {
        const plane = prevPlanes.find((a) => a.index === planeIndex)!;
        const newPlane = {
          ...plane,
          squares: plane.squares.map((a) =>
            a.index[0] === squareState.index[0] &&
            a.index[1] === squareState.index[1]
              ? squareState
              : a
          ),
        } as PlaneState;
        return prevPlanes.map((a) => (a.index === planeIndex ? newPlane : a));
      }),
    []
  );

  const state = {
    planes,
    windowDimensions,
    mutatePlane,
    mutateSquare,
  };

  return (
    <StateManagerContext.Provider value={state}>
      {children}
    </StateManagerContext.Provider>
  );
};

export default StateManager;
