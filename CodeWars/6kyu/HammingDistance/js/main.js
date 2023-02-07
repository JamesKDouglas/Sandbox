//The input will be 2 strings. 
//The strings are assumed to be of equal length.

//Try to find how many places these strings do not match.

//And return the number of characters that don't match.

//ex:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2

//What is there is a total mismatch?

// a = "aaaaaaaa"
// b = "Expresso"
// Result: ? According to the initial index, none of the characters match.
//But according to a description of the last, 1 character matches.

//Consider from the beginning.

function hamming(a,b) {
    //just use a for loop.
    //Go through each character, see if it matches.
    //if not, add to the counter.
    let counter = 0;
    for(let i=0;i<a.length;i++){
      if (a[i]!==b[i]) counter++;
    }
    return counter;
  }
  
  console.log(hamming("I like turtles","I like turkeys"), 3);
  console.log(hamming("Hello World","Hello World"), 0);
  console.log(hamming("espresso","Expresso"), 2);