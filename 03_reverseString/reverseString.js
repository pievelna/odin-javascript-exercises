const reverseString = function(str) {
  const newArr = str.split('');
  const reversedArr = newArr.reverse();
  return reversedArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
