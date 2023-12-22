//The input will be a set of integers which represent the dimensions of a rectangle.
//(unitless)

//The goal is to determine how many squares, with integer dimensions,
//it is possible to split up the rectangle into.

//Return the number of squares as an integer.

//For example, a rectangle that is 3x2 (3 long for the example)
//can be divided into 6 small squares of 1x1.
//or it could be divided into 1 square on the left and one square on the right.
//of size 2x2.
//That gives a total of 8 squares

//edge cases? 0 => 0. that won't happen though.
//no negative numbers. No invalid inputs. 
//bigInts? no. 
//timeouts 12 000 ms. 


function findSquares(x,y){
  //the process for calculating the # squares will be as follows:
  //size 1: x*y
  //size 2: floor(x/2) * floor(y/2) * (1 + xmod2) * (1 + ymod2)
  //... carry on to min(x,y)
  
  let min = Math.min(x,y);
  
  let squaresCount = 0;
  for (let i=0;i<=min;i++){
    squaresCount += (x-i)*(y-i)
  }
  return squaresCount;
}

console.log(findSquares(3,2), 8);
console.log(findSquares(4,3), 20);
console.log(findSquares(11,4), 100);
