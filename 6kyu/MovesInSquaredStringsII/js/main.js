// parameters: A string of n lines, each n characters long, gets put in. \n are used for delineating lines (not a literal).
// return: A sort of ascii drawing of the array. This is actually 2 functions. Return the string as a similarly formatted square with an operation or series of operations performed.
// One operation is just rotation 90 degrees clockwise. 
// Another is the initial string with 4 periods inserted before the newline. Then a concatenation of the original array reflecte in the vertical and horizontal planes (clockwise rotation 180 degrees) with 4 periods in front of the line. Then on the end of each line insert are 4 periods. This one has some nickname "selfie". 
// example of the selfie and Rot:
// s = "abcd\nefgh\nijkl\nmnop" --> 
// "abcd....\n
//  efgh....\n
//  ijkl....\n
//  mnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
//
// "abcd....\n
//  efgh....\n
//  ijkl....\n
//  mnop....\n
//  ....ponm\n
//  ....lkji\n
//  ....hgfe\n
//  ....dcba"
// pseudocode:

//We're on string methods today even though arrays may be easier here.
//So construct a new string, deconstructing the old 
// Find location of the first \n. Return a substring of the line, then cut that piece off.
// Load the first string. 

let s = "abcd\nefgh\nijkl\nmnop";

function rot(strng) {
    //Backlashes are hard to handle so replace with |
    let text = strng.replace(/\n/g, '|');
    let sqrLength;
    let newText = "";

    //strings are always a square so just get the dimensons. It would also be possible to just count the total characters and calculate.
    for (let i=0;i<strng.length;i++){
        if (text[i] == "|") {
            sqrLength = i;
            break;
        }
    }
    console.log(text);
    //trying to do this without arrays!
    let firstLetter, secondLetter = "";
    let address;
    for (let i=0;i<sqrLength;i++){
        lineStartAddress = i*sqrLength;
        if (i>0) lineStartAddress+=i;//to skip the |
        console.log(`examining line ${i}, so address ${lineStartAddress}`)
        for (let j=0;j<Math.ceil(sqrLength/2);j++){

            firstLetter = text[lineStartAddress+j];
            secondLetter = text[lineStartAddress + (sqrLength - j-1)];
            console.log(`looking at letters first: ${firstLetter} second: ${secondLetter}`);

            newText = text.substring(0, lineStartAddress+j) + secondLetter + text.substring(lineStartAddress+j+1);
            console.log(`newText after adding first letter ${newText}`);

            console.log(`first half of substring: ${newText.substring(0, lineStartAddress + (sqrLength - j-1))}`);
            console.log(`second half of substring: ${newText.substring(lineStartAddress+sqrLength-j)}`);
            newText = newText.substring(0, lineStartAddress + (sqrLength - j-1)) + firstLetter + newText.substring(lineStartAddress+sqrLength-j);
            console.log(`newText after adding second letter ${newText}`);
        }
    }
    console.log(`text ${newText}`);
    
}

function selfieAndRot(strng) {
    // your code
}

function oper(fct, s) {
    // your code
}

console.log(rot(s));
