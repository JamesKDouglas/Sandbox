function sumSquares(nums){
    let sum =0;
    for (let i=0;i<nums.length;i++){
        sum += nums[i]**2
    }
    return sum;
}

console.log(sumSquares([5,5,5]), 75)