//The input is an array of positive integers. There are no repeats.

//The goal is to find the largerst two and return the product of them.

//bigInts? Nope. 
//Special cases? No expected invalid inputs.
//job size, timeouts? Nothing special. 
function maxProduct(a) {
    //Sort the array
    //Take the first two values, return the product.
    
    a = a.sort((a,b) => b-a);
    return a[0]*a[1];
    
  }
  
  console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842);
  console.log(maxProduct([154, 428, 455, 346]), 194740);
  console.log(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]), 187827);