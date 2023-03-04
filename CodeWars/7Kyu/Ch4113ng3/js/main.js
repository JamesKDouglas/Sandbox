//the input will be a string.
//the goal is to replace a, e and i, capital or lowercase, with other characters
//a => 4
//e => 3
//l => 1

//some examples:
//"Fundamentals" => "Fund4m3nt41s"
//"Seven" => "S3v3n"
//"Los Angeles" => "Los 4ng313s"

//special cases? timeouts?
//"" case? just return ""
//No substantial timeouts expected

function nerdify(txt){
    //use the string.replace method
    //just go through each character. There are 6 of them.
    //I can use an array to check them all, I guess.
    //We could use regex but lets not.
    
    let ltrs = [['a','4'], ['A','4'], ['e','3'], ['E','3'], ['l','1']];
    
    let newTxt = txt;
    
    for (letter of ltrs){
        // console.log(letter);
        newTxt = newTxt.replaceAll(letter[0],letter[1]);
        // console.log(newTxt);
    }
    return newTxt;
}

console.log(nerdify("Fundamentals"), "Fund4m3nt41s");
console.log(nerdify("Seven"), "S3v3n");
console.log(nerdify("Los Angeles"), "Los 4ng313s");
console.log(nerdify(""), "");

  