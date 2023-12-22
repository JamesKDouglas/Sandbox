// param: given a list of strings.
// return: sort them alphabetically, but just return the first. also insert *** between each letter
// the returned thing must be a string.
// e
// ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
//  returns b***i***t***c***o***i***n
// pseudocode
// just use sort to sort them.
// then split, and join to add the ***


function twoSort(s) {
    // console.log(s);
    let sorted = s.sort();
    // console.log(sorted);
    let insSorted = sorted[0].split('').join('***');
    // console.log(insSorted)
    return insSorted;
}

s=["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];
twoSort(s);
