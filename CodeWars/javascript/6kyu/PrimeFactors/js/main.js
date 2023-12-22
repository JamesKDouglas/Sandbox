//The input is an integer.

//The goal is to determine the prime factors of the integer, except the integer
//itself.

//ex:
// 1=> []
//1 has no prime factors except itself.
//8 => [2,2,2]
//This list of factors together make 8 and each is prime.
//12 => [2,2,3]

//Return the list as an array of integers.

//edge cases? we noted 1. 0 will be the same. No negatives.
//so why does one return []? Why not [1,1] or any series of 1?

//edge case: input is prime. so the output will be only [1, prime];

//timeouts? 12 000 ms.
//invalid inputs? Not expected.
//Two possible lists? Just return one of them. 

//Are there cases where there is no possible answer?
//20 => 10, 2 => 5,2,2
//well if that's the case return [];


//exclude 1 as a factor
//ex  3 => [3]

let factors = [];

function primeFactors(n) {
  // console.log("examining", n);
  //This is a problem that could be solved with recursion

  //But since we only can take 1 input we need to make a subfunction

  //First, take the input and find a prime factor. Add that to the list.
  //Take the matching factor and determine if it is prime. If not, call 
  //the functioni again and to search for prime factors. If it is, that's the 
  //base case so return

  if (n===1) return [];
  
  let isPrime = (num) => {
    // console.log("checking to see if ", num, " is prime.")
    for (let i=2;i<num;i++){
      if (num%i === 0){
        // console.log("nope not prime");
        return false
      }
    }
    // console.log("yes, it is!")
    return true;
  }

  if (isPrime(n)){
    return [n];
  }

  function primeFactorsRec(n,factors){    
    // console.log(factors);

    for (let i=2;i<n;i++){
      if (isPrime(i)){
        //then we can proceed to test to see if it's a factor of n
        if (n%i === 0){
          //found a factor! Now lets break down the other factor, unless it's already prime
          // console.log("found a prime factor! : ", i);
          // console.log("try to push it to the array:, ", factors);
          factors.push(i);
          // console.log(factors);

          if (!isPrime(n/i)){
            // console.log("cofactor is not prime. Break it down. Cofactor is: ", n/i );
            // console.log(factors);
            primeFactorsRec(n/i, factors);
          } else {
            //the cofactor is also prime so we are done.
            // console.log("the cofactor is prime: ", n/i, "so we are done")
            factors.push(n/i);
            // console.log(factors);
            return factors;
          }
        } else {
          //i isn't a factor so keep searching
          continue;
        }

        return factors;
      }  
    }
  }

  return primeFactorsRec(n, new Array(0));

}

console.log(primeFactors(1), []);
console.log(primeFactors(8), [2,2,2]);
console.log(primeFactors(12), [2,2,3]);