// parameters: The first input is a string with missing letters. Missing letters are marked with an asterisk.
//The second input is a list of the missing letters, with the correct order and case.

// return: The restored string. 
// example:
//uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"

// pseudocode:
// Build a completely new string.
// Use for loop and replace to go through the string repeatedly, looking for an asterisk. When a character is replaced keep count. This will be the index for the next character to put in.

//We'll extract the character with charAt.

let str = "*h*s *s v*ry *tr*ng*";
let dis = "Tiiesae";

function uncensor(infected, discovered) {
    let resString = infected;
    for(let i=0;i<discovered.length;i++){
        // console.log(resString);
        // console.log(discovered);
        resString = resString.replace("*", discovered.charAt(i));
    }
    return resString;
}
console.log(uncensor(str, dis));
