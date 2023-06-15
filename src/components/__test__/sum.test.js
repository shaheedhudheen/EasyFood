import { template } from "@babel/core";
import { sum } from "../sum";

test("check sum of +ve numbers", () => {
  expect(sum(2, 5)).toBe(7);
});
