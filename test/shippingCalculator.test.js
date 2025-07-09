/**
 * @fileoverview Test suite for shipping calculator functionality
 * @author Isaac Thor <codethor@gmail.com>
 * @version 1.0.0
 * @since 2025-01-09
 */

const calculateShipping = require('../src/shippingCalculator');

describe('calculateShipping', () => {
  describe('US shipping', () => {
    test('should calculate US shipping cost correctly for 2 pounds', () => {
      const result = calculateShipping(2, 'US');
      expect(result).toBe(9); // 5 + (2 * 2) = 9
    });

    test('should calculate US shipping cost correctly for 0 pounds', () => {
      const result = calculateShipping(0, 'US');
      expect(result).toBe(5); // 5 + (2 * 0) = 5
    });

    test('should calculate US shipping cost correctly for 5 pounds', () => {
      const result = calculateShipping(5, 'US');
      expect(result).toBe(15); // 5 + (2 * 5) = 15
    });
  });

  describe('International shipping', () => {
    test('should calculate international shipping cost correctly for 3 pounds', () => {
      const result = calculateShipping(3, 'INTL');
      expect(result).toBe(19); // 10 + (3 * 3) = 19
    });

    test('should calculate international shipping cost correctly for 0 pounds', () => {
      const result = calculateShipping(0, 'INTL');
      expect(result).toBe(10); // 10 + (3 * 0) = 10
    });

    test('should calculate international shipping cost correctly for 4 pounds', () => {
      const result = calculateShipping(4, 'CANADA');
      expect(result).toBe(22); // 10 + (3 * 4) = 22 (any non-US region)
    });
  });

  describe('Edge cases', () => {
    test('should handle decimal weights for US shipping', () => {
      const result = calculateShipping(2.5, 'US');
      expect(result).toBe(10); // 5 + (2 * 2.5) = 10
    });

    test('should handle decimal weights for international shipping', () => {
      const result = calculateShipping(1.5, 'EU');
      expect(result).toBe(14.5); // 10 + (3 * 1.5) = 14.5
    });

    test('should treat any non-US region as international', () => {
      const regions = ['CANADA', 'EU', 'ASIA', 'AUSTRALIA', ''];
      regions.forEach(region => {
        const result = calculateShipping(2, region);
        expect(result).toBe(16); // 10 + (3 * 2) = 16
      });
    });
  });
});