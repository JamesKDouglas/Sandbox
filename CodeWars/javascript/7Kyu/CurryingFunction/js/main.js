// parameters: Input an array. Then input a factor. These inputs are entered into a curried function so they are not passed all at the same time.
// return: the array, with each element multiplied by the factor. 

// Other: do not mutate the array. Write this as a curreid function.
// example: multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// pseudocode:
// One function takes the array. A second function takes the factor then multiplies them.

let nums = [1,2,3];
let factor = 2;

let multiplyAll = arr => f => {
    let newArr = [];
    for (i in arr) {
        newArr.push(arr[i]*f);
    }; 
    return newArr;
}

console.log(multiplyAll(nums)(factor));

//a more concise solution from e.mihaylin
//multiplyAll = a => x => a.map(e => e * x);

