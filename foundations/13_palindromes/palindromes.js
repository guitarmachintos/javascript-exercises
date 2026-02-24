const palindromes = function (text) {
    text = text.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let textCopy = text;
    textCopy = textCopy.split('').reverse().join('');
    return text === textCopy;
};

palindromes('asd')

// Do not edit below this line
module.exports = palindromes;
