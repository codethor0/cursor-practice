/**
 * Also references the same function from composer.js.
 */
// composerUsageTwo.js
const { multiply } = require('./composer'); // ✅ updated import

function calculateVolumes(cubes) {
  return cubes.map(({ width, height, depth }) =>
    multiply(multiply(width, height), depth)
  );
}

module.exports = calculateVolumes;