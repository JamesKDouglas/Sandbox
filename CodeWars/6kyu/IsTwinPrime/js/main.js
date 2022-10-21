function isTwinPrime(n){
    
    //is n even prime?
    for (let i = 2;i<n;i++){//We could save computing power by skipping all even numbers as an obvious first order correction.
        if (n%i == 0){//not prime!
            return false;
        }    
    }
    let nearbyPrime = false;
    let factorFound = false;
    // if it is, carry on and check n-2
    n=n-2;
    for (let i = 2;i<n;i++){
        if (n%i == 0){//not prime!
            factorFound = true;
            continue;
        }
        if(i == n-1 && factorFound == false){//very last check, and no factor found
            nearbyPrime = true;
            return true;
        }
    }

    //Perhaps n-2 is not a prime. Check n+2.
    factorFound = false;
    n=n+4;

    for (let i = 2;i<n;i++){
        if (n%i == 0){//not prime!
            factorFound = true;
            continue;
        }
        if(i == n-1 && factorFound == false){//very last check, and no factor found
            nearbyPrime = true;
        }
    }

    return nearbyPrime;
}

let n = 1;
console.log(isTwinPrime(n));