const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce((p, c) => p + c, 0);
};

const multiply = function (arr) {
    return arr.reduce((p, c) => p * c, 1);
};

const power = function (b, e) {
    return Math.pow(b, e);
};

const factorial = function (n) {
    let total = 1;
    while(n){
        total *= n;
        n--;
    }
    return total;
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
