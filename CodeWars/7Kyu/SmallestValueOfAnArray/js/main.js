// parameters: submit an array of integers as well as a string that indicates "mode"
// return: If the mode parameter, the second argument, is "value" then return the smallest value of the array. If it is "index", return the index of the smallest value.
// example:
//min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0
// pseudocode:

//I'll use Min to find the value. Then findIndexOf to look up the index if required.

let arr = [1,2,3,4,5];

function min(arr, toReturn) {
    if (toReturn == "value"){
        return Math.min(...arr);
    } else if (toReturn == "index"){
        let min = Math.min(...arr);
        return arr.indexOf(min);
    }
}

console.log(min(arr, "index"));