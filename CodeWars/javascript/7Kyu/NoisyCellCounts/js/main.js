//input will be a series of integers in an array. Positive integers. Not BigInts.

//The goal is to look at the sequence and look for a drop of 1. This represents
//an error because the integer represents a count that can only go up.
//Then correct the error by raising that incorrect value by 1.

//It is possible to have a drop of 1, representing an error, then the value to repeat.
//In this case the whole sequence must be changed

//the array is never empty.

//edge cases? no zeros. no negatives. no strings.
//timeouts or job size? don't worry about it.
//mutate? sure.

//ex:
//one error
// [1, 1, 2, 2, 1, 2, 2, 2, 2] => [1, 1, 2, 2, 2, 2, 2, 2, 2]
//two errors
// [1, 1, 2, 2, 1, 2, 1, 2, 2] => [1, 1, 2, 2, 2, 2, 2, 2, 2]
//a zero
// [1, 0, 2, 2, 2, 2, 2, 2, 2] => [1, 1, 2, 2, 2, 2, 2, 2, 2]
// An error sequence
// [1, 1, 2, 1, 1, 1, 1, 2, 2] => [1, 1, 2, 2, 2, 2, 2, 2, 2]


function cleanedCounts(data) {
    let dataCopy = data.slice();
    //For just one error:
    //use a for loop. Compare the values. If you see a drop, correct it.
    //But for the sequence it's a bit harder?


    //return the array.
    let dipFlag = false;
    for (let i=0;i<data.length;i++){
      if (dataCopy[i+1]<dataCopy[i]){
        dataCopy[i+1]++;
      } 

    }
    return dataCopy;
  }
  console.log(cleanedCounts([1, 1, 2, 2, 1, 2, 2, 2, 2]), [1, 1, 2, 2, 2, 2, 2, 2, 2])
  console.log(cleanedCounts([1, 1, 2, 2, 1, 2, 1, 2, 2]), [1, 1, 2, 2, 2, 2, 2, 2, 2])
  console.log(cleanedCounts([1, 0, 2, 2, 2, 2, 2, 2, 2]), [1, 1, 2, 2, 2, 2, 2, 2, 2])
  console.log(cleanedCounts([1, 1, 2, 1, 1, 1, 1, 2, 2]), [1, 1, 2, 2, 2, 2, 2, 2, 2])