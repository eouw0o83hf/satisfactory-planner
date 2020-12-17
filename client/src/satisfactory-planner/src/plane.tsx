import React from "react";
import Square, { generateSquare } from "./square";
import { PlaneState, PlaneVisibilities, SquareState } from "./types";

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

const initVisibility = (index: number) => {
  if (index === 0) {
    return PlaneVisibilities.Active;
  }
  if (index % 3 === 0) {
    return PlaneVisibilities.Visible;
  }
  return PlaneVisibilities.Invisible;
};

export const generatePlanes = () => Array.from(Array(9)).map(generatePlane);

const generatePlane = (_: any, index: number) => {
  const angleDegrees = index * 10;
  const angleRadians = toRadians(angleDegrees);

  return {
    index,
    angleDegrees,
    angleRadians,
    sinAngle: Math.sign(angleRadians),
    cosAngle: Math.cos(angleRadians),
    squares: initSquares(angleRadians),
    state: initVisibility(index),
  } as PlaneState;
};

const PlaneSize = 5;

const initSquares = (angle: number) => {
  const squares = new Array<SquareState>();
  for (let i = -PlaneSize; i <= PlaneSize; ++i) {
    for (let j = -PlaneSize; j <= PlaneSize; ++j) {
      squares.push(generateSquare([i, j], angle));
    }
  }
  return squares;
};

type Props = {
  state: PlaneState;
};

const Plane: React.FC<Props> = ({ state: planeState }) => {
  if (planeState.state === PlaneVisibilities.Invisible) {
    return null;
  }

  return (
    <>
      {planeState.squares.map((square) => (
        <Square
          key={`${square.index[0]}-${square.index[1]}`}
          state={square}
          angle={planeState.angleRadians}
          active={planeState.state === PlaneVisibilities.Active}
          planeIndex={planeState.index}
        />
      ))}
    </>
  );
};

export default Plane;
