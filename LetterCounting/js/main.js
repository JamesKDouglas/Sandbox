function countLetters(str) {
  let array = str.split("");
  let countLetters = {};
  
  for (c in str){
    if (!countLetters[str[c]]){
      countLetters[str[c]] = 1;
    } else {
      countLetters[str[c]]++;
    }
  }
  return countLetters;

  // OR
  // for (i of string){
    // console.log(i);
    // if (!countLetters[i]){
      // countLetters[i] = 1;
    // } else {
           // countLetters[i]++;
    // }
  // }
}

  console.log(countLetters("The quick brown fox jumps over the lazy doggo."));