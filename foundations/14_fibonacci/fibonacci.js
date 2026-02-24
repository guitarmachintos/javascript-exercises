const fibonacci = function(n) {
    if(isNaN(n) || n < 0){
        return "OOPS";
    }
    const fibSeq = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibSeq.push(fibSeq[fibSeq.length-2] + fibSeq[fibSeq.length-1]);
    }
    return fibSeq[n];
};

// Do not edit below this line
module.exports = fibonacci;
