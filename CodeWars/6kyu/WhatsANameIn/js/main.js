//Two strings as inputs.

//The goal is to see if the second one is embedded in the first.
//The characters must be in order but don't have to be adjacent.

//Return true or false. - true if the second string is present in the first.
//False if it isn't - wrong order, incomplete, etc.

//Case insensitive.

//edge cases => second string is just "". return true.
//job size/timeout? Modest job size. 
//No invalid inputs expect.

function nameInStr(str, name){
  
  //make everything lowercase. 
  
  //early return - ""
  
  //make str an array.
  //Then make a for loop:
  //Take each character in name. Use array.prototype.indexOf()
  //delete the letter when it's found. 
  //if it isn't found return false. 
  //go to the next letter.
  
  if (name === "") return true;
  
  str = str.toLowerCase().split("");
  name = name.toLowerCase();
  
  for (let i=0;i<name.length;i++){
    console.log("looking for ", name.charAt(i), "it is located at: ", str.indexOf(name.charAt(i)));
    console.log("str: ", str);
    if (str.indexOf(name.charAt(i))!==-1){
      str = str.slice(str.indexOf(name.charAt(i))+1,str.length);
    } else {
      return false;
    }
  }
  return true;
}

// console.log(nameInStr('Across the rivers', ''), true)
// console.log(nameInStr('Across the rivers', 'chris'), true)
// console.log(nameInStr('Arcoss te hives', 'chris'), false)
// console.log(nameInStr('Next to a lake', 'chris'), false)
// console.log(nameInStr('Under a sea', 'chris'), false)

console.log(nameInStr('eowtmebohi a yt tl ln mk hamv  yahy xaaetmtij qwmra  ha aveownlazklhdiejyltiade', 'Ashley'), true);