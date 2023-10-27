//Input will be an string of integers separated by a space.
//Positive or negative. But only one or the other.

//Inside this string, there is a sequence of regularly incremented numbers.

//There may be more than one sequence.

//Return the number of elements in the longest sequence.

//10 11 12 => 3
//10 11 12 7 => 3
//1 3 9 => 2
//1 3 9 15 21 7 8 2 3 4 => 4

//edge cases? No sequence? Well there will always be at least 2.

//timeouts? Big lists? BigInts? No bigInts. Lists will be modest in size.

//0 case? repeated number.

function longestSequenceIn(string)
{
  
  //special case for empty string
  
  //make an array. use split(" ")
  
  //Make two counters and two spacers
  //Go through the array. Set the spacers. See if they are the same
  //for the next element. If so, add to the counter.
  
  
  //So track the spacing between pairs, and increment the second
  //counter if the spacing is the same. 
  //replace the first counter with the second if the second is larger.
  
  let arr = string.split(" ").map(el => +el);
//   console.log("arr:",arr);
  //special cases
  if (arr.length === 1 && arr[0] === 0) return +0;
  if (arr.length === 1) return +1;
  
  let largestSeq = 2;
  let currentSeq = 2;
  let seqSpacer = 0;
  let currentSpacer = 0;
  
  for (let i=0; i<arr.length-2;i++){
    seqSpacer = arr[i+1] - arr[i];
    currentSpacer = arr[i+2] - arr[i+1];
    
    if (seqSpacer === currentSpacer){
      currentSeq++;
    } else {
      currentSeq = 2;
    }
    
    if (currentSeq > largestSeq) {
      largestSeq = currentSeq;
    }
  }
  return largestSeq;
}

console.log(longestSequenceIn("10 11 12"), 3);
console.log(longestSequenceIn("10 11 12 7"), 3);
console.log(longestSequenceIn("1 3 9"), 2);
console.log(longestSequenceIn("1 3 9 15 21 7 8 2 3 4"), 4);
console.log(longestSequenceIn("-1 -3 -9"), 2);
