//The Two Sum problem takes an input of an array of positive integers as well as a target integer

//Then the function returns pairs of integers from the array that equal the target.

// ex: [1, 2, 2, 3, 4], 4, => [2, 2], [3, 1]

//There is a brute force way to do this but lets try a hash map. 
//So I'll just take the first integer, check to see if we've looked at it already then if not
// calculate what the expected other one is and look for it. 
//If so, carry on.
//If you find a pair that meets the target then add both to a "used" object. 

function twoSum(arr, sum){
    const pairs = [];
    const nums = {};

    for (const num1 of arr){
        const num2 = sum - num1;
        if (nums[num2]){
            pairs.push([num1, num2]);
        } else {
            nums[num1] = 1;
        }
    }
    return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), "[2, 2], [3, 1]");