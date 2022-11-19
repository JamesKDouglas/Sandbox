/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//The input will be a target number and an array of positive integers, number type. Zeros allowed.
//No nulls, incorret types, undefineds expected. Arrays have at least 2 values, 1 solution is expected.
//find two numbers in the array that add up to the target number.

//return the indexes of the two numbers in the original array as integers in an array.

var twoSum = function(nums, target) {
    //We should really avoid quadradic time, so the idea of checking the first then all the others is something we should stay away from even for a first solution.
    //So lets try this:
    //For starters we can filter out all the numbers larger than the target because there are no negative integers.
    
    //Then, we can try this algorithm:
    //Make the array into a set so we enter O(1) time.
    //Take the first number in the set. Subtract it from the target. Now, does this new number exist in the set?
    //If it does, great we found it. Save the two numbers and exit the loop.
    //Lookup those numbers in the original array to get their index.
    let num1 = 0;
    let num2 = 0;

    if (nums.filter(el => el===target/2).length ===2){
      //This is a special solution which we handle as an early return. It means there are two of the same number, which add up to the target. This does disturb the set algorithm, even though that algorithm is nice in other ways.  
      return [nums.indexOf(target/2), nums.lastIndexOf(target/2)];
    }
  
    let aSet = new Set(nums);
    
    
    
    for(let i=0;i<nums.length;i++){
        num1 = nums[i];
        if (num1 === target/2){
          continue;
        }
        num2 = target - num1;
        if (aSet.has(num2)) {
            break;
        }
    }
    // console.log("num1:", num1);
    // console.log("num2:", num2);
    let index1 = nums.indexOf(num1);
    let index2 = nums.indexOf(num2);
 
    return [index1, index2];
};

console.log(twoSum([2,7,11,15],9), [0,1]);
console.log(twoSum([3,2,4],6), [1,2]);
console.log(twoSum([3,3],6), [0,1]);

//Ok this solution works fine for the assumption of positive integers, but I see in the Leetcode description they do have a section at the bottom I missed since I'm new to the Leetcode system.
//It does say that the number can be negative. So that calls for a different solution entirely.