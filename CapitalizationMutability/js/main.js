function capitalizeWord(word) {
    word = word.split('');
 //  console.log(word);
    word[0] = word[0].toUpperCase();
 // console.log(word);
    word = word.join('');
   return word;
 }