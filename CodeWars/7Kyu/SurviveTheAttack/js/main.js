//input of two arrays. They contain positive integers of number type and maybe not be of equal length.
//no nulls input.

//There is a defender and an attackers. 
//Compare the arrays at the matching indexes, 
//subtracting attacker from defender and defender from attacker.
//If a value is below 0 remove the element from the array.

//The winner has the most values remaining.
//Return true if the defender wins (survives), false if attacker wins.

//If the # players is the same the winner is the one with the most initial attack points.
//if the # players is the same and also the number of points is the same, return true.

//(output will be a boolean.)

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
//0 survivors                4 survivors
//return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
//1 survivors                3 survivors 
//return true


function hasSurvived(attackers, defenders){
    //find the lengths of the shortest array
    let shortest = Math.min(attackers.length, defenders.length);
  //   console.log("shortest:",shortest);
    
    //find the total sums before we mutate.
    let attackersIAP = attackers.reduce((a,c)=>a+c,0);
    let defendersIAP = defenders.reduce((a,c)=>a+c,0);
    
    let attackerBuf = 0;
    //set up a for loop. Go through the indexes of the shortest array.
    for (let i=0;i<shortest;i++){
      attackerBuf = attackers[i];
      
    //Subtract values. Write it out rather than using destructured notation.
    //mutate the arrays to remove values and change values.
      attackers[i] = attackers[i]-defenders[i];
      defenders[i] = defenders[i]-attackerBuf;
      if (attackers[i]<=0) {
        console.log("one attacker down!");
        attackers.splice(i,1);
      };
      if (defenders[i]<=0) {
        console.log("one defender down!");
        defenders.splice(i,1);
      }
    }
    
    //at the end, see how many elements remain.
    console.log("attackers:", attackers);
    console.log("defenders:", defenders);
    if (attackers.length>defenders.length) return false;
    if (attackers.length<defenders.length) return true;
    if (attackers.length === defenders.length) {
    //if the # elements is the same then check the sums.
    //declare a winner if you can.
      if (attackersIAP>defendersIAP) {
        return false;
      } else if (attackersIAP<defendersIAP){
        return true;
      } else {
        //If the sums are also the same then return true.
        return true;
      }
    }
  }
  
  console.log(hasSurvived([ 1, 3, 5, 7 ],[ 2, 4, 6, 8 ]), true); 
  console.log(hasSurvived([ 1, 3, 5, 7 ],[ 2, 4 ]), false);
  console.log(hasSurvived([ 1, 3, 5, 7 ],[ 2, 4, 0, 8 ]), true);
  