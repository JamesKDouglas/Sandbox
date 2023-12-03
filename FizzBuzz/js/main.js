// input will be an integer

// the goal is to decide if the number is divisible by 5, 3 or both. If it 
//is divisible by 3 print out Fizz. If 5, Buzz. If both Fizz Buzz. Return a string.

//if neither then print out nothing.

//3=>Fizz
//15 => Fizz Buzz
//50 => Buzz

//invalid inputs? edge cases
//0 =>Fizz Buzz
//decimals? not expected.
//non-integers? none. All valid input.
//BigInts? No. 

function fizzBuzz(n){
  //Use modulo.
  //is the number divisible by both?
  //or just one?
  if (n%3 ===0 && n%5 ===0){
    return "Fizz Buzz";
  } else if (n%3 ===0){
    return "Fizz";
  } else if (n%5 ===0){
    return "Buzz";
  }
}

console.log(fizzBuzz(3), "Fizz");
console.log(fizzBuzz(15), "Fizz Buzz");
console.log(fizzBuzz(50), "Buzz");