//this is the top codewars solution lets mess with it
function defineSuit(card) {
//make an object with literal notation. The keys do apparently need to be inside quotation marks (why?)
    const s = {
      c: "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    //charAt(card.length-1) retrieves the last character from the string
    //then we look up the value of the property by using the name.
    //we cannot use dot notation to do this (why not?).
    return s.c;
    //return s[card.charAt(card.length - 1)];
  }


console.log(defineSuit('Q♠'))