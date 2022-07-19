// parameters: input a binary array like s = [1,1,0,1,1,0,1,1]
// return: the largest subsequence with an even number of zeros and ones.
// The array can be 1 element long or up to 120 000 elements.
// example: s = [1,1,0,1,1,0,1,1], subsequence is [0,1,1,0]

// pseudocode:
// Examine the array starting at the first index.
// Count 1 as a +1 and 0 as a -1 for each element. If the sum comes to 0, then you've found a balanced sequence. Imagine a line going up and down as we traverse the array. We're looking for the crossings or zero points.

//One thing we can also do is count the total number of zeros and ones. Once the total number of ones exceeds the total zeros, a balanced sequence is impossible. In the example array there are two zeros, so after the third 1, you can give up on a balanced sequence starting at index 0.

// Two or more contiguous sequences together should be combined.
// Report the longest one.

function binarray(a) {
// count the # 0s;
    let zeros = a.filter(0).length;
// and the 1's
    let ones = a.filter(1).length;

    let length = a.length;//with 120 000 cycles it's nice to just calculate this once, right?

    let counter;

    let startIndex = 0;
    let endIndex = 0;
    let balancedSequences = [];
    for (let i = 0;i<length;i++){// i is the start index for examining the array
        counter = 0;
        for (let j=0;j<(length-i);j++){//j is the increment.
            if (a[i] == 1){
                counter++;
            }
            if (a[i] == 0){
                counter--;
            }
            if (counter > ones || counter < -zeros){//at this point it's impossible to make balanced sequence, so stop
                break;
            }
            if (counter == 0){
                //found a balanced sequence!
                let startIndex = i;
                let endIndex = j;
                balancedSequences.push([startIndex,endIndex]);
                break;
            }
        }
    }

    //Now, I should check to see if there are more than one balanced sequences.
    //It is possible to have overlapping sequences? I think so, yes.
}