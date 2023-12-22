//input will be an integer n. It's not a bigInt.
//The goal is to find the nearest square number.
//It can be higher or lower.

//return the nearest square number

//edge cases? none. 
//timeouts? none.

function nearestSq(n){
    //Find the square root of n.
    //Find the floor and ceiling of the square root of n.
    //Calculate the squares of each
    //Determine the difference between them and n.
    //Report the one with the smallest.
    
    let rtnCeilSq = Math.ceil(Math.sqrt(n))**2;
    let rtnFloorSq = Math.floor(Math.sqrt(n))**2;
    
    return ((rtnCeilSq-n)>(n-rtnFloorSq))? rtnFloorSq : rtnCeilSq;
    
  }
  
  console.log(nearestSq(1), 1);
  console.log(nearestSq(2), 1);
  console.log(nearestSq(10), 9);
  console.log(nearestSq(999), 10000);