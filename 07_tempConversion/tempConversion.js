const ftoc = function(farenheit) {
  let result = 0;
  if (typeof(farenheit) == 'number') {
    result = (farenheit - 32) * (5 / 9);
  }
  return +result.toFixed(1);
};

const ctof = function(celsius) {
  let result = 0;
  if (typeof(celsius) == 'number') {
    result = celsius* (9 / 5) + 32;
  }
  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
