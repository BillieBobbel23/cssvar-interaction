/**
 * percent | Calculates percentage of x and y
 * @param {int} x | the value
 * @param {int} y | the total value
 * @param {int} base | Base value (100) to calculate against
 */

function percent(x, y, base = 100) {
  if (isNaN(x) || isNaN(y)) {
    throw "percent() requires parameters to be numbers";
  } else {
    return (x / y) * base;
  }
}

module.exports = percent;
