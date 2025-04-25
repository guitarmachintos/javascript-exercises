const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, cur) => sum + cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, cur) => sum * cur, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let factResult = 1;
  for (let i = 1; i <= a; i++) {
    factResult *= i;    
  }
  return factResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
