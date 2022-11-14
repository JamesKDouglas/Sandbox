//input: an array of 3 integers. Not bigInt, normal ints.

//number type. not "two".

//Goal: Find the index of the median. Return the index where the median value is located in the input array.

//Numbers in the original 3 may repeat. So this is not a 'Set', just a collection of 3 integers.

//ex:
//[2,3,1] => 0
//2 is the median. It occurrs at index 0 in the initial array.

//[5,10,14] => 1
//10 is the median and it is at index 1.

//[4,5,8] => 1


function whereMedian(a){
  
    //copy the array with splice.
    let copyA = a.slice();
    
    //sort the array with sort (quantitative function not lexicographic).
    copyA = copyA.sort((b,c)=>b-c);
    
    //find the middle value in the original, and report the index. indexOf.
  
    let median = copyA[1];
    
    //return the index
    return a.indexOf(median);
  
  }
  
  console.log(whereMedian([2,3,1]), 0);
  console.log(whereMedian([5,10,14]), 1);
  console.log(whereMedian([-2,5,8]), 1);
  