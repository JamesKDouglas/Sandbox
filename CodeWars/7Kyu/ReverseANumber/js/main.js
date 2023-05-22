//input: a non negative integer, n. And  a base b.

//the goal is to take the number in as base 10, convert it to base b, reverse it,
//then return the number in base 10. 

//ex: n=12, b=2. in binary 12 is 1100. Reversed that is 0011, which is 3 in base 10.
//so return 3.

//n=10, b=5 => 10 in base 5 is 20, which reverses to 02 equivalent to 2 in decimal.

//n=45, b=30 => 45 in base 30 is 1F, reverses to F1 which is 451 in base 10

//edge cases? like b=0? not expected.
//early returns:
//if the number is less than the base it's just still the number.
//uh, unary? Well, it doesn't reverse at all I guess. It's like a tally.

//size - bigInt. timeouts? don't worry about it. 

//new criteria: must be able to handle both integers and bigInts?
//They seem confused a to the requirement of int or bigInt.


//It looks like they want to report bigInt if the incoming was a bigint.
function reverseNumber(n, b){
    let bigIntType = false;
    if (typeof(n) == "bigint"){
      bigIntType = true;
    }
    
    //correct type
    n = Number(n);
    b = Number(b);
    //well, do we even need to use bigint? They do come in as big int, but do they need
    //to stay as that?
    
    console.log(n,b);
    console.log(typeof(n));
    //n and b are bigInts.
    
    //num.toString(basex) to convert a num of base 10 to a basex.
    //parseInt('numAsString', basex); converts a number as basex to base 10.
    
    //early returns first:
    if (b===1){
      return n;
    }
    if (n<b){
      return n;
    }
    
    let numStr = n.toString(b).split("").reverse().join("");
    let newNum = parseInt(numStr,b);
    if (bigIntType === true){
      return BigInt(newNum);
    } else {
      return newNum;
    }
  }
  
  console.log(reverseNumber(12,2), 3);
  console.log(reverseNumber(10,5), 2);
  console.log(reverseNumber(45,30), 451);
  console.log(reverseNumber(5,1), 5);
  