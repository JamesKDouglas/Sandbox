// Input: string containing a series of round brackets.

// goal is to return the number of brackets that must be reversed to make the 
//sequence "balanced"
//"balanced" is a valid set of enclosing bracket, and just a single set with no 
//subsets.
//ex: (()) is balanced. (((()))) is also. This "balanced sequence"
//is what is formed by 
//repeatedly enclosing a (null) value in brackets.

//Looks similar to the "is this valid" question

//Return an integer saying the number of reversals required
//return -1 if it's impossible.

//other characters? no. No timeouts. 

function solve(s){
    console.log(s);
    //early return: if the length is odd, it is impossible
    if (s.length%2 !== 0){
      return -1;
    }
    
  //   If it is an even length it's possible so let's proceed
    //Every balanced sequence is symmetrical and will have ((
    //at the start then )) at the end.
    
    //So we could find the midway point, then count how many )'s there are?
    //Then from the midpoint to the end count how many ('s there are.
    
    let midPt = s.length/2;
    let countMismatch = 0;
    for (let i=0;i<midPt;i++){
      if (s[i]===")"){
        countMismatch++;
      }
    }
    
    for (let i=midPt;i<s.length;i++){
      if (s[i]==="("){
        countMismatch++;
      }
    }
    
    return countMismatch;
  }
  
  console.log(solve(")("),2);
  console.log(solve("(((())"),1);
  console.log(solve("((("),-1); 
  
  //optimization: "balanced parentheses" means not just a single set but multiple
  //sets are allowed. This wasn't described in the original question, and the test cases
  //were not written for it. So I consider this solution complete. 
  //But this is a separate and valid problem.
  