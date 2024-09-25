/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
    //This works but it's too slow for Leetcode to accept.

    //iterative approach:
    //Make an empty array to hold the counted values.

    //Go through the words one at a time:
        //If it's empty, make the sum just 0.
        //If not, begin the counting loop:
            //begin loop to look at the strings we can search for by taking a string and using substring(0,i);
                //pass that to a substring search function:
                    //Take the substring and search all the words using .indexOf. If it returns 0, that's a prefix.

    let counts = Array(words.length).fill(0);

    let w = "";//word
    let substr = "";

    //wi for word index
    for (let wi = 0;wi<words.length;wi++){
        w = words[wi];
        if (w === ""){
            continue;
        };
        
        //li letter index - which letter to go up to for the substring prefix wer'e searching
        for (let li=0;li<w.length;li++){
            substr = w.substring(0, li+1);

            //wtii word to inspect index
            // console.log("looking for words with prefix:", substr)
            for (let wtii = 0;wtii<words.length;wtii++){
                // console.log("does the word", words[wtii], " have the prefix? ", words[wtii].indexOf(substr));
                if (words[wtii].indexOf(substr) === 0){
                    //found a word with that prefix
                    counts[wi]++;
                }
            }
        }

    }
    return counts;
};