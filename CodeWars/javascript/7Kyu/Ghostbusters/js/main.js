// Parameters - A string containing spaces (special characters?). 
// Return Return a string that has all spaces removed. If there are no spaces to remove, return "You just wanted my autograph didn't you?"
// Examples ghostBusters("Sky scra per"); should return,
//"Skyscraper"
// Pseudocode
// Search for spaces. If there are none, return. This early return is good practice, although it hardly matters here.
// otherwise, 
// Split the string at the spaces character.
// Join it back together.
// Compare the two strings. If they are the same, no strings have been removed.

function ghostBusters(building) {
    if (building.search(/\s/g) == -1){
        return "You just wanted my autograph didn't you?";
    };
    return building.replace(/\s/g, "");//Although browsers support replaceAll, the codewars environment does not. The global flag allows replace to be used instead.
}

console.log(ghostBusters("Sky scr aper"));