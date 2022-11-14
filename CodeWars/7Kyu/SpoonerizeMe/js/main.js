//string as input. 2 words separated by a space.
//uppercase lowercase and numbers.
//swap the first character of each word. 

//output a string again. 

//1 word input? should we throw an error? Expect no input like that.

//"not picking" => "pot nicking"
//"flat battery" => "blat fattery"

function spoonerize(words) {
    //split the words.
  let wordsArr = words.split(" ");
  
    //stash the two first characters.
  let firstOne = wordsArr[0].slice(0,1);
  let firstTwo = wordsArr[1].slice(0,1);
  
    //switch the two characters.
  let firstWord = firstOne + wordsArr[1].slice(1);
  let secondWord = firstTwo + wordsArr[0].slice(1);
  
    //rejoin
  let newStr = secondWord + " " + firstWord;
  
    //return
  return newStr;
}

console.log(spoonerize("not picking"), "pot nicking");
console.log(spoonerize("flat battery"), "blat fattery");