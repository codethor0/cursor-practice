const { addChatNumbers, processUserData } = require('../src/chatWithCodeBase');

test('addChatNumbers should correctly add two numbers', () => {
  expect(addChatNumbers(2, 3)).toBe(5);
});

test('processUserData returns sorted user info', () => {
  const users = [
    { firstName: 'John', lastName: 'Doe', age: 25, isActive: true, points: 1200 },
    { firstName: 'Jane', lastName: 'Smith', age: 20, isActive: false, points: 500 },
    { firstName: 'Alice', lastName: 'Williams', age: 30, isActive: true, points: 10000 },
  ];
  const results = processUserData(users);

  expect(results).toHaveLength(3);
  // The order should be: 'Alice Williams', 'Jane Smith', 'John Doe'
  expect(results[0].fullName).toBe('Alice Williams');
  expect(results[1].fullName).toBe('Jane Smith');
  expect(results[2].fullName).toBe('John Doe');
});
