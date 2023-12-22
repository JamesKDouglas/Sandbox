// param: input a positive integer. No checking is required.
// return: The collatz sequence for that number, organized as a string like, 
// "3->10->5->16->8->4->2->1"
// example: With 3 as the input.
// 3->10->5->16->8->4->2->1
// pseudocode:
//Well, we just implement the function then join the generated array with ->
//Use a while loop because we don't know how long this is going to go on for. 
// A for loop with continue condition is also fine.

function collatz(n){
    let collatz = [];
    let num = n;//initialize 
    
    while (num>1){
        collatz.push(num);
        if (num%2 == 0){
            num = num/2;
        } else {
            num = 3*num + 1;
        }
    }
    collatz.push(1);
    
    let stringNums = collatz.join("->");

    return stringNums;
}

let n = 3;
console.log(collatz(n));