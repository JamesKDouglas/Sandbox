//The input will be a base 10 number (integer)
//This number has a binary equivalent with a certain number of 1 digits.

//Find the next highest number with the same number of 1 digits.

//Return it as an integer.

//edge cases: 0 ones. return null. no -ve numbers
//no big Ints. Job size modest.


function nextHigher(n) {
    //Convert n to binary.
    let binN = n.toString(2);
      
    //count the # of ones. (make that a func)
    function countOnes(num){
    let count = 0;
    for (let i=0;i<num.length;i++){
        if (num[i]==="1"){
        count++;
        }
    }
    return count;
    }
      
    let numOnesN = countOnes(binN);
    // console.log("binN:", binN);
    // console.log("numOnes:", numOnesN);
      
    //count upwards, counting the number of ones for each.
    let nextNum = n+1;
    while (countOnes(nextNum.toString(2))!==numOnesN){
        nextNum++;
    }
    
    return nextNum;

}
    
console.log(nextHigher(129), 130);
console.log(nextHigher(127), 191);
console.log(nextHigher(1), 2);

// This, above, is a brute force. 
// A cleverer way would be to go from the right side and look for the first 0 after a 1. Shift that 1 to the left.
// And that's it! Then display it as base 10.

// What if it's all 1's? Well then we have to add a digit. 
//7=> 111. =>1000 is 8. 1011. so 11. Here, it's all 1's so we add a digit then it starts with 10.  