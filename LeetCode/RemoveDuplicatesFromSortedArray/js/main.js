var removeDuplicates = function(nums) {
    //singulate
    let setNums = new Set(nums);
    //sort
    let sortedNums = Array.from(setNums).sort((a,b)=>a-b);
    return sortedNums;
    
};

console.log(removeDuplicates([1,2,3,3,4,4,4,4,5,5,6,7,8]),([1,2,3,4,5,6,7,8]));
console.log(removeDuplicates([1,1,2]),[1,2]);
//The Leetcode question is really getting wierd, trying to describe some sort of memory limit? Idk if I want to humor them on that because it makes little sense for a real world application - memory limits like that are only for microcontrollers and you don't use js on microcontrollers.
//In real life, in JS if you had a memory limit you would still just do a batch processing, like with a stream or buffer. It would be way faster and use little extra memory. In this question Leetcode is kind of asking you to figure out how to do this job the stupid way. Not into it.