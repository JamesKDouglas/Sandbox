function generateHashtag (str) {
    //check for empty string, early return.
    //Parse into words, discard extra spaces
    //Capitalize each word
    //Combine the words
    //add an octothorp at the front
    //check total length

    let maxLength = 140;//characters

    if (str.length==0){
        return false;
    }
    console.log(str);
    let word = "";
    let words = [];

    for (let i=0;i<str.length;i++){
        if (str.charAt(i)!=" "){
          word = word.concat(str.charAt(i));
        } else if (word.length>0){
            words.push(word);
            word = "";
        }
    }
    if (word.length>0) words.push(word);
  
    //return false if there are just spaces
    if (words.length == 0) return false;

    for (let i=0;i<words.length;i++){
        console.log(words[i]);
        words[i] = "".concat(words[i][0].toUpperCase(),words[i].substring(1));
    }

    let hash = words.join("");
    hash = "#".concat(hash);
    if (hash.length>maxLength){
        return false;
    } else {
        return hash;
    }
}

let str = "codewars Is nice";
let output = generateHashtag(str);
console.log(output);
