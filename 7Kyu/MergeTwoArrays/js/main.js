// parameters: Two arrays of different length are submitted as arguments. One has positive integers in it, the other has positive integers.
// return: Return a single array which combines the two arrays as an interspliced array. That is, alternate element as they are combined from each array into a single one.
//When the short array is finished, simply append the rest of the other one.
// example:
//[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// pseudocode:

let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c", "d", "e", "f"];

function mergeArrays(arr1, arr2) {
    let i=0;
    let newArr = [];

    while(arr1.length!=0&&arr2.length!=0){
        newArr.push(arr1.shift());
        newArr.push(arr2.shift());
    }

    if (arr1[i]){
        newArr = newArr.concat(arr1);
    }
    if (arr2[i]){
        newArr = newArr.concat(arr2);
    }

    return newArr;
}

console.log(mergeArrays(arr1,arr2));