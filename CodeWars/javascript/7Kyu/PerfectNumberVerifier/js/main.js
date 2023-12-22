//sum of its factor are equal to itself. "perfect number"

//input an integer. less than 9*10^15. Number type. 

//Look at n. Is it a 'perfect number'. That is if you were to take a list of all the factors, does that list, summed, equal the number?

//n=28
//factors are 1,2,4,7,14 => sum to 28.
//So return true.

//no timeout.

//n=25
//1,5 => sum to 6 
//so return false.

//n=0
//factors are 0. sum is zero. So return true. 

function isPerfect(n) {
    console.log(n);
    //generate array of factors.
    if (n===0){
      return true;
    }
    if (n===1){
      return false;
    }
    
    //sum them.
    let sum = 0;
    for(let i=Math.ceil(n/2);i>0;i--){
      if (n%i===0){
        sum += i;
      }
      if (sum>n) {
        return false;
      }
    }
    //Does the sum equal n?
    if (sum === n){
    //if so return true.
      // console.log(n);
      // console.log(sum);
      return true;
    } else {
    //if not return false. 
      return false;
    }
  }
  
  console.log(isPerfect(28), true);
  console.log(isPerfect(25), false);
  console.log(isPerfect(0), true);
  console.log(isPerfect(8128), true);
  //So this is a false but it takes too long. How do we detect a false more quickly?
  // console.log(isPerfect(23459879034), false);