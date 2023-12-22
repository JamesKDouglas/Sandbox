//input as a string.
//remove the lower case vowels. But not uppercase ones.
//replace method.

//job size/timeout? Don't worry about it.
//punctuation, escape characters?

//do without regex.

//return a string. 

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function shortcut (string) {
    //for loop
    //compare against a map.
    //so that's a nested for loop.
    //operate directly on the string using splice
    //return the string.
    let vowels = ["a","e","i","o","u"];
    
    string = string.split("");
    for(let i=0;i<string.length;i++){
      for(let j=0;j<vowels.length;j++){
        if (string[i] === vowels[j]){
          //found a vowel!
          string.splice(i,1);
          //for multiple vowels in a row we have to modify i here
          i--;
        }
      }
    }
    return string.join("");
  }
  
  console.log(shortcut("hello"), "hll");
  console.log(shortcut("codewars"), "cdwrs");
  console.log(shortcut("goodbye"), "gdby");
  console.log(shortcut("HELLO"), "HELLO");