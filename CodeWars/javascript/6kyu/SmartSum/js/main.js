//Input: integers. They can be present as a series of arguments, an array 
//or a nested array.

//Use flatten and spread? May also use typeof.

//How big are these integers? Are we expecting bigInts? Nope. 
//How about -ve numbers? nope.
//floats? No only integers.
//"3" or "three"? Nope. So number type.

//The goal is to sum all the numbers together 

//and return the sum. So that should be an integer number type.

// smartSum(1,2,3,4,5,6);
// smartSum(1,2,3,[4,5],6); 
// smartSum(1,2,[[3,4],5],6);

// we could use args. Or a spread operator.
function smartSum(...arr){

    //flatten the array. arr.flat() takes a depth, and Infinity is ok to use.
    //Sum the items. Reduce is fine for this.
    //return!
    
    return arr.flat(Infinity).reduce((a,c) => a+c,0);
  }
  
  console.log(smartSum(1,2,3,4,5,6), 21);
  console.log(smartSum(1,2,3,[4,5],6), 21);
  console.log(smartSum(1,2,[[3,4],5],6), 21);