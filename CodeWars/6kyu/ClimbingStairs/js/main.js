//The input is an array of integers.

//The array represents a set of stairs.
//Each stair has an associated value.
//This value is what it costs to step onto it.

//The goal is to determine the minimum cost to climb the stairs.

//You can choose to take 1 or 2 steps at a time.

//The "top" of the stairs is the second last stair or the last stair.

//[0,2,2,1]=>2
//[0,2,3,2]=>2
//[10, 15, 20]=>15
//[0,0,0,0,,0] => 0

//[0,2,5,11,23] => with the simple look-ahead algorithm: 2, 5, 11. 18. 
//But if I went from 5 to 11 I'd be done in 16.
//Yet also if I went from 2 to 11 that is 13. 

//ok so the terminal move decision needs to happen at at i === cost.length-4.
// I can step 2 and end when I'm within 2.

//the first value is just a placeholder

//there are always at least 2 stairs.

//edge cases? 000 is an edge case. but not a big deal.
//bigInts? Invalid inputs? nope.
//modestly sized arrays. Timeout not likely but 12 000 ms.
//less than 1000 stairs. well no test cases for that.

function climbingStairs(cost) {
  console.log("stair set:", cost);
  //lets try just looking at the next 2 steps. Which should I go to?
  let costCounter = 0;

  //main run, for a long staircase
  for(let i=0;i<cost.length-4;i++){
      console.log("looking at the next two stairs. i:", i);
      if (cost[i+2]>cost[i+1]*2){
        //if going two steps costs more than double going one step, just take 1 step
        costCounter += cost[i+1];
      } else if (cost[i+2] == cost[i+1]){
        //if I can take 2 steps for the same cost as one, then take 2.
        i++;
        costCounter += cost[i+2];
      } else {
        //the last possibility is that the second step is less than twice as expensive. so go there.
        i++;
        costCounter += cost[i+2];
      }
    }
  }
    let i = cost.length-4;
    //then we enter the terminal stage. I can step 2 and end at -2. 
    //So we need to look at things 4 in advance to consider the final move

    //Should I finish with a 2 step from -2, or go 1 more and finish with a 2 step?
    //There isn't a case where it would make sense to go 1 more then 1 more. If there is a 0
    //you could step on that but you can also just step over it.

    //well it's rather always like that, not just at the terminal move.
    //pad with zeros on the end?
    if (cost[i+1]<cost[i+2]){
        costCounter += cost[i+1];
        console.log("finish with a two stepper! i:", i);
        return costCounter;
      } else {
        costCounter += cost[i+2];

        console.log("finish with a one stepper! i:", i);
        return costCounter;
      }
    }
  }
}


console.log(climbingStairs([0,2,2,1]), 2);
console.log(climbingStairs([0,2,3,2]), 2);
console.log(climbingStairs([10, 15, 20]), 15);
console.log(climbingStairs([0,0,0,0,,0]), 0);