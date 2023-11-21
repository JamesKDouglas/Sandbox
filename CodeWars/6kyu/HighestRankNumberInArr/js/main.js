//input will be an array of integers. Positive integers.

//The goal is to find the most frequently occurring one.

//Return it as an integer.

//If there are two or more of the same frequency then return the largest.

//invalid inputs? nope.
//edge cases? 
//bigInts? Nope. 
//timeouts? 12 000 ms. Not a problem.

function highestRank(arr){
  //We'll use an object because lookup is quick with an object.
  //Use the object to summarize the array.
  
  let numFreq = {};

  for (let i=0;i<arr.length;i++){
    if (numFreq[arr[i]]){
      numFreq[arr[i]]++;
    } else {
      numFreq[arr[i]] = 1;
    }
  }

  // console.log(numFreq);
  
  //make a 2d array.
  let uniqueNums = Object.keys(numFreq);
  
  // console.log(uniqueNums);
  
  let numFreqArr = [];
  
  //now fill it
  for (let i=0;i<uniqueNums.length;i++){
    numFreqArr.push([+uniqueNums[i], numFreq[uniqueNums[i]]]);
  }

  // console.log(numFreqArr);  
  //Then sort
  let sorted  = numFreqArr.sort(sortFunction);

  function sortFunction(a,b) {
      if (a[1]>b[1]){
        return 1;                            
      } else if (a[1] === b[1]){
        return a[0]>b[0]?1:-1;
      }
      return -1;
  }
  
  // console.log(sorted);  
  return sorted[sorted.length-1][0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12);
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3);

