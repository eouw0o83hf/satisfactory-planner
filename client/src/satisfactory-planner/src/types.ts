/** [x, y] */
export type Coordinates = number[];

export type SquareState = {
  /** [x, y] index from center */
  index: Coordinates;
  /** [left, top] for absolute position */
  cssCoords: Coordinates;
  /** 2d array of corner coordinates for nexus detection */
  cornerCoords: Coordinates[];
  /** whether or not the square has been selected */
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
