/**
 * This file references the function in composer.js as 'multiplyComposerNumbers'.
 * We'll need to rename it if we want everything to match the test's expectation of 'multiply'.
 */
const { multiply } = require('./composer'); // ✅ updated import

function calculateRectangles(rectangles) {
  return rectangles.map(({ width, height }) => multiply(width, height));
}

module.exports = calculateRectangles;
