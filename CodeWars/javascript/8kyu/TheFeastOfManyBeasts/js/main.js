// parameters: Two strings are supplied. One is an animal, another is a dish.
// return: If the start end end letters of the two strings match, return true. Otherwise return false.
// example: 

// "great blue heron" and "garlic naan" returns true.
// "chickadee"  and "chocolate cake" returns true.

// pseudocode:

let beast = "great blue heron";
let dish = "garlic naan";

console.log(feast(beast, dish));

function feast(beast, dish) {
    let beastStart = beast.charAt(0);
    let beastEnd = beast.charAt(beast.length-1);

    let dishStart = dish.charAt(0);
    let dishEnd = dish.charAt(dish.length-1);

    console.log(`beastStart: ${beastStart} beastEnd: ${beastEnd} dishStart:${dishStart} dishEnd:${dishEnd}`);

    if (beastStart == dishStart && beastEnd == dishEnd){
        return true;
    } else {
        return false;
    }
}

