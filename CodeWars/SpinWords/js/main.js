function spinWords(string){
    //Split the string into words.
    let wordArr = string.split(' ');
    //Examine the words one at a time.
    for (i=0;i<wordArr.length;i++){
       //Test to see if the word is over 5 characters
      if (wordArr[i].length >= 5){
        wordArr[i] = wordArr[i].split('').reverse().join('');//if it is, reverse it.
      }
    }
    
    //Join all the words back together.
    return wordArr.join(' ');
  }