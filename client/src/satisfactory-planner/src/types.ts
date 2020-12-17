/** [x, y] */
export type Coordinates = number[];

export type SquareState = {
  index: Coordinates;
  cssCoords: Coordinates;
  selected: boolean;
}

export type PlaneState = {
  index: number;
  angleDegrees: number;
  angleRadians: number;
  sinAngle: number;
  cosAngle: number;
  state: PlaneVisibilities;

  squares: SquareState[];
}

export enum PlaneVisibilities {
  Invisible,
  Visible,
  Active
}
