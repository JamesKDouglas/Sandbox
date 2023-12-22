//input will be a string. How long? Word length or so.

//Remove the non-letter characters. Then reverse the string.

//Return the reversed string.

//krishan => nahsirk
//ultr53o?n => nortlu
//No empty string exception, no timeouts, and no strange characters.

function reverseLetter(str) {
    //Go through the string and check each character. (for loop)
    //(make the character uppercase)
    //If the character code is within the ascii range, add it to a new string.
    //return the new string
    let newStr = "";
    let char = "";
    
    for (let i=0;i<str.length;i++){
      //A is 65. 
      char = str[i].toUpperCase();
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        newStr += str[i];
      }
    }
    return newStr.split("").reverse().join("");
  }
  
  console.log(reverseLetter("krishan"), "nahsirk");
  console.log(reverseLetter("ultr53o?n"), "nortlu");