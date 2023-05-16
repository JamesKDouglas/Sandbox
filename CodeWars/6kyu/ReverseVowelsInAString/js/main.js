
// input will be a string.

//The goal is to reverse the positions of only the vowels.

//ex: hello => holle

//Y is considered a consonant. Preserve case.
//return a string.

//Suppose there are no vowels? Well then just return the same thing.
//special characters like e with an accent? English only.
//job size? only small modest jobs.


function reverseVowels(str) {
    //Mark the position of the vowels
    let vowelPos = [];
    let strArr = str.split("");
    for (let i=0;i<strArr.length;i++){
      if (isVowel(strArr[i])){
        vowelPos.push(i);
      }
    }
    function isVowel(letter){
      if (letter === "a" || letter === "A" || letter === "e" || letter === "E" ||
         letter === "i" ||letter === "I" ||letter === "o" ||letter === "O" ||
         letter === "u" ||letter === "U"){
          return true;
        } else return false;
    }
    
    //Filter out the vowels
    let vowelsArr = strArr.filter(isVowel);
    
    //Reverse the vowels
    vowelsArr = vowelsArr.reverse();
    //Splice them back in
    for (let i=0;i<vowelsArr.length;i++){
      //Go to the first position, delete the current vowel, and replace it with the reversed one.
      strArr.splice(vowelPos[i],1,vowelsArr[i]);
    }
    return strArr.join("");
  }
  
  console.log(reverseVowels("Hello!"), "Holle!");
  console.log(reverseVowels("Tomatoes"), "Temotaos");
  console.log(reverseVowels("Reverse Vowels In A String"), "RivArsI Vewols en e Streng");
  
  
  
  
  