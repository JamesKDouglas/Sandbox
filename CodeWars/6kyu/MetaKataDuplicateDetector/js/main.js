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
	//nested for loops?
  //create a 2D array which has the function and the outputs from 0 to 9 input.
  //Then scan horizontally across that 2D array to find duplicates.
  console.log(arr);
  let resultsArr = [new Array(arr.length)];
//   console.log(arr[0](0));
  for (let i=0;i<9;i++){//input
    for (let j=0;j<arr.length;j++){//function
        console.log("function:", resultsArr);
      resultsArr[j].push[arr[j](i)];
      console.log("push", arr[j](i));
      console.log(resultsArr);
    }
  }
  console.log(resultsArr);
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