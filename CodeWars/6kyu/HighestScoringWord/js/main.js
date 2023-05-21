//Input: string of 'words' aka character series. Separated by spaces.

//"The quick brown fox jumps over the lazy dog."

//Score the words based on the sum of the order of the letters in the alphabet.
//Report the highest scoring word.

//example of scoring:
//abad is 8. a is 1, b is 2 etc.

//example of a string and output:
//man i need a taxi up to ubud => taxi
//what time are we climbing up the volcano => volcano
//take me to semynak => semynak

//Always lower case. 

//Edge cases? Special characters or punctuation? Nope. 
//If there are words with the same score, report the earliest (leftmost).
//two spaces? No, we don't expect that.
//empty string? Don't worry about it - no invalid inputs.

//Job size: modest. Timeouts: nope, none.

function high(x){
    //get these words into an array. Use split(' ').
    //Go through these words and build a score array. 
    //The index will just match the word array.
    // ex: "take" has index 0 in the word array and an associated score in the score array.
    
    //To build the score array;
    //Go through each word: 
    //Select the word with a for loop (for of )
    //Nest another for loop to create a score for each word.
    //Create that score just using str.charCodeAt(0). So I'm using ascii codes.
    //and a ascii code?
    
    //Find the max value. So I'll use Math.max(...scoreArr)
    //Look up the index of the max using indexOf();
    
    //return the word with the matching index.
    
    let words = x.split(" ");
    let scoreArr = [];
    let score = 0;
    
    for (word of words){
      for (letter of word){
        score += letter.charCodeAt(0) - 96; //Relative scores would also be fine but I'll use what the example uses
      }
      scoreArr.push(score);
      score = 0;
    }
  //   console.log(scoreArr)
    let maxScore = Math.max(...scoreArr);
  //   console.log(maxScore)
    let maxIndex = scoreArr.indexOf(maxScore);
    
  //   console.log(maxIndex);
    
    return words[maxIndex];
    
  }
  
  console.log(high('man i need a taxi up to ubud'), 'taxi');
  console.log(high('what time are we climbing up the volcano'), 'volcano');
  console.log(high('take me to semynak'), 'semynak');``