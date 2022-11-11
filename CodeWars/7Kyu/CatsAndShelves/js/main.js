//Input a start and end shelf.

//imagine these shelves are staggered, rising.
//A cat climbs up the shelves from the bottom to the top.

//The cat can move upwards either 1 or 3 shelves (not 2).
//Return the minimum number of moves.

//integers only.
//1 to 5 is 2 hops. 
//That can be 1=>4=>5.
// or 1=>2=>5.
//Don't return the series, just the number of hops. So these are both the same and return 2.

//1=>10
//1=>4=>7=>10.

//(end-start)%3= 0;
//(end-start)/3 = 3.

//1=>3 
//1=>2=>3
//2 hops.
//(end-start)%3 = 2
//(end-start)/3 = 0.66

//immediately we can see that with a large number of shelves obviously the cat hops 3 shelves for most hops.
//It's only at the end where we have to make a decision. 

//So modulo is the main thing here. That's the same as remainder if both integers involved are positive.

//bigInt? Nope. 
//don't worry about -ves or null or undefined.

function solution(start, finish) 
{
  //there are 2 hop types. 
  //Total number of hops is a sum of the two types.

  //first, lets calculate the 3 hops. That's Math.floor((end-start)/3).
  let threeHops = Math.floor((finish-start)/3);

  //second lets calculate the 1 hops. (end-start)%3 for that.
  let oneHops = (finish-start)%3;
  
  //sum and return the # of hops.
  return threeHops+oneHops;
}

console.log(solution(1,5),2);
console.log(solution(1,3),2);
console.log(solution(1,10),3);
console.log(solution(2,11),3);