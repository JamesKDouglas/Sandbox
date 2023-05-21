/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var containsDuplicate = function(nums) {
//     let numsObj = {};
//     for (let i=0;i<nums.length;i++){
//         if (numsObj[nums[i]]){
//             return true;
//         } else {
//             numsObj[nums[i]] = true;
//         }
//     }
//     return false;
// };


//an alternate solution is to useSet to singulate then just count the number of values:
var containsDuplicate = function(nums) {
    let numsSet = new Set(nums);
    return numsSet.size !== nums.length;
};

// Input: nums = [1,2,3,1]
// Output: true
console.log(containsDuplicate([1,2,3,1]),true);
console.log(containsDuplicate([1,2,3,4]),false);
