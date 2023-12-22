//input integer array. 

//calculate the product of all the integers.

//Report that product.

//bigInts? no bigints. Job size? modest. Timeouts? not really an issue.

//"4" or there is a null or undefined. Nope generally not.

//[1,2,3,4] => 24
//[5,4] => 20
//[1,1,1,1,1] => 1


function grow(x){
    //use reduce
    let product = x.reduce((acc,el) => acc*el, 1);
    
    return product;
  }
  
  console.log(grow([1,2,3,4]), 24);
  console.log(grow([5,4]), 20);
  console.log(grow([1,1,1,1,1]), 1);
  