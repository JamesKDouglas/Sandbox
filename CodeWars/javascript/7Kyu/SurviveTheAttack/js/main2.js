function hasSurvived(attackers, defenders){
    //find the lengths of the shortest array
    let shortest = Math.min(attackers.length, defenders.length);
  //   console.log("shortest:",shortest);
    
    //find the total sums before we mutate.
    let attackersIAP = attackers.reduce((a,c)=>a+c,0);
    let defendersIAP = defenders.reduce((a,c)=>a+c,0);
    console.log("defendersIAP:", defendersIAP, "attackersIAP:", attackersIAP);
    console.log("attackers:", attackers.slice(), "defenders:", defenders.slice());

    let attackerBuf = 0;

    //set up a for loop. Go through the indexes of the shortest array.
    for (let i=0;i<shortest;i++){
        console.log("examining,", i);

        attackerBuf = attackers[i];  

        //Subtract values. 
        //mutate the arrays for that.
        attackers[i] = attackers[i]-defenders[i];
        defenders[i] = defenders[i]-attackerBuf;
    }

    //now remove dead soldiers.
    attackers = attackers.filter(el=>el>0);
    defenders = defenders.filter(el=>el>0);
    //at the end, see how many elements remain.
    console.log("battle is over");
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
    //console.log(hasSurvived([ 1, 3, 5, 7 ],[ 2, 4, 6, 8 ]), true); 
    //console.log(hasSurvived([ 1, 3, 5, 7 ],[ 2, 4 ]), false);
    console.log(hasSurvived([ 1, 3, 5, 7 ],[ 2, 4, 0, 8 ]), true);
    

//With the input, 
//attackers: [
//   100,  3, 16, 48, 93,
//   59, 17, 37, 56, 50
// ] 
//defenders: [
//  55, 85, 38, 90, 20,
//  75, 67, 61, 21, 21
// ]
//Codewars issues the error,

//testing attackers argument after calling hasSurvived: expected [ 45, -82, -22, -42, 73, -16, -50, -24, 35, 29 ] to deeply equal [ 100, 3, 16, 48, 93, 59, 17, 37, 56, 50 ]

// So they are expecting the array to -not- be mutated? Ok, fine.