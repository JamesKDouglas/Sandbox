//input a string.
//find the most frequently occurring character
//not case sensitive. ex L is the same as l
//spaces count

function maxCharacter(str){
    str = str.toLowerCase();
    let charMap = {},
        count=0,
        maxChar = null;
    
    for (const char of str){
        charMap[char] = charMap[char] +1 || 1;
    }

    for (const char in charMap){
        if (charMap[char]>count){
            count = charMap[char]
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxCharacter("hello"), "l");
console.log(maxCharacter("Pineapple People Rock!"), "p");
