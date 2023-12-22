//input will be a string.

//The goal is to see if the string contains every letter of the alphabet
//at least once.

//Return true if it does, false if not.

//"The quick brown fox jumps over the lazy dog" => true
//"The quick brown fox jumps over the lazy do" => false
//"the quick brown fox jumps over the lazy dog.45" => true

//Ignore punctuation and numbers.

//non-string inputs? Not expected.
//mandarin character? Not expected.
//large strings? Not really.
//timeouts? nothing much.

function isPangram(string){
  //cleanup:
  //Convert to lowercase.
  //Remove non-letter characters.
  //do that with an array, check each letter, splice it out if it's not in
  //the ascii range charCodeAt.
  string = string.toLowerCase();
  let stringArr = string.split("");
  
//   console.log(stringArr);
//   console.log(stringArr[0].charCodeAt(0));
//   console.log("a".charCodeAt(0));
//   let charcode = "z".charCodeAt(0);
//   console.log(typeof(charcode));
              
  for (let i=0;i<stringArr.length;i++){
    if (stringArr[i].charCodeAt(0)>="a".charCodeAt(0) && stringArr[i].charCodeAt(0)<="z".charCodeAt(0)){
      continue;
    } else {
      stringArr.splice(i,1);
      i--;
    }
  }
//   console.log(stringArr);
  
  //Then look for unique characters.
  //So that means declare an object,
  //Look at each character using a for loop, see if it's in the object. If not, add it.
  //If it is, just skip (continue).
  let charTrack = {};
  for (let i=0;i<stringArr.length;i++){
    if (charTrack[stringArr[i]]){
      continue;
    } else {
      charTrack[stringArr[i]] = 1;
    }
  }
  
  //At the end, test to see if there are 26 characters in the object.
  if (Object.keys(charTrack).length === 26){
    return true;
  } else {
    return false;
  }
  //If so, return true. If not, return false.
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"), true);
console.log(isPangram("The quick brown fox jumps over the lazy do"), false);
console.log(isPangram("the quick brown fox jumps over the lazy dog.45"), true);
