import { DIRECTION } from "./const";

export function getProperIndex(direction: string, index: number) {
  if (direction === DIRECTION.right) {
    if (index) {
      return index - 1;
    } else {
      return 2;
    }
  } else {
    if (index === 2) {
      return 0;
    } else {
      return index + 1;
    }
  }
}
