const ftoc = function(farenheit) {
  let result = 0;
  if (typeof(farenheit) == 'number') {
    result = (farenheit - 32) * (5 / 9);
  }
  return +result.toFixed(1);
};

// solution has a better approach
// return Math.round((f - 32) * (5/9) * 10) / 10;

const ctof = function(celsius) {
  let result = 0;
  if (typeof(celsius) == 'number') {
    result = celsius* (9 / 5) + 32;
  }
  return +result.toFixed(1);
};

  // return Math.round(((c * 9/5) + 32) * 10) / 10;

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
