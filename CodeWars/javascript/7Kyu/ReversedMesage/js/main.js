//The input i a tring. It can include special character

//Reverse it, then capitalize the first letter of the newly reverse words.
//unless the reversed word has punctuation or a symbol at the end, then leave it

//ex: 
//
// 'This is an example of a Reversed Message!' => '!egassem Desrever A Fo Elpmaxe Na Si Siht'


//More examples? No
//special cases/edge cases? empty? 
//timeouts not expected
function reverseMessage(str) {
  let words = str.toLowerCase().split(" ");
  words = words.map(a=>a.split("").reverse().join(""));
  
  for (let i=0;i<words.length;i++){
    words[i] = `${words[i][0].toUpperCase()}${words[i].substring(1,)}`;
    console.log(words[i]);
  }
  
  
  return words.reverse().join(" ");
}

console.log(reverseMessage('This is an example of a Reversed Message!'),'!egassem Desrever A Fo Elpmaxe Na Si Siht');
