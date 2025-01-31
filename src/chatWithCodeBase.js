/**
 * Simple function you can chat about and refactor if desired.
 */
function addChatNumbers(a, b) {
    return a + b;
  }
  
  /**
   * A 'messy' function for demonstration. You can ask Cursor:
   * - "Explain how processUserData works."
   * - "Refactor processUserData to make it more efficient or readable."
   */
  function processUserData(users) {
    // This is intentionally cluttered to showcase AI-based refactoring
    let results = [];
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      let fullName = user.firstName + " " + user.lastName;
  
      let canDrink = false;
      if (user.age > 21) {
        canDrink = true;
      }
  
      let status = user.isActive ? "Active" : "Inactive";
  
      let userType = "Regular";
      if (user.points && user.points > 1000) {
        userType = "VIP";
      }
  
      results.push({
        fullName,
        canDrink,
        status,
        userType
      });
    }
  
    // Sort by fullName in a less elegant manner
    results.sort(function(a, b) {
      if (a.fullName < b.fullName) return -1;
      if (a.fullName > b.fullName) return 1;
      return 0;
    });
  
    return results;
  }
  
  module.exports = { addChatNumbers, processUserData };
  