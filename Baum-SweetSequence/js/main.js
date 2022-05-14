//PREP

//Parameters: zero to 1 million. examine the numbers as binary, with leading zeros cut off.
//
//Return: return a number if it belongs to the baum-sweet sequence. In a generator function a "yield" is used rather than return. 
//Examples: 0001 belongs to the sequence but with leading zeros removed it is just 1. 
//10001 belongs (group of 3 0s)
//11001 does not (group of 2 zeros)
//11101 does belong (group of 1 zeros)
//Pseudocode:

// function* baumSweet() {
//     yield 1;
//   }

function* generator(i) {
  yield i;
  yield i + 10;
  yield i + 12;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);