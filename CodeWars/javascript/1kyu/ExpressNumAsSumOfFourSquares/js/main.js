// parameters: input a number as high as 2^1024, which is about 10^308
// return: four factors that when squared, equal the input number.
// example: 310 = 17^2 + 4^2 + 2^2 + 1^2;
// 3 = 1^2 + 1^2 + 1^2 +0^2
// lets call the factors a b c d.
// pseudocode:
// input is n.
// There are four degrees of freedom so obviously we can't just solve.
// All we need to do is to find the first example of a set of a b c d
// Not too high, not too low. 
// Try zooming in by:
// find sqrt of n.   310 is 17.606 so floor of 17. That's a.
// find the difference, so 310 - 17^2 which is 310-289 = 21 . Call that o.
// Find the sqrt of o. sqrt(21) is 4.58. The floor is 4. That's b.
// find the differnce, so 21-16 = 5. call that p.
// sqrt of 5 is 2.23. so c is 2.
// find the difference so 5-4 = 1. call that q
// find the sqrt of q, which here is just 1. That's c.


//The trick is to make it work with bigInts

//Math.sqrt() can't be used for bigInts. 
//However, I also don't really need to know the square root, just the nearest lower integer.

// a for fill, b and c for balance and d for final push.

//215 : 13 6  is 205 then 3*3 and 1*1.  13 6 3 1the first try algorithm ends up giving 14 4 1 1 which only adds up to 215.
// So if it doesn't work the first time, alter a by decreasin it then carry on.

//
// expected 4089n to equal 4093n

//This solution works fine but times out.
// 106369249365575352836589875696130383747n only takes 165ms on my machine. 

//60 digit num: 500 ms or 120 ms tried 1962 times
//65 digit num: 4000 ms regularly tried 77429 times.
//66 digit num: 19727 ms. or 1365 ms, tried 25636 times. so it or miss
// so it's trying a lot of times. The a-- strategy isn't working very efficiently. Can I better guess at what the next a should be? I could do a binary search sort of thing like instead of a-- go a=a-1000. If it's too low then go up. 



function genBigNum(digs){
    let strNum = "";
    let dig = 0;

    for (let i=0;i<digs;i++){
        dig = (Math.floor(Math.random()*10));
        strNum = strNum.concat(dig);
    }
    return BigInt(strNum);
}
let n = genBigNum(60);
console.log(n);

function sqrt(value) {
    if (value < 0n) {
        throw 'square root of negative numbers is not supported'
    }

    if (value < 2n) {
        return value;
    }

    if (value == 4n){
        return 2n;
    }

    function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }
    return newtonIteration(value, 1n);
}

const fourSquares = function(n){

    let a,b,c,d = 0n;
    let o,p,q = 0n;
    let check = 0n;

    a = sqrt(n); //initialize loop
    console.time();
    let counter = 0;
    do {
        o = n-a*a;
        b = sqrt(o);
        p = o-b*b;
        c = sqrt(p);
        q = p - c*c;
        d = sqrt(q);
        check = a*a + b*b + c*c + d*d;
        a--;
        counter++;
    }
    while (check != n)
    console.timeEnd();
    a++;
    console.log(`tried ${counter} times`);
    return [a, b, c, d]; 
  
}


   console.log(fourSquares(n));