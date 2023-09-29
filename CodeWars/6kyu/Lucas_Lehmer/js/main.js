//The input will be p, an integer.

//The goal is to deteremine Mn and then decide if Mn is a prime number

//Mp = 2^p -1

//This gives you the Mersenne series. Inside that there are a bunch of prime numbers.
//That set is the Mersenne Primes.

//So we can predict that series

//We also know that we can test to see if it's prime. 
//For mersenne numbers there is a prime test:
//if S(p-1) = 0 mod Mp then it's prime.
//0 mod Mp means the S(p-1) is divisible by the mersenne number.

//The S series is:
//S(n+1)= S(n)^2 -2
//with S(1) = 4;


//return a boolean.

//invalid inputs/edge cases: Well, we're limited to a small p.
//should use bigInt.
//timeout: 10 000ms. For p=10.
//input will be valid.

lucas_lehmer = function(p) {
  console.log("p:", p);
  //p into bigInt
  //Ok CodeWars can't use BigInt because it has node under 10.4
  //Declare everything else in bigInt that we will need. All the variable equations.
  let m = 1;
  let sFirst = 4;
  let sSecond = 1;

  //Generate Mp
  //Generate S series to find S(p-1)
  //Perform modulo test using S(p-1) and Mp.
  m = 2**p - 1;
  
  for (let i=1;i<p-1;i++){
    sSecond = sFirst**2 - 2;
    sFirst = sSecond;
  }
  console.log("sFirst:", sFirst);
  
  if (sFirst%m === 0){
    return true;
  } else {
    return false;
  }
  
}

console.log(lucas_lehmer(2), true);
console.log(lucas_lehmer(7), true);
console.log(lucas_lehmer(10), false);