import React, { useContext } from "react";
import "./square.css";
import { Coordinates, SquareState } from "./types";
import { StateManagerContext } from "./stateManager";

const SquareLength = 70;

export const generateSquare = (index: Coordinates, angle: number) => {
  // scale, rotate, translate

  // scale
  const scaledX = SquareLength * index[0];
  const scaledY = SquareLength * index[1];

  // rotate
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);

  const rotatedX = scaledX * cos + scaledY * sin;
  const rotatedY = -scaledX * sin + scaledY * cos;

  // translate (center of square on indexed point)
  const x = rotatedX - SquareLength / 2;
  const y = rotatedY - SquareLength / 2;

  return {
    index,
    selected: false,
    cssCoords: [x, y],
  } as SquareState;
};

type Props = {
  active: boolean;
  /** radians from origin, unit-circle style */
  angle: number;
  state: SquareState;
  planeIndex: number;
};

const Square: React.FC<Props> = ({ angle, state, active, planeIndex }) => {
  const { mutateSquare } = useContext(StateManagerContext);

  const cssClasses = ["square"];
  if (state.selected) {
    cssClasses.push("on");
  }
  if (active) {
    cssClasses.push("active");
  }

  const setToggled = () => {
    console.log("toggling");
    if (active) {
      mutateSquare(planeIndex, {
        ...state,
        selected: !state.selected,
      });
    }
  };

  return (
    <div
      className={cssClasses.join(" ")}
      style={{
        left: state.cssCoords[0],
        top: state.cssCoords[1],
        transform: `rotate(-${angle}rad)`,
        opacity: 0.1,
      }}
      onClick={setToggled}
      onDragOver={setToggled}
    />
  );
};

export default Square;
