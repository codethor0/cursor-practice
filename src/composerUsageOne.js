/**
 * This file references the function in composer.js as 'multiplyComposerNumbers'.
 * We'll need to rename it if we want everything to match the test's expectation of 'multiply'.
 */
const { multiplyComposerNumbers } = require('./composer');

function calculateRectangles(rectangles) {
  // Each rectangle has { width, height }
  return rectangles.map(({ width, height }) => multiplyComposerNumbers(width, height));
}

module.exports = calculateRectangles;
