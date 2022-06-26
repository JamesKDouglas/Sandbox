// parameters passed in is just an integer.
// return the sum of all the multiples of 3 and 5
// example: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// pseudocode:
// I could check every number, but it's not like we are looking for primes.
//Instead, lets do it a faster way and just determine from the outset how many 3s and 5s there will be.
//So, determine how many there are. Then just use a loop to sum them.
//I can just do 3's and 5s separately.

function solution(number){
  
  if(number<0) return 0;

//   console.log(`examining ${number}`);
  let numThrees = Math.floor(number/3);
  let numFives = Math.floor(number/5);
  
  let sum=0;
  //first the three multiples
//   console.log(`numThrees: ${numThrees}`)//excess console logs will crash codewars.
  for (let i=1;i<=numThrees;i++){
    if (i*3!==number && i*3 < number){//only add ones that are below
        // console.log(`adding ${i*3} to the sum`);
        sum += i*3;
        // console.log(sum);
    }
  }

//   Then the fives
//   console.log(`numThrees: ${numFives}`)
  for (let i=1;i<numThrees;i++){
    if (i*5 !== number && i*5 < number && i*5%3 !== 0){//if the number is a multple of three don't count it again.
        
        // console.log(`adding ${i*5} to the sum`);
        sum += i*5;
        // console.log(sum);
    }
  }
//    console.log(sum);
   return sum;
}

solution(20);

