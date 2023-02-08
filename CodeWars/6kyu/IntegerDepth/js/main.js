//Input of an integer. Not a BigInt. Call it n. Number type. no "five"
//No zeros.

//Goal is to start at 1, then find all the products such that every digit from 1
//to 9 has appeared at least once in the products.

//When all the digits have appeared, that cofactor of n is the "depth"

// Multiple         value         digits     comment
// 42*1              42            2,4 
// 42*2              84             8         4 existed
// 42*3              126           1,6        2 existed
// 42*4              168            -         all existed
// 42*5              210            0         2,1 existed
// 42*6              252            5         2 existed
// 42*7              294            9         2,4 existed
// 42*8              336            3         6 existed 
// 42*9              378            7         3,8 existed

//so for 42 the output should be 9. That's a "depth" of 9.

//Are there any timeouts we should consider? Nope. 
//Edge cases? No can't think of any!

function computeDepth (n){
    //Use a for loop to go upwards in the factors.
    //Inside the loop, calculate the product.
    //Then use another loop and go through the product. 
    //Tally the digits into an object.
    //If the digit doesn't exist, add it to the object.
    //If it does exist carry on.
    //After the object has 10 entries, we're done! Report the factor.
    
    let tally = {};
    let product = 0;
    let depth =0;
    while (Object.keys(tally).length !== 10){
      depth++;
      product = n*depth;
      product = product.toString();
      for (let j=0;j<product.length;j++){
        if (!tally[product[j]]){
          tally[product[j]] = true;
        }
      }
    }
    return depth;
    
}
  
console.log(computeDepth(1),10);
console.log(computeDepth(42), 9);