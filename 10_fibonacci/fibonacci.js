function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

const fibonacci = function(n) {
    let a = 1;
    let b = 1;

    if(isNumeric(n) || typeof n == 'number'){
        n = +n;
    }
    else{
        return 'OOPS';
    }

    if(n<0){
        return 'OOPS';
    }
    else if(n == 0){
        return 0;
    }
    else if(n == 1 || n == 2){
        return 1;
    }
    else{
        let curCount = 2;
        let aUpdating = true;
        while (curCount < n){
            if(aUpdating){
                a = a + b;
                aUpdating = !aUpdating;
            }
            else{
                b = a + b;
                aUpdating = !aUpdating;
            }
            curCount++;
        }
        return (n%2) ? a : b; 
    }
};

console.log(fibonacci(4));
console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
