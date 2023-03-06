//input: string

//goal: make that string into a band name.

//we'll do it like this:
//if the string does not end and also start with a the same letter
// just capitalize the input
//string and return it as "The X" where X is the input string.

//We can assume the input is indeed a noun

//If the input starts and ends with the same letter we'll do something else:
//Duplicate and concatenate the input, subtracting the first letter upon concatenation

//ex:
//dolphin => The Dolphin
//alaska => Alaskalaska
//tart => Tartart

//edge or special case? Timeouts?
//"" ? nope.
//no expected timeouts

function bandNameGenerator(str) {
    //make a conditional to see if we have a 'same letter' case
    //If so, compile the tring
    //If not, compile a different string.
    let newStr = "";
    if(str[0] === str[str.length-1]){
      //first character is equal to the last
      newStr = `${str[0].toUpperCase()}${str.substring(1,str.length)}${str.substring(1)}`
      return newStr;
    } else {
      return `The ${str[0].toUpperCase()}${str.substring(1)}`
    }
  }
  
  console.log(bandNameGenerator("dolphin"), "The Dolphin");
  console.log(bandNameGenerator("alaska"), "Alaskalaska");
  console.log(bandNameGenerator("tart"), "Tartart");
  console.log(bandNameGenerator("six"), "The Six");
  
  