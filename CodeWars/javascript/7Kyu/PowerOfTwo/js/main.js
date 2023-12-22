//input will be an integer, and not anything else.

//The goal is to determine if the integer is a power of 2.

//The output should be a boolean - true or false.

//1024 => true
//4096 => true
//33 => false

function isPowerOfTwo(n){
    if (Math.log2(n)%1 === 0){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isPowerOfTwo(1024), true);
  console.log(isPowerOfTwo(4096), true);
  console.log(isPowerOfTwo(33), false);