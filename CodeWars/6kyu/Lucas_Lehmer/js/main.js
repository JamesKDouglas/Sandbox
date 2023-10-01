//The input will be p, an integer.

//The goal is to deteremine Mn and then decide if Mn is a prime number

//Mp = 2^p -1

//This gives you the Mersenne series if we input p as 1, 2, 3, etc.
//Inside that there are a bunch of prime numbers.
//That set is the Mersenne Primes.

//We also know that we can easily test to see if a Mersenne number is prime. 

//For Mersenne numbers there is a prime test:
//if S(p-1) = 0 mod Mp then it's prime.

//The mod notation here is written incorrectly.
// 0 mod Mp is just zero. Divide 0 by Mp and there is a remainder of 0.

//Checking the reference, what they mean is 0 (mod Mp). That is, S(p-1) is evenly
//divisibly by Mp.

//The S series is:
//S(n+1)= S(n)^2 -2
//with S(1) = 4;

//return a boolean.

//invalid inputs/edge cases: Well, we're limited to a small p.
//should use bigInt.
//timeout: 10 000ms. For p=10.
//input will be valid.

lucas_lehmer = function(p) {

  //p into bigInt
  //Ok CodeWars can't use BigInt because it has node under 10.4
  //Declare everything else in bigInt that we will need. All the variable equations.
  let m = 1n;
  let sFirst = 4n;
  let sSecond = 1n;
  let pBI = BigInt(p);
  console.log("p big int:", pBI);

  

  //Generate Mp
  //Generate S series to find S(p-1)
  //Perform modulo test using S(p-1) and Mp.
  m = 2n**pBI - 1n;
  // console.log("Mp:", m);

  for (let i=1n;i<pBI-1n;i=i+1n){
    // console.log("sFirst:", sFirst);
    sSecond = sFirst**2n - 2n;
    sFirst = sSecond;
  }
// console.log("S(p-1):", sFirst);
  
// console.log("sFirst%m:", sFirst%m);
  if (sFirst%m === 0n){
    return true;
  } else {
    return false;
  }
  
}

// console.log(lucas_lehmer(2), true);
//Well the unput is p. The prime test only holds if p is an odd prime. 2 is not an odd prime.

console.log(lucas_lehmer(7), true);
console.log(lucas_lehmer(10), false);

//Ok so one of the problems here is that we need to use bigInt.
// But BigInt was only introduced into Node 10.4. And codewars doesn't let us use that.
//So I can do this problem locally but not on Codewars!