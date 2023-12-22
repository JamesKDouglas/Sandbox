//The input will be an integer.

//Find the nearest, but lower, integer that is an "abundant number".

//That is, the highest number for which the summed factors exceed the number
//itself. 

//Return an array that is 2D, with the number and abundance (how much over
//the divided number the sum of factors is).

//edge cases? BigInts? No. 0 well, return [[0],[0]]
//no solution? idk return null.
//timeouts 12000 ms
//negative? No only postive inputs.

// abundant(15)  = [[12], [4]]
// abundant(19)  = [[18], [3]]
// abundant(100) = [[100], [17]]


function abundant(h){
  //use a loop, a for loop.
  //start from the top, look for an abundant number
  //count down from h.
  
  //as soon as we find an abundant number, find the abundance.
  //compile as array. return!
  let factors = [0];
  let abundantNum =0;
  let abundance =0;
  let sum = 0;
  
  for (let i=h;i>11;i--){//choose the #
    //look for factors and build a list of them
    for (let j=i-1;j>0;j--){
      if (i%j === 0){
        factors.push(j);
      }
    }
    //check for abundance.
    sum = factors.reduce((acc, el)=>acc+el);  
    if (sum > i){
      //it's abundant!
      abundantNum = i;
      abundance = sum-i;
      //Only need the first one so:
      break;
    } else {
      factors = [0];
    }
      
  }
  
  return [[abundantNum],[abundance]];
}

console.log(abundant(15), [[12], [4]]);
console.log(abundant(19), [[18], [3]]);
console.log(abundant(100), [[100], [17]]);
