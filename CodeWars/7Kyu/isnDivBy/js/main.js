//input is a set of integers.

//The goal is to test to see if the first is divisible by all of the later ones
//If that is true, return true.
//If it is not, return false

//edge case: only one number is submitted - return true.

//6,1,3 => true
//12,2 => true
//100,5,4,10,25,20 => true
//12,7 => false

//any timeouts? not a problem. 
//any other edge cases? Nope. We expect at least one integer to be submitted.
//bigInts? No.

function isDivisible(...arr){
  console.log(arr);
  //put the numbers into an array
  //if there is only one number return true.
  
  //then check one by one if % - remainder is zero.
  //If it isn't zero, return false.
  //if we get to the end and haven't returned false, return true.
  
  //early return if we get only 1 number submitted
  if (arr.length === 1) return true;
  
  for (let i=1;i<arr.length;i++){
    console.log(arr[0]);
    console.log(arr[i]);
    if (arr[0]%arr[i]!==0){
      return false;
    }
  }
  return true;
}

// console.log(isDivisible(6,1,3),true);
// console.log(isDivisible(12,2),true);
// console.log(isDivisible(100,5,4,10,25,20),true);
console.log(isDivisible(12,7),false);
// console.log(isDivisible(12),true);

//6,1,3 => true
//12,2 => true
//100,5,4,10,25,20 => true
//12,7 => false