//Input of three integers. The first two are "prime factors". That is, numbers
//raised to an integer power. These two numbers are raised to a power then multiplied together.
//The third input integer is a maximum value. The first value is the smallest.

//The goal is to find the largest exponents the initial two integers are raised to
//with the product still below the maximum (third input integer)

//Output will be an array of integers. The first is the first exponent (raising the
//first input integer), the second is the second exponent, the third is the product of the raised
//integers.

//2,3,50 => 48,4,1
//2^4*3^1 = 48

//5,11,1000 => 605, 1, 2 
//5^1*11^2 = 605

//edge cases? p1 or p2 0? error check for that? No don't expect.
//n smaller than p1?
//Timeouts? Job size? Don't worry about it.
//bigInt? No. 

// Y = p1^k1*p2^k2
// find max Y that is not larger than nMax.
// p1<p2

//Solution from cave.on, modified:
function highestBiPrimeFac(p1, p2, nMax) {

  let maxFound = [0, 0, 0]
  let k1 = 1
  let k2 = 0
  let m = 0;

  //Use nested while loops.
  //start with k1 as just 1, then increase k2 until we either go over the last max value or exceed nMax.
  //then, increment k1 and repeat.
  //So we just try all combinations. And we do that by nesting while loops.
  while (p1 ** k1 <= nMax) {
    k2 = 0;
    
    //Note that we evaluate and increment right at the start of the while loop. This avoids going over and having to decrement.
    while ((m = p1 ** k1 * p2 ** ++k2) <= nMax){
      
      
      if (m > maxFound[0])
        maxFound = [m, k1, k2];

    }

    k1++;
  }
  
  return maxFound;
  
}//

// function highestBiPrimeFac(p1, p2, n) {
//   //try starting with k1 and k2 as 1, then increase until we go over 
//   //and step back
//   //Sometimes going the other way results in a higher number. So try both, 
//   //compare then report.
//   function find(p1,p2,n){
//     let k1=1;
//     let k2=1;
//     let t = (p1**k1)*(p2**k2);
//     while (t<n){
//       k1++;
//       t = (p1**k1)*(p2**k2);
//       console.log(p1,p2,k1,k2,t);
//     }
//     k1--;

//     t = (p1**k1)*(p2**k2);
//     while (t<n){
//       k2++;
//       t = (p1**k1)*(p2**k2);
//       console.log(p1,p2,k1,k2,t);
//     }
//     k2--;
//     t = (p1**k1)*(p2**k2);
//     console.log(t);
//     return [t,k1,k2];
//   }

//   let try1 = find(p1,p2,n);
//   console.log(try1);
//   let try2 = find(p2,p1,n);
//   console.log(try2);
//   if (try1[0]>try2[0]){
//     return try1;
//   } else {
//     [try2[2],try2[1]] = [try2[1],try2[2]];
//     return try2;
//   }
//   //Hm this algorithm only works if stepping back by 1 works. If you have to step back by 2
//   //then it doesn't work.
// }

console.log(highestBiPrimeFac(2,3,50), [48,4,1]);
console.log(highestBiPrimeFac(5,11,1000), [605,1,2]);
console.log(highestBiPrimeFac(3, 13, 5000), [4563, 3, 2]);
console.log(highestBiPrimeFac(5,19,50000), [45125, 3, 2]);