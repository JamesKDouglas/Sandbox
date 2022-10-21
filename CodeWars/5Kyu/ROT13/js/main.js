// p the message is a string. It can have special characters, but those characters are not altered.
// return a string in the rot13 cypher. That is, letters are changed to be those appearing 13 further along in the alphabet (wrap around for ones near the end)
// example: Grfg" == rot13("Test")
// pseudocode:
// Break the string up into an array.
// Change the letters into ascii numbers. A is 65 (Z is 90). a is 97 (z is 123).
// Add 13 to the number. I do have to figure out how to wrap around. Use charCodeAt for number to letter. codePointAt for letter to number.
// wrap around: if the ascii code is over 77 but below 90, subtract the value from 90 then take that and add it to 65.
// if the ascii code is over 109 but below 123 then subtract the value from 123 and add the result to 109.
// If the ascii code is anything else, leave it alone because it's a special character.
//join and return

function rot13(message){
    let chars = message.split('');

    let numChars = [];
    for (let i = 0;i<chars.length;i++){
        // console.log(chars[i]);
        
        numChars[i] = chars[i].codePointAt(0);
        console.log(numChars[i]);
    }

    let shiftVal;
    let shiftedNumChars = [...numChars];//Shallow copy 
    console.log(shiftedNumChars);
    // console.log(numChars);
    for (let i = 0;i<numChars.length;i++){
        // console.log(`i is: ${i} looking at the character ${chars[i]} with code ${numChars[i]}`)
        shiftVal = 13;
        if (numChars[i] > 77 && numChars[i] < 91){//capital letter near the end of alphabet so we need to wrap.
            shiftVal = 13-(91-numChars[i]);
            shiftedNumChars[i] = 65+shiftVal;
            // console.log(`wrapping uppercase. shifted ${numChars[i]} to ${shiftedNumChars[i]}`);
            continue;
        }
        if (numChars[i] > 109 && numChars[i] < 123){//lowercase letter near the end of alphabet so we need to wrap.
            // console.log(numChars[i]);
            shiftVal = 13-(123-numChars[i]);
            // console.log(numChars[i]);
            shiftedNumChars[i] = 97+shiftVal;
            // console.log(numChars[i]);
            console.log(`wrapping lowercase. shifted ${numChars[i]} to ${shiftedNumChars[i]}`);
            continue;
        }
        if (numChars[i] >= 65 && numChars[i] <= 90 || numChars[i] >= 97 && numChars[i] <= 122){//not a special character, and no wrapping is required or we would have broken out of the loop already.
            // console.log(`no wrapping`);
            shiftedNumChars[i] += shiftVal;
            // console.log(`shifted ${numChars[i]} to ${shiftedNumChars[i]}`);
            continue;
        }
        // console.log(`special character, skip it`);
    }
    //now replace the numbers with letters again.
    // console.log(shiftedNumChars);
    for (let i = 0;i<chars.length;i++){
        console.log(String.fromCharCode(shiftedNumChars[i]));
        chars[i] = String.fromCharCode(shiftedNumChars[i]);
    }
    // console.log(chars.join(``));
    return chars.join('');
  }

s = '@[`{';
console.log(rot13(s));

//Well, this does work and does not use regex but it is very long and fiddly in the sense that there are many ascii code numbers appearing. I could refactor to have an aValue, AValue, zValue, ZValue to make things more clear.
// Shorter examples mostly use regex.