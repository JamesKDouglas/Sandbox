// parameters: Input a positive integer.
// return: An ascii drawing which is a square with dimensions of the integer, with + as the character that forms the square.
// example: n=3
// ***
// ***
// ***
// pseudocode:
// Nest two for loops. Generate the line, append a \n then next line.

let n = 5;
function generateShape(integer){
    let str = "";
    let plus = "+";
    for (let i=0;i<integer;i++){        
        str += plus.repeat(integer);
        str = str.concat('\n');
    }
  //cut off the final \n
    str = str.slice(0,-1);
    return str;
}
console.log(generateShape(n));