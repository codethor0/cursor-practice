/**
 * @fileoverview User data processing and basic arithmetic utilities
 * @author Isaac Thor <codethor@gmail.com>
 * @version 1.0.0
 * @since 2025-01-09
 */

/**
 * Adds two numbers together
 * 
 * @param {number} a - First number to add
 * @param {number} b - Second number to add
 * @returns {number} Sum of a and b
 * 
 * @example
 * addChatNumbers(5, 3); // Returns 8
 */
function addChatNumbers(a, b) {
  return a + b;
}

/**
 * Processes an array of user objects, enriching them with computed properties
 * and sorting by full name
 * 
 * @param {Array<Object>} users - Array of user objects to process
 * @param {string} users[].firstName - User's first name
 * @param {string} users[].lastName - User's last name
 * @param {number} users[].age - User's age in years
 * @param {boolean} users[].isActive - Whether user account is active
 * @param {number} users[].points - User's loyalty points
 * @returns {Array<Object>} Processed and sorted user objects with computed fields
 * 
 * @example
 * const users = [
 *   { firstName: 'John', lastName: 'Doe', age: 25, isActive: true, points: 1500 },
 *   { firstName: 'Jane', lastName: 'Smith', age: 19, isActive: false, points: 500 }
 * ];
 * 
 * const processed = processUserData(users);
 * // Returns:
 * // [
 * //   {
 * //     fullName: 'Jane Smith',
 * //     age: 19,
 * //     isActive: false,
 * //     points: 500,
 * //     canDrink: false,
 * //     status: 'Inactive',
 * //     userType: 'Regular'
 * //   },
 * //   {
 * //     fullName: 'John Doe', 
 * //     age: 25,
 * //     isActive: true,
 * //     points: 1500,
 * //     canDrink: true,
 * //     status: 'Active',
 * //     userType: 'VIP'
 * //   }
 * // ]
 */
function processUserData(users) {
  return users
    .map(user => {
      // Combine first and last name
      const fullName = `${user.firstName} ${user.lastName}`;
      
      // Check if user is old enough to drink (US legal age)
      const canDrink = user.age > 21;
      
      // Determine account status string
      const status = user.isActive ? 'Active' : 'Inactive';
      
      // Classify user type based on loyalty points
      const userType = user.points > 1000 ? 'VIP' : 'Regular';

      return {
        fullName,
        age: user.age,
        isActive: user.isActive,
        points: user.points,
        canDrink,
        status,
        userType
      };
    })
    // Sort alphabetically by full name
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
}

module.exports = { addChatNumbers, processUserData };