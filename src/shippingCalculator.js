function calculateShipping(weight, region) {
  if (region === 'US') {
    return 5 + (2 * weight); // ✅ 5 + (2 * 2) = 9
  }
  return 10 + (3 * weight);
}

module.exports = calculateShipping;