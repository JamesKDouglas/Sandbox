// Param: Principle, rate of intrest and number of time periods. i is 0 to 1. n will be 0 to 50.
// Return an array with 2 values: total under simple interest, total under compound interest. Rounded to nearest integer. up to 9999. 
// Example interest(100, 0.1,  1)  =  [110, 110]
//interest(100, 0.1, 10)  =  [200, 259]
// Pseudocode
// declare a simple and a compound interest.
// set up a for loop that runs n times/
// calculate simple and compound.

function interest(P,r,n) {

    let simpleInterest = P+P*r*n;
    let compoundInterest = P; 
    for (let i = 0 ; i<n; i++){
       compoundInterest += compoundInterest*r;
    }
    simpleInterest = Math.round(simpleInterest);
    compoundInterest = Math.round(compoundInterest);
    
    return [simpleInterest, compoundInterest];
}

console.log(interest(201, 0.998191503331656, 46));

//It is not possible to submit this solution to Codewars even though it works just fine for most cases.

//The error reported is:
// Principal is 2649; interest rate is 0.7537866155679442; number of time periods is 45
// Expected: [92504, 252368861394514], instead got: [92504, 252368861394515]

// Another example:
// Log
// Principal is 201; interest rate is 0.998191503331656; number of time periods is 46
// Expected: [9430, 13567599734213246], instead got: [9430, 13567599734213230]
// local output [9430, 13567599734213230]
// JS max safe integer: 9007199254740991 (2^53-1);

//So the CodeWars tester attempts to test the code with values that are larger than the max safe integer in javascript. This causes problems. Although this is an interesting problem to code around, it does not belong in a 7kyu challenge. I was unable to post this problem in the forum because of a verification error.


//The top proposed solution in CodeWars is:
// function interest($, r, n) {
//   const dif = (x, y, z) => z > 0 ? dif(x + x*y, y, z-1) : Math.round(x);
//   return [Math.round($ + $*r*n), dif($, r, n)]
// }

//This solution also fails, with the error, 
// STDERR
// Unhandled rejection TestError: Expected: [13093, 1479691873877297], instead got: [13093, 1479691873877296]

//I did try using BigInt, but I can't get it working. What we are seeing here is just an error in the CodeWars implementation.
