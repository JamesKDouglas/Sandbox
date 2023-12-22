//input is a positive integer and a limit.

//Figure out the multiples, up to and including the limit.

//report them as an array

//size? BigInts? Nope.
//base 10.
//Integers only.
//No timeouts. No funny business.

function findMultiples(integer, limit) {
    //for loop. Multiply and add it to an array.
    let arr = [];
    for (let i=1;i*integer<=limit;i++){
      arr.push(integer*i);
    }
    return arr;
  }
  
  console.log(findMultiples(2,6), [2,4,6]);
  console.log(findMultiples(1,2), [1,2]);
  console.log(findMultiples(11,54), [11,22,33,44]);