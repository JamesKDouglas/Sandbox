// P Input a single dimensional array of colors as strings (lowercase).
// R These array elements represent gloves of a certain color. Return the number of matched pairs that it is possible to make.
// Example: input = ["red", "green", "red", "blue", "blue"]
//result = 2 (1 red pair + 1 blue pair)
// In the result I see a text statement. Am I returning just an integer, or also the details of the colors of the pairs? It is ambiguous.
// Pseudocode:
// Take the first element in the array and remove it (shift);
// Compare it to the rest of the elements. 
// If you find one, remove that element with splice 
// add one to the pair count.
// if you don't find one to match, move on to the next.
// return pair count.

function numberOfPairs(gloves)
{
    console.log(gloves);
    let pairsCount = 0;
    let totalGloves = gloves.length;

    let workingGlovesArr = [...gloves]; //codewars insists on not modifying the input in this exercise so the spread operator creates a shallow copy instead.

    for (i =0; i< (totalGloves-pairsCount); i++){
        console.log(`current i: ${i} current array length: ${workingGlovesArr.length}`);
        let glove = workingGlovesArr.shift();
        console.log(`current glove: ${glove}`)
        for (j=0;j<workingGlovesArr.length;j++){
            console.log(`comparing ${glove} against ${workingGlovesArr[j]}`)
            if (glove == workingGlovesArr[j]){
                console.log(`match!`);
                let slicedOut = workingGlovesArr.splice(j, 1);//erase one element at index j
                console.log(`removed: ${slicedOut}`)
                console.log(`remaining list: ${workingGlovesArr}`)
                pairsCount++;                        
                break;//move on to next glove
            } else {
                console.log(`no match.`)
            };
        }
    }
    console.log(gloves);
    return pairsCount;
}
input = [
    'Red',     'Black',  'Black',   'White',
    'Purple',  'Gray',   'Silver',  'Green',
    'Fuchsia', 'Purple', 'Blue',    'Yellow',
    'Red',     'White',  'Lime',    'Lime',
    'Green',   'White',  'Fuchsia', 'Fuchsia',
    'Black',   'Blue',   'Fuchsia', 'Aqua',
    'Lime',    'Yellow', 'Green',   'Navy',
    'White',   'Teal',   'Maroon',  'Silver',
    'Maroon',  'Green',  'Fuchsia', 'Silver',
    'Teal',    'Green',  'Aqua',    'Purple',
    'Fuchsia', 'Navy',   'Black',   'Maroon',
    'Maroon',  'Aqua',   'Maroon',  'Maroon'
  ];

console.log(numberOfPairs(input));