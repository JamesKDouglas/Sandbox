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


// function f(x,y) {
  //ccw -, cw +

  // 0 to 3 => cw 3-0: 3. ccw 3-10: -7
  // 9 to 2 => cw 12-9: 3. ccw 2-9: -7

  // is y larger or smaller than x?
  // if y is larger than x:
    // clockwise, the distance is y-x.
    // counterclockwise needs a rollover the distance is y-(10+x)
  // if y is smaller than x:
    // clockwise needs a rollover distance is (10+y)-x
    // ccw is x-y

  // // calculate distances and handle zero case
  // if (y>x){
  //   cw=y-x;
  //   ccw=-(y-(10+x));
  // } else if (y<x){
  //   cw=10+y-x;
  //   ccw=-(x-y);
  // } else return 0 //x and y are the same.

  // // handle sign and parity case
  // if (cw<ccw){
  //   m = cw;
  // } else if (cw>ccw){
  //   m = -ccw;
  // } else return -5 //cw and ccw are the same

  // return m
    // m=Math.abs(y-x)
    // s=0
    // if(m>=5&&y-x>0){
    //   s=m-10
    // } else if (m>=5&&y-x<0){
    //   s=10-m
    // } else if (y-x>0) {
    //   s=y-x
    // } else if (y-x<0) {
    //   s=y-x
    // }
    // return s;
  // }

  // eighdreeuhn provides
  f=(x,y)=>(y+15-x)%10-5
  
  console.log(f(1,3), 2)
  console.log(f(5,2), -3)
  console.log(f(7,2), -5)
  console.log(f(9,1), 2)
  console.log(f(1,9), -2)

  // ok but how does one arrive at that?
  // Well, use modulo for a dial. But we have to stay above zero 
  // so use a spacer.
  // the difference is y-x. so (y-x+spacer)%10.
  // how large should the spacer be?
  // well if x=y the final answer is zero. 
  // if they are at maximum distance from each other final answer is -5
  //x=0, y=5 
  // spacer of 15. then subtract 5.