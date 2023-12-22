//The input will be a 2D coordinate, and only an integer.
//so (x,y)

//A spiral is drawn starting from the origin and going right first 
//then making 90 degree turns. 
//In this way all integer points are passed through by the line.

//At each corner, of course the line "turns". 

//The goal is to determine how many turns are necessary to reach a point.

//Return the integer value

//ex:
//(1,1)=> 0,0 to 1,0 to 1,1. There is 1 corner.  => 1
//(1,-1)=>4

//BigInts? No, none.
//To particular timeouts.
//Decimals? None expected. no invalid inputs expected.
function turnsOnRoad(x, y) {
  //I could 'be the wolf' and count the corners 
  //That would be 'brute force' and work fine for small jobs but not for 
  //larger numbers.
  
  //Or, I could be a bit more clever and try to come up with an algorithm
  //What I see is that the coordinates are split up into zones. Well, lines.
  //That is based on quadrant and relative magnitudes of x and y.
  
  //Lets try the former first. So, that's a brute force solution.
  
  //We'll have 4 moves, and mark when corners are turned, since that's the end of the move
  //Along the way, test to see if the coordinates we are looking for are passed through
  
  //Wolfs eat mice. So we'll have the wolf and mouse location
  
  let a=0;
  let b=0;
  let wolf = [a,b];
  let mouse = [x,y];
  let direction = 0;//bearing right, up, left or down (0,1,2,3)
  let corners = 0;
  let safety = 0;
  while (JSON.stringify(wolf)!==JSON.stringify(mouse) && safety<=200){
    wolf = [a,b];
    safety++;
    console.log("check: ", safety);
    console.log("begin at:", wolf, mouse);
    console.log(JSON.stringify(wolf)===JSON.stringify(mouse)?"Found mouse!":"no mouse found");
    
    if (direction === 0){

      //now, did we hit a corner?
      if (-a===(b-1)){
        corners++;
        console.log("hit a corner!", corners);
        direction++;
        a++;
        //did we find the mouse?
        continue;
      } 
      //bearing right
      b++;
      console.log("move to: ", a, b);
    }
    if (direction === 1){

      //now, did we hit a corner?
      if (a===b){
        corners++;
        direction++;
        a--;
        continue;
      } 
      //bearing up
      a++;
      console.log("move to: ", a, b);
    }
    if (direction === 2){

      //now, did we hit a corner?
      if (-a===b){
        corners++;
        direction++;
        b--;
        continue;
      } 
      //bearing left
      a--;
      console.log("move to: ", a, b);
    }
    if (direction === 3){

      //now, did we hit a corner?
      if (a===b){
        corners++;
        direction = 0;
        b++;
        continue;
      } 
     //bearing down
      b--;
      console.log("move to: ", a, b);
    }
  }
  return corners;
  // console.log("test");
}

console.log(turnsOnRoad(1,1),1);
// console.log(turnsOnRoad(1,-1),4);
// console.log(turnsOnRoad(0,1),2);
// console.log(turnsOnRoad(10,10),37);