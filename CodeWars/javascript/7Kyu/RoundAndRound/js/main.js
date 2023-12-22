//Imagine an apartment building that is circular, with 
//doors around the exterior.
//They are numbered increasing clockwise from the top from 1 to n 


//Ram lives at appartment number a.
//He walks |b| entrances where + means clockwise
//and - means counterclockwise. 

//Given a, b and n what number does Ram end up at?

//for example, for (n,a,b)
//6,2,-5 => 3 
//5,1,3 => 4
//3,2,7 => 3

//invalid input? not expected.
//timeouts? not likely.


function roundAndRound(n, a, b) {
  //use a for loop.
  //limit it using b.
  //detect the sign
  //Count. Then reset as necessary.
  let position = a;
  let numMoves = Math.abs(b);
  for (let i=0;i<numMoves;i++){
    //Move in the correct direction
    if (b<0){
      position--;
    } else if (b>0){
      position++;
    } else {
      return a;
    }
    
    //Reset if we pass go!
    if (position>n){
      position = 1;
    } else if (position<1){
      position = n;
    }
  }
  return position;
}

console.log(roundAndRound(6,2,-5), 3);
console.log(roundAndRound(5,1,3), 4);
console.log(roundAndRound(3,2,7), 3);