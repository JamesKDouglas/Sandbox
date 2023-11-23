`//The input will be an array representing a series of throws and 
//a ball entering one of 3 hoops.
//There is a red, green and blue hoop.
//ex: ['R','R','R','R'] represents the ball being thrown four times in a row into
//the red hoop.

//Figure out the score that is associated with the series of throws.

//Scoring is done by this set of rules:
// - Ordinarily, if a ball enters a hoop 100 points are granted.
// - If a ball enters a hoop 3 time in a row a bonus is issued:
// red - 500, blue - 300, green - 200
// - once a bonus is issued, that color of hoop is inactive until a 3x event with
//a different color. For example, in the 4x R the fourth R doesn't gain any points.
// - If a hoop does get 3 balls in it, even though it is inactive, the 3x run activates
//it again.

//Return the score as an integer.

//edge cases? There really aren't any. No unexpected/invalid input.
//timeouts/job size: 12 000 ms. 


const prizeCounter = (s) => {
  //set up a counter to monitor for the 3x bonus.
  //Also set up a variable for deactivation.
  //and a variable to hold the score so far.
  
  //for loop to go through the array.
  
  let counter  = 1;
  let deactivated; //undefined at the start
  let score = 0;
  
  for (let i=0;i<s.length;i++){
    // console.log("ball enters: ", s[i]);
    // console.log("deactivated: ", deactivated);

    if (s[i] !== deactivated){
      // console.log("simple 100 score");
      score += 100;
    }
    
    if (s[i] === s[i-1]){
      counter++;
      // console.log("repeat hoop. ", counter);
    } else {
      counter = 1;
    }
    
    if (counter>=3 && s[i]!==deactivated){
      if (s[i] === "R"){
        score += 500;
        // console.log("red bonus!", score)
      } else if (s[i] === "B"){
        score += 300;
      } else if (s[i] === "G"){
        score += 200;
      } else if (counter >= 3 && s[i] === deactivated){
        // if the ball goes into a deactivated hoop 3x then it becomes active again.
        deactivated = "Z";
      }
      counter = 1;
      deactivated = s[i];
    }
  }

  return score;
}

console.log(prizeCounter(['R','R','R','R']), 800);
console.log(prizeCounter(['R', 'B', 'G', 'G', 'B', 'B', 'B', 'G', 'B']), 1100);
console.log(prizeCounter(['G', 'G', 'G', 'B', 'B', 'B', 'G']), 1200);`