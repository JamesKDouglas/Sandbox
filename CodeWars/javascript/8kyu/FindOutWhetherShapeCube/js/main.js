//The input will be a volume and side length of an imaginary cuboid.
//In this imaginary world, cuboids can only have side lengths of integers.

//Determine the length of the other sides and see if this shape is a cuboid.

//if it is, return true. If not, return false!

//-1, 2 => false;
//8, 3 => false;
//8, 2 => true;

//Unusual cases, timeouts, job size?
//Nothing odd expected. No nulls, no big jobs, no million tasks in 1000 ms.

var cubeChecker = function(volume, side){
    //rearrange the equation
    //calculate volume/side.
    //then find the sq rt. 
    //If it's equal to side, return true. If not, false.
    
    let tSide = volume/side;
    tSide = tSide**0.5;
    if (tSide === side){
      return true;
    } else {
      return false;
    }
    return false;
  };
  
  console.log(cubeChecker(-1, 2), false);
  console.log(cubeChecker(8, 3), false);
  console.log(cubeChecker(8, 2), true);
  
  