import { useContext } from "react";
import { StateManagerContext } from "./stateManager";
import { Coordinates, PlaneVisibilities } from "./types";

const filterNexi = (planes: Coordinates[][]) => {
  const accumulator = new Array<Coordinates>();
};

const Nexus = () => {
  const { planes } = useContext(StateManagerContext);

  const activePlanes = planes.filter(
    (a) => a.state !== PlaneVisibilities.Invisible
  );

  if (activePlanes.length <= 1) {
    return null;
  }

  const verticesByPlane = activePlanes.map((plane) =>
    plane.squares.flatMap((square) => square.cornerCoords)
  );
};

export default Nexus;
