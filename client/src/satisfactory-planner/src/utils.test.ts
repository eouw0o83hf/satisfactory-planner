import { deduplicate } from "./utils";

test("tests run", () => {
  const input = [
    [0, 0],
    [0, 0],
    [0, 1],
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 0],
    [0, 0],
    [1, 1],
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 1],
  ];
  const deduplicated = deduplicate(input);

  expect(deduplicated).toHaveLength(4);

  expect(deduplicated[0][0]).toEqual(0);
  expect(deduplicated[0][1]).toEqual(0);

  expect(deduplicated[1][0]).toEqual(0);
  expect(deduplicated[1][1]).toEqual(1);

  expect(deduplicated[2][0]).toEqual(1);
  expect(deduplicated[2][1]).toEqual(0);

  expect(deduplicated[3][0]).toEqual(1);
  expect(deduplicated[3][1]).toEqual(1);

  expect(deduplicated[4]).toBeUndefined();
});
