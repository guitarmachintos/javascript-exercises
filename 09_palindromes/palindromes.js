const palindromes = function (text) {
    text = text.replace(/(\s|\W)*/g, '');
    text = text.toLowerCase();
    console.log(`Initial text: ${text}`);
    let halfIndex = Math.floor(text.length/2);
    for (let i = 0; i < halfIndex; i++) {
        if(text[i] != text[text.length-1-i]){
            return false;
        }
    }   
    return true;
};

console.log(palindromes('abc'));
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('Rats live on no evil star.'));
console.log(palindromes('Lid off a daffodil.'));
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
console.log(palindromes('A nut for a jar of tuna.'));

// Do not edit below this line
module.exports = palindromes;
