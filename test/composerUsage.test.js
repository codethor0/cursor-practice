/**
 * This test imports a function named 'multiply' from composer.js,
 * but composer.js exports 'multiplyComposerNumbers' instead.
 * Also, the usage files (composerUsageOne/Two) reference 'multiplyComposerNumbers'.
 * We need to rename them to match 'multiply' so everything lines up.
 */
const { multiply } = require("../src/composer");
const calculateRectangles = require("../src/composerUsageOne");
const calculateVolumes = require("../src/composerUsageTwo");

test("multiply is a function that returns a * b", () => {
  // This will fail at import time, because 'multiply' is undefined
  expect(multiply(2, 3)).toBe(6);
});

test('calculateRectangles uses "multiply" to compute area', () => {
  const rectangles = [
    { width: 2, height: 3 }, // => 6
    { width: 4, height: 5 }, // => 20
  ];
  const results = calculateRectangles(rectangles);
  expect(results).toEqual([6, 20]);
});

test('calculateVolumes uses "multiply" to compute volume', () => {
  const cubes = [
    { width: 2, height: 3, depth: 4 }, // => 24
    { width: 1, height: 2, depth: 3 }, // => 6
  ];
  const results = calculateVolumes(cubes);
  expect(results).toEqual([24, 6]);
});
