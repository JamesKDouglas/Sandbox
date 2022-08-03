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


//this doesn't give the right sequence. I could try to fix it, but mutating is difficult. Splice cannot put something onto the and of an array, and push cannot put something into the middle. So it's just awkward to decide what to use when, and at the same time keep count etc.
function* paperFoldMutate() {
    console.log(`begin generator!`)
    let seqVal = [1];
    console.log(`seqVal begins as: ${seqVal}`);
    for (let j=0;j<=1000000;j++){// limit of 1 million values.
        console.log(`start generating a new seqval.`)
        for (i = seqVal.length-1;i >= 0;i--){
            
            if (i == seqVal.length-1){
                console.log(`Append final value to: ${seqVal}`)
                //splice cannot push, so if we're starting at the very end we need to do a special operation.
                if (i%2==0){
                    seqVal.push(0);
                    console.log(` seqval: ${seqVal}`);
                } else if (i%2==1){
                    seqVal.push(1);
                }
            } else {
                if (i%2==0){
                    
                    seqVal.splice(i,0,1);//(position, deletion count, value to splice in). Splice puts the value in to the left of the position indicated. It is unable to push something onto the end. 
                    console.log(`splice in a one! ${seqVal}`);
                } else if (i%2 ==  1){
                    
                    seqVal.splice(i,0,0);
                    console.log(`splice in a zero! ${seqVal}`);
                }
            }

                if (i%2==0){    
                    seqVal.splice(i,0,1);//(position, deletion count, value to splice in). Splice puts the value in to the left of the position indicated. It is unable to push something onto the end. 
                    console.log(`splice in a one! ${seqVal}`);
                } else if (i%2 ==  1){
                    
                    seqVal.splice(i,0,0);
                    console.log(`splice in a zero! ${seqVal}`);
                }

        }
        if (seqVal.length ==2){
            seqVal.unshift(1);//One special case prepend to get started.
            console.log(`Prepend initial value just to get started: ${seqVal}`)
        }
        yield seqVal;
    }
}

// const fold = paperFoldMutate();//generators return objects. So if you want to use that to iterate you have to put it into a variable like this.

// console.log(fold.next().value);
// console.log(fold.next().value);
// console.log(fold.next().value);

//just generator practice
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

function* paperFoldNotMutate(){
    let arrOld = [];
    let arrNew = [];
    let counter = 0;//This tracks whether I'm going to add a 0, the original number or 1 to the sequence being built; 
    let x = 0;//the number we will push to build the new array.
    for(let j=0;j<1000000;j++){//yield up to a million times
        //go through the original array and use it to create a new one.
        console.log(`Prepare to loop. arrOld is ${arrOld}, newArr is ${arrNew}`)

        oldArr = arrNew.slice(0);//This line is failing. I can see that the array is not copied. Isn't this a normal way to duplicate an array?
        arrNew = [];

        console.log(`After swapping, oldArr is: ${arrOld}, newArr is ${arrNew}`)
       
        for(i=0;i<arrOld.length+1;i++){
            //always start with a 1.
            if (counter==0 && i<arrOld.length){
                arrNew.push(1);
                arrNew.push(arrOld[i]);
            } else if (counter==0){
                arrNew.push(1);
            }
            if (counter==1 && i<arrOld.length){
                arrNew.push(0);
                arrNew.push(arrOld[i]);
            } else if (counter==1){
                arrNew.push(0);
            }

            counter++;
            if (counter > 1){
                counter=0;
            }
        }
        console.log(`after generation newArr is ${arrNew}`)
        yield arrNew;
        
    }
}
const foldNotMutate=paperFoldNotMutate();

console.log(foldNotMutate.next().value);
console.log(foldNotMutate.next().value);

console.log(foldNotMutate.next().value);
console.log(foldNotMutate.next().value);