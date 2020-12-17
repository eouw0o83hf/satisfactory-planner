import { useContext } from "react";
import { MutatePlane, StateManagerContext } from "./stateManager";
import "./menu.css";
import { PlaneState, PlaneVisibilities } from "./types";

const PlaneControl: React.FC<{
  plane: PlaneState;
  mutatePlane: MutatePlane;
}> = ({ plane, mutatePlane }) => {
  const setVisibility = (visibility: PlaneVisibilities) =>
    mutatePlane({ ...plane, state: visibility });

  const toggleVisible = () => {
    if (plane.state === PlaneVisibilities.Invisible) {
      setVisibility(PlaneVisibilities.Visible);
    } else {
      setVisibility(PlaneVisibilities.Invisible);
    }
  };

  const toggleActive = () => {
    if (plane.state === PlaneVisibilities.Active) {
      setVisibility(PlaneVisibilities.Visible);
    } else {
      setVisibility(PlaneVisibilities.Active);
    }
  };

  return (
    <div className="plane-control">
      <span className="checkbox">
        <input
          type="checkbox"
          name="visible"
          checked={plane.state !== PlaneVisibilities.Invisible}
          onClick={toggleVisible}
        />
      </span>
      <span className="checkbox">
        <input
          type="checkbox"
          name="active"
          checked={plane.state === PlaneVisibilities.Active}
          onClick={toggleActive}
        />
      </span>
      <span className="name">Plane {plane.index}</span>
    </div>
  );
};

const Menu = () => {
  const { planes, mutatePlane } = useContext(StateManagerContext);

  return (
    <div className="menu">
      <span className="tiny-label">Visible</span>
      <span className="tiny-label">Active</span>
      {planes.map((plane) => (
        <PlaneControl
          key={plane.index}
          mutatePlane={mutatePlane}
          plane={plane}
        />
      ))}
    </div>
  );
};

export default Menu;
