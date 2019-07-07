function percent(x, y, base = 100) {
  if(isNaN(x) || isNaN(y)) {
    throw "percent() requires parameters to be integers";
  } else {
    return ( (x / y) * base);
  }
}
module.exports = percent;
