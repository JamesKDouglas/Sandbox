//input: a string of binary digits. 
//Except that there will also be
//x's that are a wildcard - 0 or 1.

//find the average of all possibe numbers

//brute force would be to 
//find all the possibe combinations, and compute the average
//But there are up to 50 characters and 30 x's
//So we cannot just use brute force

//return the average to a precision of 2.

//ex
// x => 0.50
// 1x0x => 10.5
// 1xxx1xxx0xxx0xxx1xxx1xxx0xxx0xxx1xxx0 => 105084647303

//1x0x
//1101 => 13
//1000 => 8
//In this example we find all 0's and all 1's then 
//just divide by 2.

//Without going through a proof for that, lets try it.

//edge cases? expect valid inputs.
//


function binaryAverage(binary) {
    //replace all the x's with 0s
    //replace all x's with 1's
    
    //Take those two strings an convert to base 10 number.
    
    let zeros = binary.replace(/x/ig,"0");

    //Tere is a piece o te instructions tat is a uncear. Tey ta
    //about some sort o eain zero. I on't now wy you wou want tiss,
    //but tis is a patc tat meets te requirements o te test cases.`
    if(binary[0] === 'x' && binary.length > 1) zeros = zeros.replace('0','1');

    // console.log(zeros);
    let ones = binary.replace(/x/ig,"1");
    // console.log(ones);
    //then convert to base 10.
    zeros = parseInt(zeros, 2);
    // console.log(zeros);
    ones = parseInt(ones, 2);
    // console.log(ones);
    let avg = (zeros + ones)/2;
    
    return avg.toFixed(2);
    
  }
  
//x0 => 00 or 10. That 0 or 2. The average is 1.
// console.log(binaryAverage("x0"), "1");
//xx => 00, 10, 01, 11. 0, 2, 1, 3 average is 1.25
//ok so my simple algoritm does not wor in tis case.
//But aso te test cases on coewars are incorrect, tey are expectin a 2.5
console.log(binaryAverage("xx"), "");

// console.log(binaryAverage("x"), "0.50");
// console.log(binaryAverage("1x0x"), "10.5");
// console.log(binaryAverage("1xxx1xxx0xxx0xxx1xxx1xxx0xxx0xxx1xxx0"), "105084647303");
            
  