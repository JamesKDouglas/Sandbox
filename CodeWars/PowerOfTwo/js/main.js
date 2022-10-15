//Input an integer. That's the power that we will raise 2 to. Output every power to an array. 

// input is 4
// output [1,2,4,8,16]

//n is an integer not a bigInt.

//2 under 2x10^15

//no bigInts.

//no strings. returning an array of integers. 

//no time limits. 
let n = Math.pow(10, 7);

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }

  return arr;
}

console.log(powersOfTwo(4), [1, 2, 4, 8, 16]);

console.log(powersOfTwo(0), [1]);

console.log(powersOfTwo(8), [1, 2, 4, 8, 16, 32, 64, 128, 256]);

console.time('calcBegin');
powersOfTwo(n);
console.timeEnd('calcBegin');

//I tried timing the ** operator and it looks like that operator is a little bit slower than Math.pow.