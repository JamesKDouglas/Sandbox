// function isPrime(num) {
//     //early return;
//     if (num<=1){
//         return false;
//     }
//     for(let i = 2;i<num;i++){
//         if (num%i ==0){
//             return false;
//         }
//     }
//     return true;
// }
//This works but it times out on 1961568187; Even up to n/2 times out.

// How can I do some faster returns? Well if it ends in zero or 5 or an even digit. In other words, add an early return that examines the last digit. 
//max number is 2^31, idk if that is a safe integer.
//The only way to tell if something is prime is to check all the factors. Right?
//The only question is how to eliminate factors quickly. Some can be eliminated in batches.

// -if it's negative or zero or 1 then false.
// If the number ends in a 5

// Then start the main bit:

// Only count up to half the number
// First is two of course.
// then... well you can't really skip anything.  
 
// function isPrime(num) {

//     //early returns
//     if (num<=1){
//         return false;
//     }
//     if (num%10 == 5){
//         return false;
//     }

//     // Main bit

//     for(let i = 2;i<=num/2;i++){
//         if (num%i ==0){
//             return false;
//         }
//     }
//     return true;
// }
// still times out. This should take about 40% of the time but anyways it is still too slow


//this works fast enough, completing in 219ms.:
function isPrime(num) {
    console.log(`number: ${num}`);
    //early returns
    if (num<=1){//negative numbers get rejected. They are not prime since they all have factor -1. Zero and one are also not considered prime.
        console.log(`number is less than or equal to one - not prime.`)
        return false;
    } else if (num==2){
        console.log(`number is 2 - prime`);
        return true;
    }

    //MaxCheck algorithm: We work only with integers. If a number is indivisible by, for ex. up to 5, there is no point in checking beyond n/5 since the paired factor would have to be smaller than n/5 to make n of course. So the potential factor pool shrinks from both ends. 

    let maxCheck = 0;

    for(let i = 2;i<=Math.ceil(num/maxCheck);i++){
        //console.log(`checking factor ${i}`)
        if (num%i ==0){
            return false;
        }
        maxCheck = i;
    }
    return true;
}
let n = 4;
console.log(isPrime(n));

//I see others setting the upper limit as the square root, which also makes sense.

