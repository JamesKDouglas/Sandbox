//input will be a number. Integers but not bigInts. Expect positive integers.

//the goal is to multiply that number by 8 if it's even, 9 otherwise.

//return the product.

//job size? timeouts?
//edge cases? "9" like, type coersion? "five"? No not expected.
//null? Not expected.

function simpleMultiplication(number) {
    //make an if statement or ternary to use % to see if the number is odd or even
    //return the product with 8 or 9 accordingly
  
    return (number%2===0)?number*8:number*9;
}

console.log(simpleMultiplication(2), 16);
console.log(simpleMultiplication(5), 45);
console.log(simpleMultiplication(10), 80);
