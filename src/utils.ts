import { Point } from "./store/types";
import { Mapping } from "./store/series/types";

export const interpolation = (
  arr: Mapping,
  min: number,
  max: number
): Mapping => {
  let newArr = arr;

  arr.map((p: Point, idx: number) => {
    if (
      p.x > min &&
      p.x < max &&
      newArr[idx + 1] &&
      Math.abs(p.x - newArr[idx + 1].x) > 1
    ) {
      newArr.push({
        x: p.x + 1,
        y: Math.floor((newArr[idx + 1].y - p.y) / 3)
      });
    }
  });

  newArr.sort((a: any, b: any) => {
    return a.x - b.x;
  });

  return newArr;
};
