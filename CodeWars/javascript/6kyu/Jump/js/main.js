//The input is a single dimensional array with positive or zero integers.

//The goal is to examine it according to the rules of the game "jump" and 
//see if it possible to "win"
//It is not allowed to jump from the last index.

//Winning the game of jump means you are able to transit to past the end of the 
//array.
//Transit happens in this way:
//Begin at index 0. You are able to move to future indices within and including
//the value of the integer there.
//An example is given,
//[2, 0, 3, 5, 0, 0, 3, 0, 0, 3, 1, 0],
// you can win by jumping from 
// 2, to 3, to 5, to 3, to 3, then past the end of the array.

//Note that it is possible for a player to "choose" to jump to a 0, 
//but then they would get stuck and "lose". THe question is not whether they lose,
//or what path but is it possible to win.

//Return a boolean true or false.

//edge cases and simple cases:
//An array of just 1 in length cannot be won since you can't jump from the last
//and you start from the first.
//An array that starts with 0 cannot be won since you would just
//immediately get stuck

//Size? Nothing huge. Timeouts? Unexpected.

function canJump(array){
    console.log(array);
    //early returns - length 1, only zeros.
    if (array.length === 1) return false;
    if (array.reduce((a,b) => {return a+b;},0) === 0) return false;
    if (array[0]===0) return false;
    
    //I may work from the end of the array rather than the  start.
    
    //So the question is, "can we get there?"
    //The answer is determined by going to the left and seeing if 
    //there is a value, first over then over or equal to the 
    //number of moves
  
    let moveWorks = false;
    for (let i=array.length-1;i>=0;i--){
       //The outer loop is the checking loop. The inner one is 
      //the subroutine.
      
      //the first time time through the loop
      // the rule is different - can we jump past the location?
      let jumpPosition = 0;
      
      //So we start with a location.
      
      //Then if it's the end location we ask, "can I exceed this location? "
      if (i=array.length-1){
        console.log("checking last value. Can we go past it?")
        //Can I exceed this with any previous values?
        for (let j=array.length-1;j>0;j--){
          console.log("j is ", j)

          console.log("look at the value ", array.length-j, " from the end");
          console.log("which is", array[j-1])
          if (array[j-1]>(array.length-j)){
            //if we found a spot we can jump past the end from
            //fine then record the position and carry on
            console.log("yes we can jump past");
            console.log(array[j-1], j-array.length)
            jumpPosition = j;//report out position the last jump takes place from
            break;
          } else {
            //if not, keep searching
            if (j===1){
                console.log("no, we checked all the values and cannot ever jump past the end");
                return false;
            }
            continue;
          }
          //we got to the beginning and no possible jump past the end was found
          //then there is no solution

        }
      } else {
        //Suppose we pass the first test and yes you can jump past the end
        //Then go back from that position
        i=jumpPosition;
        
        for (let j=array.length-1;j>=0;j--){
        
          //Here there is an equal sign as well.
          if (array[j-1]>=(j-array.length)){
            //if we found a spot we can jump to the position to
            //fine then record the position and carry on
            jumpPosition = j;//report out position the jump takes place from
            break;
          } else {
            //if not, keep searching
            continue;
          }
          //we got to the beginning and no possible jump to this position
          //then there is no solution
          if (j=0){
            return false;
          }
        }
        
      }
      //If we went through the whole thing and never returned false, I guess we'er good
      return true;
    }
  }
  
  //These cases come out fine. So the problem has been solved.
  //However, apparently there are other test cases that don't
//   console.log(canJump([2, 0, 3, 5, 0, 0, 3, 0, 0, 3, 1, 0]), true);
//   console.log(canJump([6]), false);
//   console.log(canJump([1,1,3]), false);
//   console.log(canJump([0, 0]), false);
  
  console.log(canJump([2, 5]), true);
  
  