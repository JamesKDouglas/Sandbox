// parameters: Input a string of words. No special characters are used.
// return: A new string of words in which every word equal to or over 5 characters is reversed
// example:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 

// pseudocode:
//using arrays it's easy:
//Split the string into a words array with split(' '). Turn the words into arrays with split("") and map. Loop through the array and look for words over 5 letters long. If you find one reverse it.

//However, we are supposed to practice with string methods.

// The loop:
//Record initial position. 

//inner loop: Go through the string looking for spaces and counting characters. If you get to five character or over set a flag. When you get to the next space if the flag is set then  
// Record the length of the word. 
// Take the word out and put it into a variable. Delete the word from the string.
//Now reverse the word with a reverse function: Make a new string by removing the start character and adding it repeatedly to the start of a new string.
//Reinsert the reversed word.
//carry on to the next word.

let s = "Hey fellow warriors";

console.log(spinWords(s));

function spinWords(string){
    function reverseWord(word){
        let revWord = "";
        for (let i=0;i<word.length;i++){
            revWord = revWord.concat(word.charAt(word.length-i-1));
        }
        return revWord;
    }

    let wordSize = 0;
    let revWord = "";
    let newString = "";
    //i is the start index for the word we're looking at.
    for (let i=0;i<string.length;i++){
        // console.log(`begin looking at a new word at position ${i}`)
        for (let j=i;j<string.length+1;j++){
            if (string.charAt(j) == " " && (j-i)>=5){
                // console.log(`found  a word at or over 5 characters! ${string.substring(i, j)}`)
                revWord = reverseWord(string.substring(i, j));
                newString = newString.concat(revWord+" ");
                i=j;
                // console.log(`i is now ${i} newString is now: ${newString}`);
                break;
            } else if (string.charAt(j) == " "){
                // console.log(`found  a word under 5 characters! ${string.substring(i, j)}`)
                newString = newString.concat(string.substring(i, j+1));
                i=j;
                // console.log(`i is now ${i} newString is now: ${newString}`);
                break;
            } else if ((j)==string.length){
                // console.log(`found terminal word! ${string.substring(i, j)}`)
                if ((j-i)<5){
                    newString = newString.concat(string.substring(i, j)); //for the very last word we don't put a space.
                } else if ((j-i)>=5){
                    revWord = reverseWord(string.substring(i, j));
                    newString = newString.concat(revWord);
                }
                // console.log(`i is now ${i} newString is now: ${newString}`);
                i=j;
                break;
            } else {
                // console.log(`Haven't reached the end of a word, keep going! wordsize: ${j-i}`);
            };
        }
    }
    return newString.trim();
}

//Using an array is much easier! Katzoo shows, 
// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }