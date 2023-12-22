// parameters: Pass in half a dna sequence with the base pairs represented as characters.
// return: the complimentary base sequence
// example: "ATTGC" --> "TAACG" so, A to T, G to C
// pseudocode:
// often people will use regex for this, but Leon suggests to avoid that. 
// So lets use a for loop. Put the string into an array then examine every letter. Push the compliment into a new array.
//I'm sure map would work for this but often I try using map and just... find for loops give you better control and are around twice as fast.

function DNAStrand(dna){
    let compliment = [];
    let dnaArr = dna.split('');
    for (let i=0;i<dnaArr.length;i++){
        if (dnaArr[i] == "A"){
            compliment.push("T");
        }
        if (dnaArr[i] == "G"){
            compliment.push("C")
        }

        if (dnaArr[i] == "T"){
            compliment.push("A");
        }
        if (dnaArr[i] == "C"){
            compliment.push("G")
        }
    }
    return compliment.join("");
}

let strand = "ATTGC";
console.log(DNAStrand(strand));