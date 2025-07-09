/**
 * @fileoverview Main application information module
 * @author Isaac Thor <codethor@gmail.com>
 * @version 1.0.0
 * @since 2025-01-09
 */

/**
 * Retrieves basic application metadata including name and version
 * 
 * @returns {Object} Application information object
 * @returns {string} returns.name - Application name
 * @returns {string} returns.version - Current version number
 * 
 * @example
 * const appInfo = getAppInfo();
 * console.log(appInfo.name);    // "cursor-practice"
 * console.log(appInfo.version); // "1.0.0"
 */
function getAppInfo() {
  return {
    name: "cursor-practice",
    version: "1.0.0",
  };
}

module.exports = getAppInfo;