//The input is an integer. That is the index of the number in the fibonacci sequence.
//return just the last digit of that number.

//First 2 numbers are 1,1.

//so fibonacci is 1,1,2,3,5,8,13..

//The index can be very large so brute force will not work within the timeout.
//timeout 12 000 ms
//0? indexing starts at 1.

function lastFibDigit(n){
  //How should we go faster than just brute force? 
  //since we want only the last digit we can work with just that. Rollover after we get to 10!
  let first = 1;
  let second = 2;
  let third = 1;

  //n=3 is a special case
  if (n===3){
    return 2; 
  }

  for (let i=3;i<n;i++){
    third = first+second;
    if (third>=10){
      third = third-10;
    }
    first = second;
    second = third;
    console.log(third);
  }
  return third;

  //we could make this faster because there can only be 9^2 possible sequences.
}

// console.log(lastFibDigit(1),1);
// console.log(lastFibDigit(2),1);
// console.log(lastFibDigit(3),2);
// console.log(lastFibDigit(1000),5);
// console.log(lastFibDigit(1000000),5);

// The above work fine, but this times out:
console.log(lastFibDigit(2275196238983), "?");