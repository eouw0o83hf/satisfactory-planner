import { Coordinates } from "./types";

export const deduplicate = (source: Coordinates[]) =>
  source.filter(
    (x, i, a) => a.findIndex((el) => el[0] === x[0] && el[1] === x[1]) === i
  );
