/**
 * A function that *incorrectly* calculates shipping.
 * The test expects a specific formula, but we are returning a hard-coded value.
 * Use Cursor's Inline Edit to fix it, so the test will pass.
 */
function calculateShipping(weight, region) {
    // Currently always returns 10, which is WRONG
    return 10;
  }
  
  module.exports = calculateShipping;
  