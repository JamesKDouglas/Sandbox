// input will be two integers: A number to split up into parts, and a number of parts
// The goal is do divide the first integer into parts as even as possible.

// Return the new set of integers as an array.

//ex: (20,6) => [4,4,3,3,3,3]
//(20,4) = [5,5,5,5]
//(30, 4) => []

//edge cases? if the first number is too small to split into the requested amount,
// ex (3,4) => [1,1,1,0]
// then add some zeros on to the end.
// that is, the first is smaller than the second.

//bigInt? No. 
//No considerable timeouts.
//order that the numbers appear in doesn't matter? No sort from low to high.

function splitInteger(num,parts) {
  

  //20,6
  //Math.floor(20/6) = 3
  //20%6 = 2
  // begin with[3,3,3,3,3,3]
  // then add 1 to the last 2 elements.

  let arr = [];
  let base = Math.floor(num/parts);
  let residual = num % parts;

  //generate base array
  for (let i=0;i<parts;i++){
    arr.push(base);
  }
  let counter=0;
  //Add to the final elements
  for (let i=parts-1;;i--){
    if (counter===residual) break;
    arr[i]+=1;
    counter++
  }

  return arr;
}
  ``
console.log("hello!");

// console.log(splitInteger(10,2));

console.log(splitInteger(20,6), [3,3,3,4,4]);
console.log(splitInteger(10,1), [10]);
console.log(splitInteger(20,5), [4,4,4,4,4]);
console.log(splitInteger(3,4), [0,1,1,1]);