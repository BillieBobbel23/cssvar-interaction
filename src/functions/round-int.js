/**
 * roundInt | rounds Numbers
 * @param {number} value
 * @param {number} grain | decimals
 */

function roundInt(value, grain = 0) {
  if (isNaN(value) || isNaN(grain)) {
    throw "value and grain need to be numbers";
  } else {
    return value.toFixed(grain);
  }
}
module.exports = roundInt;
