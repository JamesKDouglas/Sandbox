//Input is an integer, n.

//The goal is to determine the Pell sequence number corresponding to index n.

//The sequence goes:
//0,1,2,5,12,...
//which is P(n)=2*p(n-1) + P(n-2)

//Return the value as a big int.

//edge cases? Negative n? Not expected. Invalid n? Nope.
//Timeouts? 12 000 ms. 
//Job size? BigInts.


function pell(n) {
  //Everything has to be bigInt (convert n);
  
  //brute force the first time around.
  
  //3 variables - n, n-1 and n-2
  
  //edge case/early return for n=1
  if (n===1){
    return 1n;
  }
  
  let N = BigInt(n);
  let nm0 = 0n;
  let nm1 = 1n;
  let nm2 = 0n;
  for (let i=0n;i<N-1n;i++){
    //calculate the next in the sequence
    nm0 = 2n*nm1 + nm2;
    //increment the n-1 and n-2 trackers
    nm2 = nm1;
    nm1 = nm0;
  }
  return nm0;
}

console.log(pell(2),2n);
console.log(pell(5),29n);
console.log(pell(10),2378n);

``