// parameters: A string of n lines, each n characters long, gets put in. \n are used for delineating lines (not a literal).
// return: A sort of ascii drawing of the array. This is actually 2 functions. Return the string as a similarly formatted square with an operation or series of operations performed.
// One operation is just rotation 90 degrees clockwise. 
// Another is the initial string with 4 periods inserted before the newline. Then a concatenation of the original array reflecte in the vertical and horizontal planes (clockwise rotation 180 degrees) with 4 periods in front of the line. Then on the end of each line insert are 4 periods. This one has some nickname "selfie". 
// example of the selfie and Rot:
// s = "abcd\nefgh\nijkl\nmnop" --> 
// "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
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
    // // your code
    let line = "";
    let breaks  = [];
    // find all the line breaks
    // I can't figure a method that just retrieves them so i'll have to disassemble the string.
    return strng.match(/(?<=\n)\d[^\n]*/);

    
}

function selfieAndRot(strng) {
    // your code
}

function oper(fct, s) {
    // your code
}

console.log(rot(s));
