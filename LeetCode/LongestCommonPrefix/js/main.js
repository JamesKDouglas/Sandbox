/**
 * @param {string[]} strs
 * @return {string}
 */

//input of strings. up to 200 strings. each string up to 200 characters.
//only lowercase.

//output is a string of the longest common prefix.

//["flower","flow","flight"] => "fl"
//["dog","racecar","car"] => ""
//["","",""] => ""

var longestCommonPrefix = function(strs) {
    //early return: in case there are any empty strings.
    for (let i of strs){
        if (i===""){
            return "";
        }
    }
    
    //then, the main loop:
    //Do:while.
    let letter = "";
    let position = 0;
    let mismatch = false;
    do {
        // console.log('position begin', position)
        letter = strs[0][position];
        // console.log()
        for (let i=0;i<strs.length;i++){
            if (letter !== strs[i][position]){
                mismatch = true;
                break;
            }           
        }
        position++;
        // console.log('position after increment',position)
    }while(!mismatch)
    // console.log(position-1);
    return strs[0].substring(0,position-1);
    //Take the first character of the first element. 
    //Compare it to the first character of all the other elements.
    //If they match, then look at a string composed of the first two characters. Carry on like that until there is a non-match.
};

console.log(longestCommonPrefix(["flower","flow","flight"]),"fl");
console.log(longestCommonPrefix(["dog","racecar","car"]),"");
console.log(longestCommonPrefix(["","",""]), "");