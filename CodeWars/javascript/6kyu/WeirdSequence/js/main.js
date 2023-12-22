//The input will be a big int n, above zero and below 10^12.

//There is a sequence of integers called "weird sequence". Find the value of the n'th entry.

//The sequence is built by:
//start with 1.
//Intersplice the sequence 1,2,3... before and after.
//Continue to intersplice the sequence, repeatedly.

//ex:
//1
//1 1 2
//1 1 1 2 1
//1 1 1 2 1 3 2 4 1

//Note how the following interspliced sequence repeats the previous one to begin.

//Return the value of the nth sequence entry
// ex 1 => 1
// 7=>2
// 9 =>1

//There will be bigInts involved.
//The sequence is zero indexed
//edge cases - none
//timeouts - 12 000 ms. 

function weird(n) {
  //Try a recursive strategy. I'll generate the sequence by halves 
  //That is, the generaed sequence is passed to the function and forms the first half
  //Keep generating sequence until it's long enough. Then return the value.
  let seq = [1n];
  function genSeq(seq){

    if (BigInt(seq.length)>=n){
      return seq[n];
    }
    
    //otherwise, generate second half
    let nextDigCounter = 1n + BigInt(seq.length)/2n;
    let nextDigFromSeq = seq[BigInt(seq.length)/2n];
    
    //copy these values because we will mutate seq
    let starti = BigInt(seq.length)/2n;
    let endi = BigInt(seq.length);
    
    for (let i=starti;i<endi;i++){
      seq.push(nextDigCounter);
      seq.push(nextDigFromSeq);
      
      nextDigCounter++;
      nextDigFromSeq = seq[i];
    }
    
    //And recursively call
    genSeq(seq);
  }
  
  return genSeq(seq);
}

console.log(weird(1n), 1n);
console.log(weird(10n), 3n);
console.log(weird(23n), 12n);
``