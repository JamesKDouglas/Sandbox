//Inputs will be integers of number type. s - speed, and t - time. 
//what if we get a 0 for s or t? well, d will just be zero. Should we handle this?
//nah.
//How about large cases? BigInts? Timeouts? No bigints. Don't worry about timeouts.
//How about unexpected data types? like "two" or "2" instead of 2. Don't expect it, don't handle it.
//expect always positive integers. 

//Time will be organized by discreet blocks. 
//So if t = 4 that means there are 4 blocks.
//s and t have harmonized units - we can basically forget about units.

//1) sprinting doubles the speed. 
//2) sprinting can only happen for 1 time block at a time. 
//3) after a sprint there needs to be at least 1 non sprint block
//4) after a sprint is conducted the base speed is reduced by 1.

//of course d = s*t, integrating s and t for each block gives the distance. 

//find the maximum distance that can be travelled for the given time period.

//return an integer of number type. 

// ex s=1, t=4
//rrrs => 1+1+1+2 => 5
//rsrs => 1+2+0+0 => 3 //penalty of 2, too many sprints.

//ex s=2, t=4 => d=10
//rrrs => 2+2+2+4 =>10
//rsrs => 2+4+1+2 => 9//penalty of 1, too many sprints for this speed

//ex s=3, t=4
//rrrs => 3+3+3+6 => 15
//rsrs => 3+6+2+4 => 9+6 => 15//equilibrium.

//ex s=4, t=4
//rrrs => 4+4+4+8 => 20
//rsrs => 4+8+3+6 => 12+9 => 21//advantage of 1 to having 2 sprints

//ex s=5, t=4
//rrrs => 5+5+5+10 => 25
//rsrs => 5+10+4+8 => 15+12 => 27 //advantage of 2 having 2 sprints.


//ex s=10 t=4
//rrrs => 10+10+10+20 => 50
//rsrs => 10+20+9+18 => 30+27 => 57 //advantage of 7 to having 2 sprints.

//It only makes sense to sprint at the end. 
//It makes sense to sprint at the very end.
//Once you start sprinting you should
//sprint as much as possible. The optimal solution is an SR sequence at the end.
// The only question is how many sr sequences should be at the end.
// And that relates to the magnitude of s and r.

//so, I may not be bright enough to figure out the algebra here, but I can reach
//beyond brute force and say that we're testing sequences with maximum sprinting at the end.
//then all we have to do is test max sprinting until we get a value that is lower distance than before.


//there's no penalty to sprinting in the last unit so there will always be at least 1 sprint
//sprinting at the end does minimize the cost from rule 4.
function solution(s, t) { 
    //generate a sequence, rrrs, rsrs etc.
    let seqs = [];
    let sprint = "sr";
    let reg = "r";
    for (let i=0;i<t/2;i++){
      seqs.push("");//make empty array
      seqs[i] = sprint.repeat(i);//add the sr sequences
      seqs[i] = reg.repeat(t-(i*2)-1) + seqs[i];//fill out with r's
      seqs[i] = seqs[i] + "s"; //there is always a terminal sprint.
    }
    
    console.log(seqs);
    
    //then go through them and look for d falling. If it falls we're done - exit and return.
    //use the sequences in a for loop, just checking them one at a time, integrating for d.
    //So, here I just check all the sr sequences. We could set flags so when it starts to decrease we terminate, because it's true that at some point there are too many sprints and there is no point in adding more.
    let S = s; //store speed
    let d=0;
    let dMax=0;

    for (let i=0;i<seqs.length;i++){//choose sequence;
      d=0;//reset d
      S=s;//reset s
      for (let j=0;j<seqs[i].length;j++){
        if (seqs[i][j]==="r"){
          d += S;
        } else if (seqs[i][j] === "s"){
          d += 2*S;
          S -= 1;
        }
        console.log("d so far:", d);
      }
      console.log(d);

      if (d>dMax){
        dMax = d;
      }
    }
    return dMax;
}
  
  console.log(solution(2,4), 10);
  
  //This passes the codewars but I do need to turn off the console logs otherwise it exceeds the buffer.