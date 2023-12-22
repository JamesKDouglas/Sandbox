

//the input will be n
//the goal is to generate a series of integers from n to 1
//then return the list as an array.

//No BigInts, timeouts, or wierd shit.

const reverseSeq = n => {
  let arr = [];
  for (let i=n;i>=1;i--){
    arr.push(i);
  }
  return arr;
};

console.log(reverseSeq(5),[5,4,3,2,1]);
console.log(reverseSeq(6),[6,5,4,3,2,1]);
console.log(reverseSeq(7),[7,6,5,4,3,2,1]);