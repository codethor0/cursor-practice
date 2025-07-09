
/**
 * @fileoverview Rectangle area calculation utility
 * @author Isaac Thor <codethor@gmail.com>
 * @version 1.0.0
 * @since 2025-01-09
 */

const { multiply } = require('./composer');

/**
 * Calculates areas for an array of rectangles
 * 
 * @param {Array<Object>} rectangles - Array of rectangle objects
 * @param {number} rectangles[].width - Width of the rectangle
 * @param {number} rectangles[].height - Height of the rectangle
 * @returns {Array<number>} Array of calculated areas
 * 
 * @example
 * const rectangles = [
 *   { width: 5, height: 3 },
 *   { width: 4, height: 2 }
 * ];
 * calculateRectangles(rectangles); // Returns [15, 8]
 */
function calculateRectangles(rectangles) {
  return rectangles.map(({ width, height }) => multiply(width, height));
}

module.exports = calculateRectangles;