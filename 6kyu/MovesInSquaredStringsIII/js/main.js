// parameters: input a block of text as a string. It is a square block - as many characters on each line as lines.
// return: One of three functions are executed, managed by a higher order function:
// Reflect the block in the diagonal
// Rotate it 90 degrees
// do both
// examples:
// s = "abcd \n efgh \n ijkl \n mnop"
// oper(diag_1_sym, s) => "aeim \n bfjn \n cgko \n dhlp"
// notice how we just track the line number we're constructing and take the corresponding index character from each associated line.

// oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
// Notice how we track the line number we are contructing. Then take the correponding index character from each line counting upwards from the bottom (rather than downwards as or the diagonal tranform).

// oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
// just concatenate the diag onto the original block.

// s =  abcd\n
//      efgh\n
//      ijkl\n
//      mnop

// oper(diag_1_sym, s)
// aeim\n
// bfjn\n
// cgko\n
// dhlp

// oper(rot_90_clock, s) 
// miea\n
// njfb\n
// okgc\n
// plhd

// oper(selfie_and_diag1, s)
//  abcd|aeim\n
//  efgh|bfjn\n
//  ijkl|cgko\n
//  mnop|dhlp

// pseudocode:

let s = "abcd\nefgh\nijkl\nmnop"

function rot90Clock(strng) {
    let original = strng.split("\n");
    let newArr = new Array(original[0].length);
    for (i in original){
        newArr[i] = "";
    }
    // console.log(typeof(newArr[0]));
    let lineString = "";
    for (let i=0;i<original[0].length;i++){//i is the line we are building. So the first time this runs I want the first character from each line of original to be loaded into newArr[0];
        for (let j=0;j<original[0].length;j++){
            newArr[i] = newArr[i] + original[j].slice(i,i+1);//.concat doesn't work here not sure why. Also having problems with slice?
        }
    }

    console.log(newArr);
    return newArr;
}
function diag1Sym(strng) {
    // your code
}
function selfieAndDiag1(strng) {
    // your code
}
function oper(fct, s) {
    // your code
}
rot90Clock(s);