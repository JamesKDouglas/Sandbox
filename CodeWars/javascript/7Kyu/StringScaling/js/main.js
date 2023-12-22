// parameters: Three parametes, a "square string" like s = "abcd\nefgh\nijkl\nmnop", which when displayed represents a square block, and 2 scaling factors. The first is horizontal, and the second vertical. 
// return:
// When the vertical scaling factor is increased beyond 1 each character is duplicated that many times, except the newline character. When the vertical scaling factor is increased, the lines are duplicated directly beneath each other, i.e. in this case abcd\n becomes abcd\nabcd\n in the returned string.
// example: with s as the string above:
// 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"

// pseudocode:
//We'll use string.repeat() and since the focus is on string methods we'll avoid arrays. Use string.substring() as well.

//we'll use loops to construct a new string I guess. For loops limited by the scaling parameters.
//First the horizontal, then vertical? Why not.

let s = "abcd\nefgh\nijkl\nmnop";

//length 16 with 3 \n characters, contributing 3 in length. So 16 becomes 19. Length is the floor of sqrt(length).

//k is the horizontal factor. n is the vertical one.

function scale (strng, k, n) {

    if (strng.length==0){
        return "";
    }

    let newStr = "";
    
    //scale horizontal
    for (let i=0;i<strng.length;i++) {
        if (strng.substring(i,i+1)=="\n"){
            // console.log(`newline! ${strng.substring(i,i+1)}`);
            newStr = newStr.concat(strng.charAt(i));//don't repeat the newline
        } else {
            // console.log(`add some characters. i: ${i} add ${strng.charAt(i)}`)
            newStr = newStr.concat(strng.charAt(i).repeat(k));
            // console.log(`newStr is now ${newStr}`;
        }
    }

    //scale vertically
    let lineLength = newStr.indexOf("\n") + 1; //+1 for newline.
    console.log(`lineLength:`, lineLength);

    let numLines = (newStr.length+1)/lineLength;
    console.log(`number of lines`, numLines);

    let line = "";

    newStr = newStr.concat("\n");

    let newStr2 = "";
    for (let i=0;i<numLines;i++){
        line = newStr.substring(i*(lineLength), (i+1)*(lineLength));
        newStr2 = newStr2.concat(line.repeat(n));
    }   

    newStr2 = newStr2.trim();
    return newStr2;
}

console.log(scale(s,3,5));

//much shorter solutions are possible with regex and arrays. But Leon suggest that we focus on string methods this week and do not use regex!