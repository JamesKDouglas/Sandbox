//input 2 arrays of integers. number type. Sequential integers. 
//There is a "normal" one, which is a sequence in order like
//ex: [1,2,3,4,5];

//There is a mixed up one which may or may not have a number missing. Also,
//the sequence is scrambled
//ex: [1,3,2,5]; 4 is missing here.

//The sequence may also have no number missing but just be scrambled.

//The goal: find the missing number, if there is one. 

//Return the missing number. If there isn't one then return 0.

//bigInts? nope nothing larger than 9x10^15
//size of the array? Not too large. But avoid quadradic time. 

function findDeletedNumber(arr, mixArr) {
    //"base case" or early return
    // if the lengths are the same then no numbers are missing so just return 0
    
    //sum all of the numbers from each. So arr will have all its numbers summed
    //and mixArr will also have all of them summed. 
    
    //Then compare them. The missing number is the difference between the sums.
    
    //We could use Gauss's summation but lets do a basic loop first.
    
    let sumArr = arr.reduce((a,c) => a+c,0);
    let sumMixArr = mixArr.reduce((a,c) => a+c,0);
    
    return sumArr-sumMixArr;
    
  }
  
  console.log(findDeletedNumber([1,2,3,4,5], [1,3,2,5]), 4);
  console.log(findDeletedNumber([3,4,5], [3,4,5]), 0);
  console.log(findDeletedNumber([], []), 0);
  
  