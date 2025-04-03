const reverseString = function(text) {
    let reversedString = '';
    if(text.length < 0){
        reversedString = 'ERROR';
    }
    else{
        for (let i = text.length-1; i >= 0; i--) {
            reversedString += text[i];            
        }
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
