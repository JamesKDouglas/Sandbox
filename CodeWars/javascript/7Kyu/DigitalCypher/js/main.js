
// Param: a word as string and a cypher number.
// Return an array of numbers. Each number represents a letter, with the cypher applied
// Example: encode("scout",1939) , [ 20, 12, 18, 30, 21])
// Pseudocode:
// Make a new object with the numbers 1-26 as properties and letters as keys.
// split the incoming string to encode into an array.
// Make a new array of numbers for each letter by looking up the keys and assigning the number.
// add a digit of the cypher to each number in a repeating fashion.


function encode(str,  n)
{
    //Ascii codes puts a at 97 and A at 65. So lets put everything in lowercase then we can just number with the ascii codes

    str=str.toLowerCase().split('').map(e=> e.charCodeAt(0)-96); //this puts a as 1

    n = n.toString();

    let counter = 0;
    for (i in str){
        if (i%n.length==0){
            counter = 0;
        }
        str[i] = +str[i] + +n[counter];
        counter++;
    }
    return str;
}
console.log(encode("abc",1939));