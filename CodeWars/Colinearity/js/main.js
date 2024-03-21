//Input will be 4 integers. These 4 numbers represent 2 vectors.

//All vectors start from the origin. The 4 integers provided represent 2 points to which the vectors point.

//For example,
//(1,2,2,4) represents the vectors 0,0 to 1,2 and 0,0 to 2, 4.
//In this example, the vectors are colinear.

//On the other hand, (1,1,6,1) vectors are not colinear.

//The output is just boolean true if they are colinear, false if not.

// note that the input may be (0,0,0,0)
// job size modest.
// no bigInts.

function collinearity( x1,y1, x2,y2 ) {
  //   special case first - is there a 0,0?  If so return true.
    
  //   find a ratio between x1 and x2. also between the y's.
  //   If the ratio is the same return true. else return false.
    
    //if we have a dot
  
    if (x1===0 && x2===0 || y1===0 && y2===0){
      return true;
    }
    
    let xr;//x1/x2
    let yr;//y1/y2
    
    if (x1 === 0 && y2 ===0 || y1 === 0 && x2 ===0){
      //orthogonal
      return false
    }
    
    xr = x1/x2;
    yr= y1/y2;
    if (xr===yr){
      return true;
    } else {
      return false;
    }
  
  }
  
  console.log(collinearity(1,1,1,1), true);
  console.log(collinearity(1,2,2,4), true);
  console.log(collinearity(1,1,6,1), false);
  console.log(collinearity(0,0,0,0), true);
  console.log(collinearity(0,0,1,0), true);
  console.log(collinearity(5,7,0,0), true);
  console.log(collinearity(4,0,11,0), true);
  