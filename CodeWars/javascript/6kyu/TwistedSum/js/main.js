// parameters: input a number N
// return the sum of all the digists from 1 to N, inclusive. Not numbers, but digits.
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
// example: # N = 4
// 1 + 2 + 3 + 4 = 10
// pseudocode
// for loop with index i until N.
// sum counter.


function twistedSum(n) {
    let sum = 0;
    let numString;
    let numArr = [];
    for (let i = 0;i<=n;i++){
        numString = i.toString();
        numArr = numString.split('');
        console.log(numArr);
        for (j in numArr){
            sum += Number(numArr[j]);
        }
    }
    return sum;
}

let num = 11;
console.log(twistedSum(num));