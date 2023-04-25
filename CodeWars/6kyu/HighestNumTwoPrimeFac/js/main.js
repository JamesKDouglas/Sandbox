//Input of three integers. The first two are "prime factors". That is, numbers
//raised to an integer power. These two numbers are raised to a power then added together.
//The third input integer is a maximum value. The first value is the smallest.

//The goal is to find the largest exponents the initial two integers are raised to
//with the sum still below the maximum (third input integer)
//Report the maximum value.

//Output will be an array of integers. The first is the first exponent (raising the
//first input integer), the second is the second exponent, the third is the sum of the raised
//integers.

//2,3,50 => 48,4,1
//5,11,1000 => 605, 1, 2 

//edge cases? 0? error check for that? No don't expect.
//n smaller than p1?
//if p1+p2<nmax there is no solution.
//Timeouts? Job size? Don't worry about it.
//bigInt? No. 

function highestBiPrimeFac(p1, p2, n) {
    //Y = p1^k1 + p2^k2
    //find max Y which is below n.
  
  //"big block little block" approach
  //start with k1 and k2 at 1.
  //Increase k2 until we go over n. Then step back.
  //if p1 is smaller than p2, keeping k1 small will give you the finest resolution
  //with which to approach n.
  
  //No, this won't work I need a new algorithm then.
  
  //first increase k2 until we go over n.
  
  let k1 = 1;
  let k2 = 1;
  
  let t1 = p1**k1;//a bit redundant but fine.
  let t2 = p2**k2;
  
  //big block
  while(t2<n){
    k2++;
    t2 = p2**k2;
    console.log(k2);
  }
  //step back
  k2--;
  k2--;
  t2 = p2**k2;
  console.log("k2 done:",k2, t2)
  //little block
  while((t2+t1)<=n){
    k1++;
    t1 = p1**k1;
    console.log(k1)
  }
  k1--;
  k1--;
  
  return [(t1+t2),k1,k2];
}

console.log(highestBiPrimeFac(2,3,50), [48,4,1]);
// console.log(highestBiPrimeFac(5,11,1000), [605,1,2]);
// console.log(highestBiPrimeFac(3, 13, 5000), [4563, 3, 2]);
