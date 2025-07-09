/**
 * @fileoverview Mathematical operations utility module
 * @author Isaac Thor <codethor@gmail.com>
 * @version 1.0.0
 * @since 2025-01-09
 */

/**
 * Multiplies two numbers together
 * 
 * @param {number} a - First number to multiply
 * @param {number} b - Second number to multiply
 * @returns {number} The product of a and b
 * 
 * @example
 * multiply(5, 3); // Returns 15
 * 
 * @example
 * multiply(2.5, 4); // Returns 10
 */
function multiply(a, b) {
  return a * b;
}

module.exports = { multiply };