// parameters: Input a string of integers delineated by spaces. There may be some extra white spaces. 
// return: The integers sorted by weight calculated by digits.
// example: "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
// "100 180 90 56 65 74 68 86 99"

//In the case where they have the same weight, evaluate the number as a string and put the largest string first. 

// pseudocode:
// split by "". Clean up by rejecting empty values. That could also mean split by a regex of num+space, then trim any extra spaces.

//Make a 2D array with the weight attached to the number. 

//sort the array based on the weight.


let nums = "56 65 74 100 99 68 86 180 90";

function orderWeight(strng) {
    if (strng.length == 0) return "";

    let arr = [];
    let numArr = strng.split(" ");
    let weight;
    let weightArr;

    for (let i=0;i<numArr.length;i++){
        weightArr = numArr[i].split('').map(Number);
        weight = weightArr.reduce((acc, el) => acc+el);
        arr[i] = [numArr[i],weight];
    }
     
    console.log(arr);

    arr.sort(sortFunction);
    
    function sortFunction(a, b) {
        if (a[1] === b[1]) {
            //if they are equal, I want to sort by string value.
            //strings of numbers are sorted in an alphabetic fashion. 
            //That is, 56 is below 8 in the same way that Bg is below C. 8 is the "largest string"
            return (a[0] < b[0]) ? -1 : 1;;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }
    
    let extractedArr = [];
    
    for (let i=0;i<arr.length;i++){
        extractedArr.push(arr[i][0]);
    }
    
    return extractedArr.join(" ");
}

console.log(orderWeight(nums));

// var a = [[12, 'AAA'], [58, 'BBB'], [28, 'CCC'],[18, 'DDD']];

// a.sort(sortFunction);

// function sortFunction(a, b) {
//     if (a[0] === b[0]) {
//         return 0;
//     }
//     else {
//         return (a[0] < b[0]) ? -1 : 1;
//     }
// }