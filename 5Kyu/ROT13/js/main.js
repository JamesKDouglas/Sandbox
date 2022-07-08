// p the message is a string. It can have special characters, but those characters are not altered.
// return a string in the rot13 cypher. That is, letters are changed to be those appearing 13 further along in the alphabet (wrap around for ones near the end)
// example: Grfg" == rot13("Test")
// pseudocode:
// Break the string up into an array.
// Change the letters into ascii numbers. A is 65 (Z is 90). a is 97.
// Add 13 to the number. I do have to figure out how to wrap around. Use charCodeAt for number to letter. codePointAt for letter to number.
// wrap around: if the ascii code is over 77 but below 90, subtract the value from 90 then take that and add it to 65.
// if the ascii code is over 109 but below 123 then subtract the value from 123 and add the result to 109.
// If the ascii code is anything else, leave it alone because it's a special character.
//join and return

function rot13(message){
    let chars = message.split('');
    let numChars = [];
    for (let i = 0;i<chars.length-1;i++){
        numChars[i] = codePointAt(chars[i]);
    }
    let shiftVal;
    let shiftedNumChars = [];
    for (let i = 0;i<numChars.length-1;i++){
        shiftVal = 13;
        if (numChars[i] > 77 && numChars[i] < 90){//capital letter near the end of alphabet so we need to wrap.
            shiftVal = 90-numChars[i];
            shiftedNumChars[i] = 65+shiftVal;
        }
        if (numChars[i] > 77 && numChars[i] < 90){//lowercase letter near the end of alphabet so we need to wrap.
            shiftVal = 90-numChars[i];
            shiftedNumChars[i] = 77+shiftVal;
        }
    }
  }