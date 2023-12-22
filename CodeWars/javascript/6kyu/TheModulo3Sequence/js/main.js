//The input will be an integer N, between 1 and 10^19 (no bigInts).

//The goal is to return the n'th number of a sequence. The sequence is:
//Starting with 0 and 1, the next (3rd) entry is the sum of the previous 2 modulo 3.


//ex 
//n=5 => 0,1,1,2,0, => 0
//n=8 => 0,1,1,2,0,2,2,1 =>  1
//n=12 => 0,1,1,2,0,2,2,1,0,1,1,2 =>2
//n=16 => 0,1,1,2,0,2,2,1,0,1,1,2,0,2,2,1 => 1

//so from what I see, it repeats a pattern 8 numbers long.
// test this
// n=48 => 48/8 = 6, 48%8 = 0 => 1
//n = 41 => 5.125 => 41%8 => 1 => 0
//looks ok.

//edge cases? none expected. Always valid inputs.
//timeouts? 12 000 ms. There are some very large numbers so we'd better not just
//generate the entire sequence.

function sequence(n){
  let seq = [0,1,1,2,0,2,2,1];
  
  let mod8 = n%8;
  let ind =0;
  
  //if mod8 = 0, return the 7th index. if it is 1, return the 0th index. 
  //if it is 2, return the 1st index. if it is 3, return the 2nd index.
  
  if (mod8 === 0){
    ind = 7;
  } else {
    ind = mod8 - 1;
  }
  
  return seq[ind];
  return 0;
}

console.log(sequence(5), 0)
console.log(sequence(8), 1)
console.log(sequence(12), 2)
console.log(sequence(15), 1)  