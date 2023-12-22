//Input will be two strings: a text and a character.

//return a string of the same length, composed entirely of the character 
//just repeating.

//return that sequence.

// ex: ABC, Z => ZZZ

// null - return an empty string.

// are we expecting like a million strings in 100ms? No.

function contamination(text, char){
    let len = text.length;
    let newStr = char.repeat(len);
    return newStr;
}

console.log(contamination("abc","z"), "zzz");
console.log(contamination("//case","G"), "GGGGGG");
console.log(contamination("_3ebzgh4","&"), "");
  