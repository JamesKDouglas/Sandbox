
//p  - input a prime number.
//return true orfalse. is it a wilson prime?
//a wilson prime is a whole number when
// ((P-1)! + 1) / (P * P)
//Where P is the prime
//example: 5 is a wilson prime. 9 is not. 7? 721/49 = 14.69 so return false.
//pseudocodoe:
//First, check to see if it is prime.
//then go for Wilson test. Try floor. If Math.floor(num) == num then it's a whole number.
//num = factorial +1/psquared
function amIWilson(p) {
    //first, check prime. This is a very simple way of doing it, but the examples show only very small numbers.
    for(let i=2;i<p/2;i++){
        if (p%i == 0){
            return false;
        }
    }

    //If it's prime then carry on to calculate the terms. 
    //first, that factorial:
    let factorial=1n;
    for (let i=1n;i<p;i++){
        factorial *= i;
    }
    console.log(factorial);


    //ok so the issue is that the factorial must be calculated as a bigInt, otherwise it could fail to calculate the factorial. But once it is a bigInt, do we want to keep it that way? Well maybe not. 

    //is the factorial large? If it's too big we must use bigInt
    if (factorial > BigInt(Math.pow(10,300))){
        //then we have to stay in bigInt territory.
        let outcome = 1n;//initialize as a bigInt
        let bigP = BigInt(p);
        outcome = (factorial+1)/(bigP*bigP)
        if (outcome%1n==0n){
            return true;
        } else {
            return false;
        }
    } else {
        //we must use normal integers. You just can't do both because mixing is not allowed.
        let outcome = 1;//initialize 
        bigInt = Math.intValue(bigInt);
        let bigP = p;
        outcome = (factorial+1)/(bigP*bigP)
        if (outcome%1==0){
            return true;
        } else {
            return false;
        }
    }
}
    
    //There is no way this is an 8kyu. One of the test cases is 241. The factorial of 240 is over 300 digits long. That is bigger than js can normally handle. So that means we have to use BigInt. Doing math with BigInt on both large numbers and 
