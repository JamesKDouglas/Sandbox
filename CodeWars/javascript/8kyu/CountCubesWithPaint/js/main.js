//The input will be a number of "cuts". That is,  single integer.
//It represents the number of times a solid blue, red painted, cube is sliced
//in each dimension.

//The goal is to figure out how many cubes with at least one red
// face exist from this cutting.
//return it as an integer.

//This is the same as the # of faces except that we have to subtract 2 from
//the corners and 1 from the sides pieces

//or just calculate the number of exterior cubes.

//edge cases, timeouts? Nope none. 

//0 cuts
//6 faces
//1 cube

//1 cut set
//4x6 faces
//8 cubes

//2 cuts
//9x6 faces
//9+9+3+3+1+1 cubes = 26 cubes


var countSquares = function(cuts){
  //special case
  if (cuts == 0) return 1;
  
  let face1 = (cuts+1)**2;
  let face2 = (cuts+1)**2;
  let face3 = (cuts-1)*(cuts+1);
  let face4 = (cuts-1)*(cuts+1);
  let face5 = (cuts-1)*(cuts-1);
  let face6 = (cuts-1)*(cuts-1);
  
  return face1+face2+face3+face4+face5+face6;
  
  
}

console.log(countSquares(0),1)
console.log(countSquares(1),8)
console.log(countSquares(2),26)