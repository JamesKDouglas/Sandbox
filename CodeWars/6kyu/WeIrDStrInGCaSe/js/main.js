//input will be a string. No special characters.

//the goal is to return the same string with 
//every even character in upper case, and 
//every odd character in lowercase.

// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"
// "This" => ThIs

//empty string? No special characters.
//numbers? Not expected.
//timeouts? Not an issue.

function toWeirdCase(string){
  //split the string into words in an array.
  //then split the words into arrays 
  //(2d array)
  
  let arr = [];
  
  arr = string.split(" ").map(a=>a.toLowerCase().split(""));
  
  //Now, I'll make a new string.
  //Go through each word, change the capitalization and add it to a 
  //new array
  let newWords = [];
  let word = [];
  for (let i=0;i<arr.length;i++){
    for (let j=0;j<arr[i].length;j++){
      if (j%2==0){
        word.push(arr[i][j].toUpperCase())
      } else {
        word.push(arr[i][j]);
      }
    }
    newWords.push(word);
    word = [];
  }
  return newWords.map(a=>a.join("")).flat().join(" ");

}

console.log(toWeirdCase("String"), "StRiNg");
console.log(toWeirdCase("Weird string case"), "WeIrD StRiNg CaSe");
console.log(toWeirdCase("This"), "ThIs");

