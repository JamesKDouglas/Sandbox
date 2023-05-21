//Input : n, or the number of 'folds'. That is, the number of times a 101.. seq is 
//interpsliced into the growing sequence.

//up to 1 000 000 folds. Timeouts? 10s

//This is how the sequence is constructed:

//start with 1. so that's n=0
//Then add a sequence of alternating 1's and 0's, intersplicing with every digit.
//so n=1 is 110
//n=2 is 1101100

//return the sequence as... an array.

//We can see from the test case that what they are asking for is a generator function
//So actually there will be no input into it. Each time it runs the next
//sequence should be returned. 

function* paperFold() {
    console.log("begin paperfold");
    let seq = [1];
    let dig = 1;
    while(true){
        for (let i=0;i<seq.length;i++){
            if (i%2 ==0){
                dig = 1;
            } else {
                dig = 0;
            }
            seq.splice(i,0,dig);
            console.log(seq);
        }
        yield seq;
    }
}

const take = n => function*(gen) { 
    while ( n-- >0 ) { 
        console.log("begin take"); 
        // console.log(gen.next().value);
        yield gen.next().value; 
    }
} ;

//The double round brackets are because:
//take(0) returns a function. Then the function is passed another function. 
//This is currying
let takeObj = take(2)(paperFold());
console.log(takeObj, [1]);
// console.log(take(2)(paperFold()), [1,1,0,1,1,0,0]);
// console.log(take(3)(paperFold()), [1,1,0,1,1,0,0,1,1,1,0,0,1,0,0]);
  