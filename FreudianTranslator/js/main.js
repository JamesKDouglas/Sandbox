// Parameters - input a string with normal characters. No special ones. A short sentence or phrase or word. Or Null.
// Return the word sex replaces every word once. Punctuation remains?
// Examples "This is a test" returns", "sex sex sex sex"
// Pseudocode 
// use replace with a regex.

function toFreud(string) {
    return string.replaceAll(/[^\w]+/g,'sex')// I tried this but it only replaces the first one!
//    return string.replace(/[^ ]+/g,'sex')// someone else offers this solution and it does indeed seem to work. 
// if (string == ''){
    //     return string;
    // }
    // string = string.split(' ');
    // console.log(string.length);
    // for (i in string){
    //     string[i] = 'sex';
    // }
    // string = string.join(' ');
    // return string;


}

console.log(toFreud('this is a test'));