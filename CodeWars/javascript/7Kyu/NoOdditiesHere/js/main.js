//The input will be an array of integers.

//return the values that are "not odd". That is even or zero?

//Return them in the same order they were passed.

//timeouts? edge cases? How many elements are we thinking about? BigInts?
//No timeouts. 

function noOdds( values ){
    // Return all non-odd values
    console.log(values);
    let evens = [];
    values.forEach(el => {if(el%2===0){evens.push(el)}});
    console.log(evens);
    return evens;
  }