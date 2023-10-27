//The input will be 3 values: direction, an array of zoom values, and the current
//zoom value.

//All of them are integers: direction is either 1 or -1. Zoom values are
//just from 1 to an integer.

//and the current zoom value must be a value from the zoom value array.

//The goal is to consider the 3 values and return a new position.

//ex:
//-1, [1,2,3], 2 => 1
//1, [1,2,3], 4 => null
//1, [1,2,2,3], 2 => 2

//edge cases: 
//If the parameters move you outside the array wrap around.
//If the current value is not inside the zoom array, return null.

//invalid input? Not expected.
//sometimes there are repeat zoom values. Zoom values are always in order
//but you can have [1,2,2,3].
//In this case, if 2 is the current value then consider it referring to the first 2, 
//from the left.


function cycle(dir, arr, cur) {
  //look up the value, from the left. If it doesn't exist return null
  //If it does, hold this position.
  //Change the index according to direction.
  let ind = 0;
  
  if (arr.findIndex((el) => el===cur) !== -1){
    ind = arr.findIndex((el)=>el===cur);
  } else {
    return null;
  }
  
  let newInd = ind + dir;
  
  if (newInd<0){
    newInd = arr.length - 1;
  }
  if (newInd>arr.length - 1){
    newInd = 0;
  }
  
  return arr[newInd];
  
}

console.log(cycle(-1, [1,2,3], 2), 1);
console.log(cycle(1, [1,2,3], 4), null);
console.log(cycle(1, [1,2,2,3], 2), 2);

