/**
 * The function is named 'multiplyComposerNumbers', but our test
 * expects us to have something called 'multiply' exported instead.
 * Use Composer to rename references from 'multiplyComposerNumbers' to 'multiply'
 * across this file AND the usage files (composerUsageOne.js, composerUsageTwo.js).
 */
function multiplyComposerNumbers(a, b) {
    return a * b;
  }
  
  module.exports = { multiplyComposerNumbers };
  