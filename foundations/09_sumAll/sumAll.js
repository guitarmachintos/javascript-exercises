const sumAll = function(a, b) {
    if(a < 0 || b < 0 || isNaN(a) || isNaN (b) || 
    (typeof a) !== 'number' || (typeof b) !== 'number' ||
    Math.floor(a) !== a || Math.floor(b) !== b){
        return 'ERROR';
    }

    //also handles if either input is negative (just for fun)
    if(b < a) [a, b] = [b, a];

    if(a < 0 && b > 0){
        let sumNeg = (a - 1) *  (Math.abs(a)) / 2;
        let sumPos = (1 + b) *  b / 2;
        if(a == -1){
            sumNeg = -1;
        }
        if(b == 1){
            sumPos = 1;
        }
        return sumNeg + sumPos;
    }
    return (a + b) *  (Math.abs(a - b) + 1) / 2;
};


// Do not edit below this line
module.exports = sumAll;
