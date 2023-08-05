// Input is an array of integers. There are 2000 or fewer entries in the array
// Each integer  is positive and has a value between 1 and 100.

//The goal is to consider this a set of rope lengths and generate a hash
//based on the following procedure:
//Find the shortest non zero length
//rope in the input array. Subtract that length from all
//the other ropes. This will bring at least one of the lengths to 0.
//That rope is considered gone.
//Store a value for how many ropes remain. 
//Repeat until 0 ropes remain.

//The hash is an array of the values for how many ropes remain after each shortenng.

//ex:
// [3, 3, 2, 9, 7] => [5, 4, 2, 1]

// 3 3 2 9 7 => 1 1 0 7 5 => 0 0 0 6 4 => 0 0 0 0 2  => 0 0 0 0 0  
// return [5, 4, 2, 1]

//edge cases? No negatives or zero inputs. No large arrays or integers.
//all the same? Well then we would just get back [5]
//Timeouts? Nothing much.


function cutTheRopes(a) {
  //While loop.
  
  //first, sort the ropes. Lowest to highest b-a.
  let sorted = a.sort((a,b)=>a-b);
  // console.log(sorted);
  //[2,3,3,7,9];

  //How about we use unshift?
  //Go from the left and track how many are removed each time. Subtract that from a counter.

  let ropesLeft = a.length;
  let shortestRopeLen = 0;
  let hash = [];
  hash.push(ropesLeft);

  while (ropesLeft>0){
    shortestRopeLen = sorted.shift();
    ropesLeft--;
    // console.log(shortestRopeLen, sorted[0]);
    while (shortestRopeLen === sorted[0]){
      // console.log("found a dupe");
      sorted.shift();
      ropesLeft--;
    }
    hash.push(ropesLeft);
  }
  hash.pop();
  return hash;
}

console.log(cutTheRopes([3, 3, 2, 9, 7]), [5, 4, 2, 1]);
