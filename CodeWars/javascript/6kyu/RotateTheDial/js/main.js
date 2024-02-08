//input will be 2 integers 0 to 9 - x and y.

//The goal is to report the number needed to move from x to y. This is z.

// the system can only track 1 digit. So 9 rolls over to 0, or backwards 0 to 9.

// sometimes this is just y-x. But whenever there is 
// rollover of course that doesn't work.

// Report the number lowest in magnitude.
// ex:
// (1,3) => 2
// (5,2) => -3
// (7,2) => -5
// (9,1) => 2  there is a rollover here.
// (1,9) => -2 rollover the other way. Note that we don't report 8 here.

// 2 edge cases for rollover. - is fine.
// 1200ms timeout. job size and timeout not a problem.

// if two solutions are the same return the -ve.


function f(x,y) {
  //   2 rollover cases
  //   magnitude check
    
  //   lets run some checks on x and y.
  //   [0,1,2,3,4,5,6,7,8,9]
    
  //   lets do some counting.
  //   which is larger x-y or y-x
  //   if y-x is 5, report -5.
  //   the solution is never larger than 5 in magnitude. so if abs(x-y)>5, take 
  //   10-abs(x-y). 
  //   Sign? keep it straight.
    
    m=Math.abs(y-x)
    s=0
    if(m>=5&&y-x>0){
      s=m-10
    } else if (m>=5&&y-x<0){
      s=10-m
    } else if (y-x>0) {
      s=y-x
    } else if (y-x<0) {
      s=y-x
    }
    return s;
  }
  
  console.log(f(1,3), 2)
  console.log(f(5,2), -3)
  console.log(f(7,2), -5)
  console.log(f(9,1), 2)
  console.log(f(1,9), -2)