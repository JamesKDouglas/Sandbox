//input will be a string of . and -.
//It represents a morse code.
//decode the morse code into capital letter message.
//(review morse code rules - 1 space between letters, 3 between words, some special characters)

//There is a function (dictionary) provided MORSE_CODE['.--']. It returns a string for a character.

//all inputs will be valid.
//special characters are in the dictionary.
//timeouts. nothing huge. 10 000 ms timeouts.
//""=>"" no error just return empty for empty.

decodeMorse = function(morseCode){
  //Dictionary takes letters or special combos.
  //First, split the string into words.
  //Then into letter or special combos
  
  //Then we'll convert that array to a string. Decode one by one.
  //lets use a 2D array.
  
  //first, make that 2d array. Split the words. Then split that into letters.
  // ex .... . -.--   .--- ..- -.. . => [".... . -.--",".--- ..- -.. ."] => 
  //[["....",".","-.--"],[".---","..-","-..","."]]
  
  let morseArr = morseCode.split("   ").map(el=>el.split(" "));
  
  //Then decode each letter.
  let letterArr = morseArr.map(el=>el.map(letter => MORSE_CODE[letter]));
  
  //ex [["H","E","Y"], ["J","U","D","E"]];
  
  //Then combine
  let str = letterArr.map(el => el.join("")).join(" ");
  
  return str;
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
console.log(decodeMorse('...---...'), 'SOS');
console.log(decodeMorse('.... . -.--'), 'HEY');
