const calculateShipping = require('../src/shippingCalculator');

/**
 * We assume a shipping cost formula:
 * Base cost = $5
 * Plus $2 per weight unit
 * So for weight=2, region='US' => 5 + (2 * 2) = 9
 * (This is just an example; you could make any formula you like.)
 */
test('calculates correct shipping cost for US region', () => {
  expect(calculateShipping(2, 'US')).toBe(9);
});
