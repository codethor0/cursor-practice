function addChatNumbers(a, b) {
  return a + b;
}

function processUserData(users) {
  return users
    .map(user => {
      const fullName = `${user.firstName} ${user.lastName}`;
      const canDrink = user.age > 21;
      const status = user.isActive ? 'Active' : 'Inactive';
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
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
}

module.exports = { addChatNumbers, processUserData };
