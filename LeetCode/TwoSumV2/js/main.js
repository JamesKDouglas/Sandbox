// input will be an array of positive integers, 'nums', and a single integer, 'target'.

//The goal is to find the index of two numbers in the array that equal the target.

//[0,2,7,9,3,3], 9 => [1,2] since 2+7=9 if we start at the lefthand side.

// You cannot use the same number twice in the returned array.

// timeout, 12000ms.
// job size just small.
// if unsolvable? Return -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

  //Take the first number. subtract the target. That's the number you're looking for.
  
  // search for this number in the array. If you want to go faster through the array I suggest just an index lookup table. Summarize the input array then search it with the summary.
  let firstIndex = 0;
  let secondIndex = 0;
  let firstNum =0;
  let secondNum =0;
  let searchNum =0;

  for (let i=0;i<nums.length;i++){
    // i is the first index.
    // j is is the second.
    firstIndex = i;
    firstNum = nums[firstIndex];

    for (j=i;j<nums.length;j++){
      searchNum = target - i;
      secondIndex = j;

      secondNum = nums[secondIndex];

      if (secondNum == searchNum){
        // Found a matching pair of numbers to add together to meet the target. 
        // I feel like I could have implmented the calculation in a different order for more readability.
        return[firstIndex, secondIndex]
      }
    }

  }
    
};

console.log(twoSum([0,2,9,3,3],9), [1,2])
console.log(twoSum([0,2,9,3,3],0), -1)
console.log(twoSum([0,2,9,3,3],5), [1,3])
