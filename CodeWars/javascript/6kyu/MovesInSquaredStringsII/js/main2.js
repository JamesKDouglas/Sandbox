

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
    let newText = text;

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

    //reflect in the vertical central axis.
    for (let i=0;i<sqrLength;i++){
        lineStartAddress = i*sqrLength;
        if (i>0) lineStartAddress+=i;//to skip the |
        console.log(`examining line ${i}, so address ${lineStartAddress}`)
        for (let j=0;j<Math.ceil(sqrLength/2);j++){

            firstLetter = text[lineStartAddress+j];
            secondLetter = text[lineStartAddress + (sqrLength - j-1)];
            console.log(`looking at letters first: ${firstLetter} second: ${secondLetter}`);

            newText = newText.substring(0, lineStartAddress+j) + secondLetter + newText.substring(lineStartAddress+j+1);
            console.log(`newText after adding first letter ${newText}`);

            console.log(`first letter, first half of substring: ${newText.substring(0, lineStartAddress+j)}`);
            console.log(`first letter, first second half of substring: ${newText.substring(lineStartAddress+sqrLength-j)}`);

            newText = newText.substring(0, lineStartAddress + (sqrLength - j-1)) + firstLetter + newText.substring(lineStartAddress+sqrLength-j);
            console.log(`newText after adding second letter ${newText}`);
        }
    }

    //Reflect in the horizontal axis.
    //Load the lines on opposite sides of the axis.
    //swap them. The complex part is figuring out the indexes.
//  abcd|
//  efgh|
//  ijkl|
//  mnop
// needs to become
//  mnop|
//  
    let lineOne, lineTwo = "";
    let totalLength = newText.length;
    for (let line=0;line<=sqrLength;line++){
        //How do I calculate the character address, knowing the line address and the square magnitude? Each line has a start and end address.
        //The first line start is 0. The first line end is 3.
        //The second line start is 5. The second line end is 9.
        //so that's line start line*sqrLength and line end of (line+1)*sqrLength-1. Since substr is exclusive at the end take away the -1.

        //For the line on the opposite side of the axis. Total length is 19.
        // The first character is 15. The last is 18. Length is 19. This is the 4th line (line index 3 but the main line variable is 0).
        // The first character is 10. The last is 13.
        // so that's a start of sqrLength*line and an end of totalLength - 1 + sqrLength*(line-1). Again, take the -1 out.

        //fuck strings are difficult to use. The addressing is hard to figure out, just very complex.

        lineOne = newText.substring(line*sqrLength, (line+1)*sqrLength);

        lineTwo = newText.substring(totalLength - 1 + sqrLength*line, totalLength+sqrLength*(line-1));




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
