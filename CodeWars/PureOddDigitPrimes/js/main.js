//Input will be an integer. Not a bigInt. Positive.
//Find prime numbers with only odd digits. This is a, 'pure odd digit prime'. 
//any odd inputs - integer represented as a string "three hundred"?

//return an array: 
///[number of odd digit primes below n, 
//largest pure odd digit prime smaller than n, 
//smallest pure odd digit prime higher than n.]

//onlyOddDigPrimes(20) ----> [7, 19, 31]
//onlyOddDigPrimes(40) ----> [9, 37, 53]
//onlyOddDigPrimes(0) => [0,undefined,0]

//should the first term be inclusive? No, it isn't. ex
////onlyOddDigPrimes(37) ----> [9, 37, 53]

function onlyOddDigPrimes(n) {
    //find all the primes below n
    let primes = [];
    for (let i=0;i<=n;i++){//Choose number to inspect
        if (isPrime(i)){
            primes.push(i);
        }
    }
    // console.log("all primes: below n", primes);

    //Now identify which have only odd digits. I suppose filter would work, but I'm doing it with a for loop here.
    let oddDigPrimes = [];
    for (let i=0;i<primes.length;i++){
        if (isOddDig(primes[i])){
            oddDigPrimes.push(primes[i]);
        }
    }
    // console.log("odd dig primes", oddDigPrimes);

    // Now look upwards.
    let counter = n;
    do{ 
        counter++;
    }
    while(!(isPrime(counter) && isOddDig(counter)));//If the counter number is not both prime and only odd digits, then continue searching. If both conditions are met, then stop.

    function isPrime(num){
        for (let j=2;j<num;j++){//Check it for factors
            if (num%j===0){
                return false;
                break;// it's not prime because we found a factor
            }
        }
        return true;
    }

    function isOddDig(num){
        let arr = num.toString().split("").map(el=>Number(el));
        for (let i=0;i<arr.length;i++){
            // console.log(arr[i])
            if (arr[i]%2 === 0){
                // this digit is even so return false
                return false;
            } else {
                continue;
            }
        }
        return true;
    }
    return [oddDigPrimes.length-1, oddDigPrimes[oddDigPrimes.length-1], counter];
}

console.log(onlyOddDigPrimes(20), [7,19,31]);
console.log(onlyOddDigPrimes(40), [9,37,53]);
// console.log(onlyOddDigPrimes(0), [0,null,1]);

