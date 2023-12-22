//The input is an array of integers.

//Either it is mostly odd or mostly even integers.
//There will be just one of the opposite kind.

//minimum of 3 elements

//Return the outlier.

//ex:
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


//edge cases? bigInt? Nope. "very large"? 
//timeout - 12 000 ms

function findOutlier(integers){
  //First I want to decide if this is an even or odd array.
  
  //I can do that just by testing the first 3 elements.
  //Are there more odds than evens?
  
  //Then search through the array and find the outstanding one.
  
  //odd or even?
  let oddCount = 0;
  let evenCount = 0;
  
  for (let i=0;i<3;i++){
    if (integers[i]%2 === 0){
      evenCount++;
    } else {
      oddCount++;
    }
  }
  
  let arrTypeEven = true;
  if (oddCount>evenCount){
    arrTypeEven = false;
  };
  
  console.log("arr type even?:", arrTypeEven);

  //Now look for the odd one out
  for (let i=0;i<integers.length;i++){
    console.log("testing:", integers[i]);
    console.log("integer mod 2:", integers[i]%2);
    //found an even one when the type is odd
    if (integers[i]%2 === 0 && arrTypeEven === false){
      return integers[i];
    }
    //found an odd one when the type is even
    if (arrTypeEven === true && Math.abs(integers[i]%2) === 1){
      return integers[i];
    }
  }
}

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11);
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160);
console.log(findOutlier([2, 4, 0, 100, 4, -54951385, 2602, 36]), -54951385);



// isn't detected as odd properly.