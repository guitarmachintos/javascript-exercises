const removeFromArray = function(arr, toRemove) {
    if (!Array.isArray(arguments[0])){
        return "ERROR";
    }

    for (let i = 1; i < arguments.length; i++) {
        let j = 0;
        while (j < arr.length){
            if(arr[j] === arguments[i]){
                arr.splice(j,1);
            }
            else{
                j++;
            }
        }
        // for (let j = 0; j < arr.length; j++) {
        //     if(arr[j] === arguments[i]){
        //         arr.splice(j,1);
        //     }            
        // }       
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
