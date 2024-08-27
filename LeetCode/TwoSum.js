/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //Just a for loop that tries combinations. I'll put in one extra feature: quit trying when the number is already too large.
    let sum =0;
    for (let i=0;i<nums.length;i++){
        for (let j=i+1;j<nums.length;j++){
            sum = nums[i]+nums[j];
            if (sum === target ){
                return [i,j];
            }
        }
    }
    //can't find a combo
    return [-1,-1];
};

console.log(twoSum([3,2,4],6))