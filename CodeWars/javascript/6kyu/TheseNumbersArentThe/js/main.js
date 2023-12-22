//Input will be a function.
//The function compares an input to a mystery number and returns -1,0,1 if the number
//input is below, equal to or above the mystery number.

//Guess the mystery number to a precision of 0.00 002

//edge cases? Well, consider 0 and 100?? No, between.
//Timeouts? 10 000 ms for a guess.

//ex: mystery number is 6
// Compare(1); -> -1
// Compare(10); -> 1
// Compare(6); -> 0

function findNumber(compare) {
  //binomial search?
  //So that's guess 50, then depending on the feedback guess 25 or 75.
  
  //This could be recursive, of course.
  let highEnd = 100;
  let lowEnd = 0;
  
  let guess = (highEnd-lowEnd)/2;
  
  let nextGuess = 25;
  let increment = 1;
  
  while (compare(guess) !== 0){
    increment = nextGuess-guess;
    guess = nextGuess;
    while (increment>0.00002){
      if (compare(guess)===-1){
        highEnd = guess;
      } if (compare(guess) === 1){
        lowEnd = guess;
      }
      nextGuess = (highEnd-lowEnd)/2;
    }
  }
  return guess;
}

console.log(findNumber(), 6)