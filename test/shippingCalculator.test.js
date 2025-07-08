const calculateShipping = require('../src/shippingCalculator');

test('calculates correct shipping cost for US region', () => {
  expect(calculateShipping(2, 'US')).toBe(9);
});