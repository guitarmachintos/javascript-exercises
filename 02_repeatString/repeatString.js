const repeatString = function(text, nRepeat) {
    finalString = '';
    if (nRepeat < 0){
        finalString += "ERROR";
    }
    else{
        for (let i = 0; i < nRepeat; i++) {
            finalString += text;            
        }
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
