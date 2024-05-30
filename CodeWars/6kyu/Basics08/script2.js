//The input will be a base 10 number (integer)
//This number has a binary equivalent with a certain number of 1 digits.

//Find the next highest number with the same number of 1 digits.

//Return it as an integer.

//edge cases: 0 ones. return null. no -ve numbers
//no big Ints. Job size modest.


function nextHigher(n) {

// Go from the right side and look for the first 0 after a 1. Shift that 1 to the left.
// And that's it! Then return it as base 10.

//edge case: all one's. To handle this just add a 0 buffer in front.
//edge case: zeros all to the right. The only way to make a larger number is to use that buffer zero.
//but then the zeros on the right need to move a far left as possible.

    let binN = n.toString(2).split("");
    //buffer 0
    binN.unshift("0");
    console.log(binN);
    //Look for the first 1 from the right end.
    for (let i=binN.length;i>0;i--){
        if (binN[i]==="1" && binN[i-1]==="0"){
            //do the shift
            binN[i] = "0";
            binN[i-1] = "1";
            break;
        }
    }
    console.log("new binN:", binN);
    return(parseInt(binN.join(""),2));

}
    
// console.log(nextHigher(129), 130);
// console.log(nextHigher(127), 191);
// console.log(nextHigher(1), 2);
console.log(nextHigher(1022), 1279);
let num = 1279;
console.log(num.toString(2));