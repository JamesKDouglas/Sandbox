// parameters: pass in an array as well as two integers
// return whether or not the two integers appear in the array consecutively
// example:
// consecutive([1, 3, 5, 7], 3, 1), true);
// pseudocode
// arr.find(a)
// 

function consecutive(arr, a, b) {
    let index = arr.findIndex(el => el == a);
    if (arr[index+1] == b){
        return true;
    } else if (arr[index-1] == b){
        return true;
    }
    return false; 
}

let arr = [1,3,5,7];
let a = 3;
let b = 1;

console.log(consecutive(arr,a,b));