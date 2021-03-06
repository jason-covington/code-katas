const { minimumSteps } = require("../solutions/minimumSteps");
// const { minimumSteps } = require("../katas/minimumSteps");

test("minimumSteps()", () => {
  expect(minimumSteps([4, 6, 3], 7)).toBe(1);
  expect(minimumSteps([10, 9, 9, 8], 17)).toBe(1);
  expect(minimumSteps([8, 9, 10, 4, 2], 23)).toBe(3);
  expect(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)).toBe(8);
  expect(minimumSteps([4, 6, 3], 2)).toBe(0);
});
