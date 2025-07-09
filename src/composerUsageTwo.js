
/**
 * @fileoverview 3D volume calculation utility
 * @author Isaac Thor <codethor@gmail.com>
 * @version 1.0.0
 * @since 2025-01-09
 */

const { multiply } = require('./composer');

/**
 * Calculates volumes for an array of rectangular prisms (cubes/boxes)
 * 
 * @param {Array<Object>} cubes - Array of 3D shape objects
 * @param {number} cubes[].width - Width dimension
 * @param {number} cubes[].height - Height dimension  
 * @param {number} cubes[].depth - Depth dimension
 * @returns {Array<number>} Array of calculated volumes
 * 
 * @example
 * const cubes = [
 *   { width: 2, height: 3, depth: 4 },
 *   { width: 5, height: 5, depth: 5 }
 * ];
 * calculateVolumes(cubes); // Returns [24, 125]
 */
function calculateVolumes(cubes) {
  return cubes.map(({ width, height, depth }) =>
    multiply(multiply(width, height), depth)
  );
}

module.exports = calculateVolumes;