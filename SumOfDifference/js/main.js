// Parameters - an array of integers, positive and negative.
// Return - a single integer that is computed from the array. The array is sorted by descending order. The array is divided into overlapping pairs. Find the difference foreach pair (a-b). add that up.
// Examples - [1, 2, 10] rearranges to [10,2,1] then computes as 10-2 + 2-1, returns 9 .
// Pseudocode -
// For loop.
// sort.
// subtract i+1 from i, add that to a variable.


function sumOfDifferences(arr) {
    let sum = 0;
    arr.sort((a,b) => a-b); // for some reason adding reverse here doesn't work. 
    let arrRev = arr.reverse();

    for (let i=0;i<(arrRev.length-1);i++){
        sum += +arrRev[i] - +arrRev[i+1];
    }
    return sum;
}

console.log(sumOfDifferences([1, 2, 4, 1, 10]));