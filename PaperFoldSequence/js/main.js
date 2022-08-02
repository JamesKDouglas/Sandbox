// paremeters: none. This generator function just begins at one and sends values every time it is called
// return or rather 'yield' the next value from the paperfold sequence every time it is called. 
// example values from the sequence:
// 1

// 1 1 0

// 1 1 0 1 1 0 0

// 1 1 0 1 1 0 0 1 1 1 0 0 1 0 0
//Note how the paperfold sequence starts with 1, adds 1 and 0 on both sides. Then carries on in this way, splicing evenly in a series of alternating 1's and 0's between the previous 1's and zeros.

// pseudocode:
// start with seqVal = [1]. It's an array according to the test files.
// Compute new seqVal.
    //set up a counter to monitor the examined index. 
    //go through the seqVal. Work from the far end. If the index is even, splice in a 0 after the value. If it is odd, splice in a 1. Eventually you will get to index zero and zero is even so you added a 0 after. End the loop, and finally Unshift a 1 into the front.
    //return the sequence as an array
//yield the new seqVal.

function* paperFold() {
    console.log(`begin generator!`)
    let seqVal = [1];
    console.log(`seqVal begins as: ${seqVal}`);
    for (let j=0;j<=1000000;j++){// limit of 1 million values.
        console.log(`Pass me another one!`)
        for (i = seqVal.length-1;i >= 0;i--){
            console.log(`start generating a new seqval.`)
            if (i == seqVal.length-1){
                console.log(`try to push a value to the end`)
                //splice cannot push, so if we're starting at the very end we need to do a special operation.
                if (i%2==0){
                    seqVal.push(0);
                    console.log(`did you push it? seqval: ${seqVal}`);
                } else if (i%2==1){
                    seqVal.push(1);
                }
            } else {
                if (i%2==0){
                    console.log(`splice in a one!`);
                    seqVal.splice(i,0,1);//(position, deletion count, value to splice in). Splice puts the value in to the left of the position indicated. It is unable to push something onto the end. 
                } else if (i%2 ==  1){
                    console.log(`splice in a zero!`);
                    seqVal.splice(i,0,0);
                }
            }
        }
        if (seqVal.length ==2){
            seqVal.unshift(1);//One special case prepend to get started.
        }
        yield seqVal;
    }
}

const fold = paperFold();//generators return objects. So if you want to use that to iterate you have to put it into a variable like this.


console.log(fold.next().value);
console.log(fold.next().value);
console.log(fold.next().value);


// function* generator() {
//    for(let j=0;j<110;j++){
//        yield j;
//    }
// }
  
// const gener = generator();

// console.log(gener.next().value);

// for (let i=0;i<100;i++){
//     console.log(gener.next().value);
// }
  