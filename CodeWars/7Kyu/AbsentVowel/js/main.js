//input of a string. The string will contain every vowel except for 1 chosen vowel.
//return the index (number) of the associated missing vowel. So, not the actual value but return an integer according to:
//AEIOU, 0 to 4.

//How long will the string be? Are we worried about quadradic time and timeouts? Just a scentence.

//return an integer as a number type, not "4"

//"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

//no need for 'string validation'. Don't need to "worry about" capital letters. Does this mean that all missing vowels are expected to be lowercase?  Default to some sort of simple situation in which case doesn't matter. To me that means we'll examine the string for lowercase vowels.

//any other edge cases? Sounds like we expect valid input every time - so not 'funny business' like empty strings or just numbers or 2 missing vowels. 
//Y just doesn't count as a vowel we don't consider it. No odd data types like an array of strings. 

function absentVowel(x){
    //put the string into an array.
    let arr = x.split("");
    
    //set up an array with the vowels. Put them in the right order with expected indices.
    let vowels = ["a","e","i","o","u"];
    
    //For loop that goes through the string and filters out each vowel one at a time.
    for(let i=0;i<vowels.length;i++){  
    //Well use filter.
    //Test that filtered array to see if it is the same size as the original. If it is we found the missing character.
      if(arr.filter(el=>el!==vowels[i]).length === arr.length){
    //so return the index of the missing character.
        return i;
      }
    }
  }
  console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
  
  console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);
  
  console.log(absentVowel("Bob Smth sent us sx neatly arranged range bcycles"), 2);
  