//input a an array of array. The elements in the arrays are either "o" or the "x"
//Imagine this as representing a 2D grid.

//Expect one x to be present. Return the coordinates of the x. 
//top left is 0,0 in the system.

//If there is more than one or no x return [] (empty array);

//return coordinate in an array ex [1,2] or [0,0];



const xMarksTheSpot = (input) => {
  
    //we can use arr.find(). But it only finds the first element. arr.findLast();
    //so arr.find() === arr.findLast(); If it doesn't return [] (more than one x in 1 row).
    //ALSO make a counter. If counter ===0 no x's found. If counter >=1 then multiple x's found (on multiple rows)
    
    //declare the counter, cordinates stash array.
    let counter = 0;
    let coords = [];
    
    //loop through the rows. 
    for (let i=0;i<input.length;i++){
     
      //console.log("found an x?");

      if (input[i].findIndex((el) => el === 'x') !== -1){
        // then test for 2 x's in the same row:
        
        if (input[i].findIndex((el) => el === 'x') !== input[i].findLastIndex((el) => el === 'x')){
        // If a second x is found return []. If not, carry on to detect additional x's.
          return [];
        }
        // increment counter, save coordinates.
        if (counter === 1){
          // If a second x is found on another row return []. If not, carry on to detect additional x's.
          return [];
        }
        counter++;
        coords.push(i);
        coords.push(input[i].findIndex((el) => el === 'x'));
      }  
    }
  
    //if at the end the counter===1 return coordinates.
    return coords;
}
  
  console.log(xMarksTheSpot([
    ['x','o'],
    ['o', 'o']
  ]), [0,0]);
  
  console.log(xMarksTheSpot([
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
  ]), [4,6]);
  
  console.log(xMarksTheSpot([
    ['x', 'o'],
    ['o', 'x']
  ]), []);
  
  console.log(xMarksTheSpot([
    ['o', 'o'],
    ['o', 'o']
  ]), []);