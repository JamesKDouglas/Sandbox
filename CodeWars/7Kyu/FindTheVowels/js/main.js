// P input a word. No special characters, mixed case.
// R the location of the vowels in an array, with the first character as index 1 Vowels are considered a e i o u y.
// E Super returns [2,4]
// P
// Trying not to use regex these days.
// deconstruct string into an array.
// set up an array with vowels.
// set up an array for locations of vowels.
// Loop through for each vowel.
// For each vowel, find an array function that can loop through the array and see if a vowel is present at that index. If it is, output the index (plus 1) into the location of vowels array.
// return the location of vowels array
function vowelIndices(word){
    // deconstruct string into an array.
    let charArr = word.toLowerCase().split('');
    // set up an array with vowels.
    let arrVowels = ['a','e','i','o','u','y'];
    // set up an array for locations of vowels.
    let vowelLocations =[];
    // Loop through for each vowel.
    for (let i = 0;i<arrVowels.length;i++){
    // For each vowel, find an array function that can loop through the array and see if a vowel is present at that index. If it is, output the index (plus 1) into the location of vowels array.
    //Ok this is insufficient because there is no array function that just returns all indexes. find only returns the first. Try map? Nope confusing weirdly unable to handle an if statement. Just use a for loop instead.
        for (let j = 0; j<charArr.length;j++){
            if (charArr[j] == arrVowels[i]){
                vowelLocations.push((j+1));
            }
        }
    }

    // return the location of vowels array
    return vowelLocations.reverse();
}

console.log(vowelIndices('super'));
//I see people using array functions and they can be very concise. But here I'm finding them more annoying than anything. I'll just use for loops!