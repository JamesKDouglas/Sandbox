//There will be an input, which is an integer. Call it n. n>1

//The goal is to determine if 1/n has a repeating series of digits after the decimal
//for example, 1/11 = 0.0909090909 so the repeating pattern is 09.

//Return the length of the cycle. So for 1/11 return 2.

//If there is no repeating cycle, return -1.

//Note that there is a repeating cycle like this for all numbers that
//are coprime with 10. That is, the greatest common factor between n and 10
//is 1.

//so if n is 5 return -1. 10 is divisible by 5 so the greatest common factor 
//is 5 and they are not coprimes. Also, of course 1/5 is just 0.2.

//edge cases? 0? no, valid n>1 only.
//BigInts? No.
//Timeouts? 12 000 ms. No large jobs. 

function cycle(n) {
  console.log("input num:", n);
  //early returns:
  //if a number is divisible by 2, 5 or 10 then it's not coprime so 
  //just return -1. Use %.
  
  //Otherwise, continue on to find that pattern.
  
  //We'll work with bigInts. 
  //Create the number series by using 1n and a bigInt version of n then immediately
  //multiplying that by a very large number like 10^300.
  //That gives us a number but it also cuts off any leading zeros.
  //We can sense how many leading zeros were cut off by finding the length of the 
  //resultant number. For example if it is 298 digits long, then 2 leading zeros have been removed.
  
  //Make a string that contains those zeros. So now we have a proper series of digits 
  //that represents the decimal

  //Then we'll look for a repeating pattern in it.

  //use a while loop.
  //assume that if a pattern repeats once it does so indefinitely.
  //Choose a length. Check 2 sections. Are they the same? If so, return that length.
  //if not, inspect a larger length.
  //I'll just use substring for that.
  
  //early returns:
  if (n%2===0||n%5===0){
    return -1;
  }
  
  //These will contain our 2 strings.
  let seg1 = "", seg2 = "";

  //set up the bigInts.
  let numerator = 1n;
  let denominator = BigInt(n);
  // console.log(denominator);

  //digits is the limit. So here we can only detect a repeating sequence of 150.
  //This could be bigger of course, but anyways there needs to be a limit.
  // console.log("numer/denom: ", 100n*numerator/denominator);
  let digits = 400000n;
  let bigNumber = (10n**digits)*numerator/denominator;
  // console.log(bigNumber);

  //Now, were there leading zeros that were erased when we converted to an integer?
  let zeros = Number(digits) - bigNumber.toString().length;
  // console.log(zeros);
  //now concatenate the leading zeros and make a nice string
  let stringNum = "0".repeat(zeros)+bigNumber.toString();
  // console.log(stringNum);

  let repeatSeqLength = 0;
  console.time("forloop");
  //This is the slow part. 
  for (let i=zeros;i<Number(digits)/2;i++){

    //What if I just look at the first character? Only if they match do I look at the rest.
    //Nope, that makes it slower by 4x. Looking at the first 2 characters speeds it up again by 4x. Comparing the first 3 characters
    //doesn't go faster, but again runs more slowly.
    if (stringNum[i]+stringNum[i+1]+stringNum[i+2] == stringNum[2*i]+stringNum[2*i+1]+stringNum[2*i+2]){
      seg1 = stringNum.substring(0,i);
      // console.log("segment 1:", seg1);
      seg2 = stringNum.substring(i,2*i);
      // console.log("segment2:", seg2);
      if (seg1 == seg2){
        repeatSeqLength = i;
        break;
      }
    }
    
  }
  console.timeEnd("forloop");
  return repeatSeqLength;

}

//ok, well the above works but times out because it is too slow. A faster way is 
//from ignovak's solution, which is what - a process of long division? Each time we generate
//another decimal. And eventually we get back to the starting state, which is val=1 .
function cycle2(n) {
  console.log("testing: ", n)
  if (n % 2 == 0 || n % 5 == 0) return -1;

  let i = 0;
  let val = 1;
  console.time("whileloop");
  while (++i) {
    // console.log("i: ", i);
    // console.log("val:", val);
    val = val * 10 % n;
    // console.log("now val is: ", val);
    if (val == 1) {
      console.timeEnd("whileloop");
      return i;
    }
  }
  


}

// console.log(cycle(33), 2);
// console.log(cycle(18118), -1);//early return for all even #s.
// console.log(cycle(69), 22);
// console.log(cycle(65), -1);//multiple of 5
// console.log(cycle(197), 98);
// console.log(cycle2(218713),9744)
// console.log(cycle(156593),156592);
console.log(cycle(426437), "?");
// console.log(cycle(89049), "?");

//Using a timer, I can see that the long division method is 10 times faster, taking 1ms to find a repeat of 38000 long rather than about 
//10ms. 

//Sandbox:
//Javascript only handles 17 decimals. In order to handle something like 200,
//we will need to use strings and bigInts.
//We'll multiply the decimal by a bigInt to get the numbers we need. Still,
//there will be a limit but perhaps that will be ok.

// let numerator = 1n;
// let dividor = 197n;

// let result = (10n**300n)*numerator/dividor;
// console.log(result.toString().substring(0,96))
// console.log(result.toString().substring(96,97+98))
// console.log(result.toString().length);
// console.log(1/197)