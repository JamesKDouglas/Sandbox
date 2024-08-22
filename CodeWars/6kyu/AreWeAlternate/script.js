//input: a string. No fancy characters.
//find out if the string has alternating consonants and vowels throughout.
//return true or false.

//job size/timeout: None except 12000ms timeout
//edge cases: empty string? "ama zon"? Do spaces count? punctuation? None will occur.


function isAlt(word) {
    //Just go through the letters and compare the first to the second.
    //vowel/consant should get a "pass" somehow
    //vowel is -1
    //consonant +1
    //Look at a pair. multiply the values.
    //If you get 1 then return false
    //If you get -1 (both exist in the pair) then carry on.
    
    let vowels = ["a","e","i","o","u"];
    let letter1 = "";
    let letter2 = "";
    let score1 = 0;
    let score2 = 0;
    let pass = false;
    
    for (let i=0;i<word.length;i++){
      letter1 = word[i];
      letter2 = word[i+1];
      
      for (let j=0;j<vowels.length;j++){
        console.log("letter1", letter1);
        console.log("letter2", letter2);
        if (vowels[j] === letter1){
          score1 = -1;
          console.log("first letter is a vowel");
          break;
        } else {
          console.log("first letter consonant")
          score1 = 1;
        }
        
        if (vowels[j] === letter2){
          console.log("second letter is a vowel");
          score2 = -1;
          break;
        } else {
          console.log("second letter consonant")
          score2 = 1;
        }
        if (score2*score1 === -1){
          pass = true;
        } else {
          pass = false;
          return pass;
        }
      }
      
      return pass;
    }
  }
  
  console.log(isAlt("amazon"), true);
  console.log(isAlt("apple"), false);
  console.log(isAlt("banana"), true);

  //Ugh, not done yet!