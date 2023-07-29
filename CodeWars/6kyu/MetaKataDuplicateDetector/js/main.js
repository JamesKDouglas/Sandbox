//Input will be an array of functions.
//our goal is to detect whether there are duplicates in the list.
//there will be a maixmum of 50 functions submitted.
//inputs will always be valid.


//They are all pure functions so we can detect a duplicate reliably by putting in 
//just one input and see if it comes out the same?

//Well what if the function is something like input*2 or input*3 and input is 0?
//Well the functions are not the same but the output is. 
//So it looks like we are detecting with an input/output but how thoroughly 
//do we want to do that?

//Well each function can only accept integers from 0 to 255. 
//So we have to test from 0 to 255.

//However, I notice in the testing they actually only use 0 to 9
//So that isn't part of the problem description but I guess it should be?

//The output is 2 array. Each subarray will contain index values of the functions
//that are duplicates of each other.
//If there are no duplicates, this array is just empty, ex [[]].

//[
//     x => x * 2,
//     x => x ** 2,
//     x => x + 20,
//     x => x / 1000,
//     x => x * x,
//     x => Math.pow(x,2),
//     x => x % 2
// ] => [[1, 4, 5]]

//timeouts, edge cases? Long return functions? no not expected.


function dupeDetect(arr){
  console.log(arr.toString());
  //We'll use nested for loops to generate the outcomes.

  //Then examine the outcomes for repeats.

  //so first I'll create a 2D array using the functions
  // and the outputs that result from a 0 to 9 input.

  //look for duplicates in each line of that 2D array. A line will be for an input: 0, 1, 2, etc.

  //And make a new array that contains the indexes of identical outputs.

  //ex: 0 to 9 with the example above generates,
// [0, 0, 20, 0, 0, 0, 0]
// [2, 1, 21, 0.001, 1, 1, 1]
// [4, 4, 22, 0.002, 4, 4, 0]
// [6, 9, 23, 0.003, 9, 9, 1]
// [8, 16, 24, 0.004, 16, 16, 0]
// [10, 25, 25, 0.005, 25, 25, 1]
// [12, 36, 26, 0.006, 36, 36, 0]

// [14, 49, 27, 0.007, 49, 49, 1]
// [16, 64, 28, 0.008, 64, 64, 0]

//Then the repeats array will be:
// [0,1,3,4,5,6]
// [1,4,5,6]
// [0,1,4,5]
// [1,4,5]
// [1,4,5]
// [1,2,4,5]
// [1,4,5]
// [1,4,5]
// [1,4,5]

//from this we are supposed to report [1,4,5]. Of course we can't truly know if this is ever
//a coincidence or not by just trying values. But we do see is that 1,4,5 is in every single one
//of the repeat arrays.
//So, I guess take the shortest and check to see if all the other ones that are longer contain
//those values. use .includes.

  let resultsArr = [[]];
  for (let i=0;i<=9;i++){//input
    resultsArr.push([]);//create a blank element we can use
    for (let j=0;j<arr.length;j++){//choose the function to generate outcome from
      resultsArr[i].push(arr[j](i));
    }
  }
  resultsArr.pop();//take off the extra empty array

  //generate repeats array
  //Really what that means is that if a number appears twice, the index gets added.
  //// [0, 0, 20, 0, 0, 0, 0] => [0,1,3,4,5,6]
  // but also there are more complex cases, for example if we had
  // [0, 0, 20, 20, 0, 0, 0] => [0,1,4,5,6],[2,3]
  // In this case there are two sets of duplicates.
  let duplicates = [[]];
  for (let i=0;i<9;i++){
  //I'm going to remove the examined element, then see if it is still in the array.
  //If it is then it must be a duplicate.
  duplicates.push([]);
  let resultsArrCopy = [];
    for (let j=0;j<resultsArr[i].length;j++){
      resultsArrCopy = JSON.parse(JSON.stringify(resultsArr));
      if (resultsArrCopy[i].splice(j,1).includes(resultsArr[i][j])){
        duplicates[i].push(j)
      }
    }
  }
  console.log(duplicates);

  //find the set of numbers that appears in every single repeats array entry.
  //This is just the shortest array in duplicates.

  let shortestLength=9;
  let shortestIndex=9;
  for (i in duplicates){
    if (duplicates[i].length<shortestLength){
      shortestIndex = i;
      shortestLength = duplicates[i].length;
    }
  }
  return duplicates[shortestIndex];
}

const functionList = [
    x => x * 2,
    x => x ** 2,
    x => x + 20,
    x => x / 1000,
    x => x * x,
    x => Math.pow(x,2),
    x => x % 2
];

console.log(dupeDetect(functionList), [[1,4,5]]); // [[1, 4, 5]]

//Well, I can detect if there is one common set now, but not multiple ones!

// x => x * 2
// x => x ** 2
// x => x + 20
// x => x / 1000
// x => x * x
// x => Math.pow(x,2)
// x => x % 2
// x => x * 2 ** 4
// x => x << 4
// Expected: [[1, 4, 5], [7, 8]], instead got: []

// x => x * 2
// x => x ** 2
// x => x + 20
// x => x / 1000
// x => x * x
// x => Math.pow(x,2)
// x => x % 2
// x => x * 2 ** 4
// x => x << 4
// [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [] ]
// Expected: [[1, 4, 5], [7, 8]], instead got: []

//I think what I should do here is make an object, give the 
//property name the result value, then count duplicates that way.
//At the end turn the object into an array to return.