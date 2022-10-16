// parameters: Two strings are submitted
// return: the strings transposed and combined into a single string.
// example:
// transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d

// pseudocode:
//Find the longest string.
//store the value of the shortest and of the longest as min and max.
//Declare a new empty string.
//Use a for loop with i as the counter to go through to the extent of the longest string, building the new string into the declared empty one.
//Upon each loop take the character that is counted by i from each string. If i is over the length of the shortest string add a space instead. Add a newline after adding both letters and the space.
//return the newly built string

let str1 = "cat";
let str2 = "";
let arr = [str1,str2];

console.log(transposeTwoStrings(arr));

function transposeTwoStrings (array) {
    let newStr = "";
    let len1 = array[0].length;
    let len2 = array[1].length;
    let max = 0;
    let min = 0;

    if (len1>=len2){
        max = len1;
        min = len2;
    } else {
        max = len2;
        min = len1;
    }

    for (let i=0;i<max;i++){
        if (i<min){
            newStr = newStr.concat(array[0].charAt(i)+ " " + array[1].charAt(i) + "\n");
        } else if (len1<len2) {
            newStr = newStr.concat(" " + " " + array[1].charAt(i) + "\n");
        } else if (len2<len1) {
            console.log(`add the ${array[0].charAt(i)}`)
            newStr = newStr.concat(array[0].charAt(i) + " " + " " + "\n");
        }
    }
    newStr = newStr.substring(0, newStr.length-1);
	return newStr;
}

//     for array :
// ["cat", ""]
// : expected 'c  \na  \nt' 
//   to equal 'c  \na  \nt  '


// for array :
// ["Hello", "World"]
// : expected 'H W\ne o\nl r\nl l\no d\n' 
//   to equal 'H W\ne o\nl r\nl l\no d'


//So do I trim or not trim the white space? Well, only trim off the very last character which is the newline.