//The input will be an integer, n.

//The goal is to find all of the sets of sequential numbers
//that add up to n. 

//Sort thee sequences by ascending order in terms of their
//length, and return an array of arrays.

//edge cases: 1 is an edge case. No sequences are possible.
//In this case return [].
//Timeouts? BigInts? normal size integers expected. Timeout 12000 ms


//ex:
//15 => [[7,8],[4,5,6],[1,2,3,4,5]]
//20 => [[2, 3, 4, 5, 6]]
//3 => [[1,2]]

function findSequences(n){
  //try using gauss's forumula:
  //The sum of a sequence is 
  //sum = (i/2)(first num+last num) where i is the
  //number of integers.
  
  //for 1 to 5, 2.5*6 = 15.
  
  //ok but how do we use this?
  
  //Surely i, the number of integers, is related to the first and last number.
  //i = last-first+1
  //ex 6-2 +1 = 5.
  
  //sum = ((last-first+1)/2)(first + last)
  //so what's the algorithm here? Try a first, try a last. See if it fits.
  //we only need to go up to halfway mark for the last. 
  
  //so we'll choose a last number, which will start as n/2 floor.
  //then count down to find the first that gives a correct sum.
  //In this way find the pairs of first/last.
  
  //Then generate the sequences from those pairs.
  
  //Obviously not a perfect algorithm but reasonable. 
  
  let pairs = [];
  for (let last = Math.floor(n/2)+1; last>0;last--){
    for (let first = 1; first<last;first++){
      //sum = ((last-first+1)/2)(first + last)
      if (((last-first+1)/2)*(first + last) === n){
        pairs.push([first, last]);
      }
    }
  }
  console.log(pairs)

  //now sequences from pairs
  let seqs = [];
  let seq = [];

  for (let i=0;i<pairs.length;i++){
    for (let j=pairs[i][0];j<=pairs[i][pairs[i].length-1];j++){
      seq.push(j);
    }
    seqs.push(seq);
    seq = [];
  }
  console.log(seqs)
  return seqs;
}

console.log("test1", findSequences(15), [[7,8],[4,5,6],[1,2,3,4,5]]);
console.log("test2", findSequences(20), [[2, 3, 4, 5, 6]]);
console.log("test3", findSequences(3), [[1,2]]);
