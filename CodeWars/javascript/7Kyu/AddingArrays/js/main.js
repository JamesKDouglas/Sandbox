// parameters: Input will be a two dimensional array. The array contains a sentence. The first position of each sub array belongs to the first word, second position to the second etc. If the word is shorter than the first dimension then the remaining spots are placeholders that are empty strings.
// return: a compiled sentence as a string.
// example:
// let arr = [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']];
// should be compiled into the string, "Just Live Life Man"
// pseudocode:
//Use either map, or for loops. Lets try practicing witih map.
//map returns an array only so make an array then join it to report the string.
//ok map is not that useful here. For one thing, I want to loop through repeatedly. It only loops once. Also, I want it to stop after the first letter is reported on the second level. It can't do that.
//try for loops, then I can look for a spot where map can be used to refactor.
//This is going to involve nested loops.
//to simply reassemble the array into a string:
//Start by building the first word. That means we start with an index zero, looking at arr[0][0], then arr[1][0]. That starts giving, "Ju..."
//When arr[lev1][lev2] is empty, the word is over so add a space then move on. We would move on to arr[1][0].
//alternately: this is a transmutation. Imagine rotating and reflecting the array.

function arrAdder(arr) {
    let newArr = new Array(new Array());//declare 2d array

    for(let i=0;i<arr[0].length;i++){//start assembling the first word. i tracks the the word we are building.
        console.log(`begin assembling word ${i}`);
        for(let j=0;j<arr.length;j++){//j tracks the letter of the word.
            if (arr[j][i] == ''){
                //empty string so word is over
                break;//move on to next word (next i)
            } else {
                newArr.push(arr[j][i]);
            }
            console.log(`Appended the character, ${arr[j][i]}`);
        }
        console.log(`done assembling a word. Array is now ${newArr}`);
        //word is done, so put a space;
        newArr.push(" ");
    }
    newArr.pop();//remove the final space so we get an exact string match. We could also just add a period but they don't want that.
    let str = newArr.join("");
    return str;
}


// let arr = [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']];

let arr = [[ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
[ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
[ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
[ '', 'o', '', '', 'e', '', '', 'l' ],
[ '', 'c', '', '', 'r', '', '', '' ],
[ '', 'h', '', '', 'h', '', '', '' ],
[ '', 'o', '', '', 'o', '', '', '' ],
[ '', 'n', '', '', 'u', '', '', '' ],
[ '', 'd', '', '', 's', '', '', '' ],
[ '', 'r', '', '', 'e', '', '', '' ],
[ '', 'i', '', '', '', '', '', '' ],
[ '', 'a', '', '', '', '', '', '' ]];

console.log(arrAdder(arr));