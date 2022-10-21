//PREP

//Parameters: zero to 1 million. examine the numbers as binary, with leading zeros cut off.
//
//Return: return a number if it belongs to the baum-sweet sequence. In a generator function a "yield" is used rather than return. 
//Examples: 0001 belongs to the sequence but with leading zeros removed it is just 1. 
//10001 belongs (group of 3 0s)
//11001 does not (group of 2 zeros)
//11101 does belong (group of 1 zeros)
//Pseudocode:
//A for loop goes through the numbers 0 to 1 million
//it sends the next baum sweet each time it is run - it doesn't just dump them all out. hence being a generator
// 

function* baumSweet() {
  while (i<10){
    i++;
    yield i;
  } 
}

function* generator() {
  while (b<10){
    yield b.toString(2);
    b++;
  }
}

// console.log(generator());

// console.log(generator());

function convertToBinary(x) {
  let bin = 0;
  let rem;
  let i = 1;
  let step = 1;

  while (x != 0) {
      rem = x % 2;
      console.log(
          `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
      );
      x = parseInt(x / 2);
      bin = bin + rem * i;
      i = i * 10;
  }
  return bin;
}

// take input
//let number = prompt('Enter a decimal number: ');

//convertToBinary(number);