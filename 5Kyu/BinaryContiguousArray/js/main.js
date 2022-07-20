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
    let zeros = a.filter(el => el==0).length;
    let ones = a.filter(el => el ==1).length;
    let length = a.length;
    let counter =0;
    let balSeq = new Array();
    console.log(`balancedSequences: ${balSeq}`)
    console.log(balSeq);
    let newArr = new Array();
    console.log(`newArr: ${newArr}`);
    console.log(`${newArr}`);
    
    for (let i = 0;i<length-2;i++){
        console.log(balSeq);
        console.log(`inspecting from element ${i}, which is a ${a[i]}`)
        counter = 0;
        for (let j=i;j<(length-i);j++){
            console.log(`enountered element ${j} with vale ${a[j]}`)
            console.log(`counter before: ${counter}`);
            if (a[j] == 1){
                counter++;
            }
            if (a[j] == 0){
                counter--;
            }
            console.log(`counter after: ${counter}`);

            if (counter > ones || counter < -zeros){//If this happens, at this point it's impossible to make balanced sequence, so stop
                break;
            }

            if (counter == 0){
                //found a balanced sequence!
                console.log(balSeq);
                console.log(`found balanced sequence!`)
                let el = [i,j];
                console.log(`i: ${i} j: ${j}`)
                balSeq.push(el);
                console.log(balSeq);
                break;
            }
        }
    }

    //Now, I should check to see if there are more than one balanced sequences.
    //It is possible to have overlapping sequences? I think so, yes. A larger balanced sequence may contain a smaller one.
    // let sequence = [];
    console.log(balSeq);
    for (let i=0;i<balSeq.length-1;i++){
        if (balSeq[i][1] == balSeq[i+2][0]){
            balSeq[i] = balSeq[i].concat(balSeq[i+2]);
        }
    }
    return balSeq;
}


//In this sequence 0,1,1,0 is the longest balanced sequence. But 0,1 is also balanced, so is 1,0. Oh 1,0 is also balanced.
let s = [1,1,0,1,1,0,1,1];
console.log(binarray(s));