// Parameters: inputs are 2 numbers, both integers. Between 2 and 99.
// Return: Are these two numbers coprime? That is, do they have the largest shared factor as 1? Return true or false.
// Example: Factors of 20: 1, 2, 4, 5, 10, 20
//          Factors of 27: 1, 3, 9, 27
//          These are coprime so return true.
// Pseudocode:
//Determine factors of X
//Determine factors of Y
//Compare the arrays
//If 1 is shared, continue until the end and return true. If you find something larger than 1 then return false.


function isCoprime(x, y) {
    let xFactors = findFactors(x);
    let yFactors = findFactors(y);
    console.log(xFactors);
    console.log(yFactors);

    let shortest;
    let longest;
    if (xFactors.length<yFactors.length){
        shortest = xFactors;
        longest = yFactors;
    } else if (xFactors.length>yFactors.length){
        shortest = yFactors;
        longest = xFactors;
    } else if (xFactors.length == yFactors.length){
        shortest = yFactors;
        longest = xFactors;
    }

    // console.log(shortest);
    // console.log(longest);

    let sharedFactors = [];
    for (let i=0;i<shortest.length;i++){
        if (Number(longest.filter(n => n==shortest[i])) != 0){
            sharedFactors.push(Number(longest.filter(n => n==shortest[i])));
        }
    }
    if (sharedFactors.length > 1) {
         return false;
     } else {
         return true;
     }
}

function findFactors(num){

    let factors = [];
    for (let i = 0;i<=num;i++){
        if (num%i == 0){

            factors.push(i);
        }
    }
    return factors;
}
console.log(isCoprime(67, 73));

// from the solutions section, for comparison:
// A much shorter solution:
// const isCoprime = (x,y) => [...Array(98)].every((_,i)=>x%(++i+1)|y%++i)

// and something more readable but also fairly short:
// function isCoprime(x, y) {
//     const min = Math.min(x, y);
    
//     for (let i = 2; i <= min; i++) {
//       if (x % i === 0 && y % i === 0) {
//         return false; // so just identify the smallest number. Then start the counter. test to see if there is a single shared cofactor above 2. If there is, return false. If not, return true. This is a nice method because it doesn't have to calculate all the factors.
//       }
//     }
//     return true;
//   }