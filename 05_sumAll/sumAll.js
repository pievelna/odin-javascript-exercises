const sumAll = function(num1,num2) {
  if ((num1 < 0 || num2 < 0) || !Number.isInteger(num1+num2)) {
    return "ERROR"
  } else {
    let result = 0;
    let rangeStart = num1;
    let rangeEnd = num2;

    if (num1 > num2) {
      rangeStart = num2;
      rangeEnd = num1;
    }

    for(i = rangeStart;i <= rangeEnd;i++){
      result += i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
