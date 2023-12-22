// Two arrays are input: one is a list of integers (at least 5 long)
//the other is an array of ranges. There is always at least 1 range.

//The task is to take the ranges and consider the sum of all numbers on the list
//in that range. Then find the maximum.
// return the maximum sum value.

//ex:
//[1,-2,3,4,-5,-4,3,2,1], [[1,3],[0,4],[6,8]] => 6


//edge cases? +0 and -0? Not likely, don't worry about it.
//timeouts? 12000 ms - lots.
//What if a range is out of range?
//ex: [1,-2,3,4,-5,-4,3,2,1], [[1,3],[0,4],[6,10]] => ?
//Not expected - all inputs are valid

function maxSum(arr,range){
  //coding and coding..
  //two for loops:
  //One to select the range examined.
  //Another one to calculate the sum in the range.
  let biggestSum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (r=0;r<range.length;r++){
    for (let i=range[r][0];i<=range[r][1];i++){
      sum += arr[i];
      console.log("sum being built", sum);
    }

    console.log("sum from range", range[r][0], " to ", range[r][1], " : ", sum);
    if (sum>biggestSum){
      biggestSum = sum;
    }
    sum = 0; 
  }
  return biggestSum;
}

// console.log(maxSum([1,-2,3,4,-5,-4,3,2,1], [[1,3],[0,4],[6,8]]), 6);
// console.log(maxSum([1,-2,3,4,-5,-4,3,2,1], [[1,3],[0,4],[6,7]]), 5);
console.log(maxSum([1,-2,3,4,-5,-4,3,2,11], [[1,3],[0,4],[6,8]]), 16);