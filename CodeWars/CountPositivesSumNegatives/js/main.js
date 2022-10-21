// Parameters. Input is an array of integers, including zeros and negatives.
// Return. an array of 2 elements - the first is a count of positive integers. The second is a sum of negative integers.
// Examples. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] returns [10,-65].
//If only zeros are present, values should be null [];
// Pseudocode
//

function countPositivesSumNegatives(input) {
    let positives = input.filter(n=>n>0);
    positives = positives.length;
    let negatives = input.filter(n=>n<0);
    negatives = negatives.reduce((acc,n) => acc+n, 0);

    if (positives == 0){
        positiives = null;
    }
    if (negatives == 0){
        negatives = null;
    }
    
    let newArr = [positives, negatives];
    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(arr));