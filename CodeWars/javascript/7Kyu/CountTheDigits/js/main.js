// params: n, which represents the number range from 0 to n
//d, which represents the digit we are looking for.
//Square all the numbers from 0 to n.
// return the number of times d appears in those numbers.
// example
//n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// pseudocode.
// declare an array to put stuff into
// make a for loop and build the array with squares.
// turn the for loop into a big string with join.
// use filter to find the digit and place them into a second arr.
// 

function nbDig(n, d) {
let sqArr = new Array(n);
// console.log(sqArr);
    for (let i=0;i<=n;i++){
        sqArr[i] = i**2;
    }
// console.log(sqArr);

let strNums = sqArr.join('').split('');
// console.log(strNums);

strNums = strNums.filter(el => el == d );
// console.log(strNums.length);
return strNums.length;
}
let n = 25;
let d = 1;
console.log(nbDig(n,d));