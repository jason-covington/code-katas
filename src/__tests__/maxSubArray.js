const { maxSubArray } = require("../solutions/maxSubArray");
// const { maxSubArray } = require("../katas/maxSubArray");

test("maxSubArray()", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
