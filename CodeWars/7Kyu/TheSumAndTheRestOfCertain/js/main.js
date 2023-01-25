// Input will be a positive integer. Not a bigInt. Call it upperLimit.
// The goal is to find 2 numbers which satisfy the conditions
//m,n
//upperLimit>m>n>0
//(m+n)^(0.5) => an integer.
//(m-n)^(0.5) => an integer.

//return the m and n as an array [m,n]
//if there is more than one pair available, report the one with the largest m.
//if m's are the same then report the one with the largest n.

//10 => [5, 4]
//30 => [29, 20]
//50 => [45, 36]

function closestPairTonum(upperLimit) {
    //declare m and n
    //declare a flag to break out of loops
    
    //begin a set of nested for loops that count DOWN.
    //choose an m with the outter one.
    //Choose an n with the inner one.
    //do the calculations to examine if they meet conditions.
    //we'll use floor for this to test to see if it's an integer.
    //If they do, set a flag and break our of both loops.
    //If not, try the next one.
    
    let m,n = 0;
    let f = false;
    
    for (m=upperLimit-1;m>0;m--){
      for (n=m-1;n>0;n--){
        // console.log(m);
        // console.log(n);
        if ((m+n)**(0.5) === Math.floor((m+n)**(0.5)) && (m-n)**(0.5) === Math.floor((m-n)**(0.5))){
        //   console.log(m);
        //   console.log(n);
        //   console.log((m-n)**(0.5));
        //   console.log(Math.floor((m-n)**(0.5)));
        //   console.log((m-n)**(0.5) === Math.floor((m-n)**(0.5)));
          f = true;
          break;
        }
      }
      if (f) break;
    }
    
    return [m,n];
  }
  
  console.log(closestPairTonum(10), [5, 4]);
  console.log(closestPairTonum(30), [29, 20]);
  console.log(closestPairTonum(50), [45, 36]);