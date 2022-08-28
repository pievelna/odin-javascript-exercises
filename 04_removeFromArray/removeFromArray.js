// const removeFromArray = function(arr, ...arg) {
  // return arr.filter(el => el != arg);
  const removeFromArray = function(...arr) {
    let resultArr = arr[0];
  for (i=1;i<arr.length;i++) {
    resultArr = resultArr.filter(el => el !== arr[i]);
  }
  return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
