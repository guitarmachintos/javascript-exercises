const removeFromArray = function(arr, ...removers) {
    let newArr = arr.slice();
    for (const remover of removers) {
        let removedIndex = newArr.indexOf(remover);
        while(removedIndex !== -1){
            newArr.splice(removedIndex, 1);
            removedIndex = newArr.indexOf(remover);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
