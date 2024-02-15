// the input will be an integer equal to or above 1. Call it n.

// find a consecutive series of n odd numbers (integers) that also sums to n^3.

// return an array of the integers.

// ex n=3=>[7,9,11] since there are 3 numbers there and 7+9+11 is 27 which is 3^3

// timeouts 1200ms.
// small job sizes.
// how big is n?

function findSummands(n){

  //take an odd number, starting from 1
  //make an array of the next n numbers (create a series)
  //see if the sum of the series is equal to n^3 
  
//   that only works well for small n.
//   to save memory and go faster, I could calculate the sum on the fly 
//   then if we go over n^3, start subtracting the lower 
  
//   imagine the set as a frame. We just slide it up or down until we hit the right sum
//   when we slide it up it goes up by 4.
//   where should we start the frame? Could be 1 but we could start at n.
//   for n = 3 the solution is,
//   n^2 - 2 + n^2 + n^2+2
//   That's not coincidence, of course. The final power lies in the added n^2s.
  
//   so the central number in the series will always be n^2. The +2s and -2s balance out.
//   which means this also may be solveable only for when n is odd? No, it just means that if n is even,
//   there is no central number and the left one is n^2 -1
  
//   n=4 n^3 = 64. [13,15,17,19]  
  
  let midpt = 0;
  let start = 0;
  if (n%2==0){
//     even
    midpt = n**2 - 1;
    start = midpt - 2*(((n/2)-1))
  } else {
    midpt = n**2;
    start = midpt - 2*(Math.floor(n/2))
  }
  
  
  let series = [];
  for (let i=0;i<n;i++){
    series.push(start+2*i);
  }  
  
  return series;
}

console.log(findSummands(3), [7,9,11])
