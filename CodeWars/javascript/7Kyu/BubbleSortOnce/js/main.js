//The input will be an array of positive integers.
//The array will not be empty

//The output should be just 1 pass of the array, using bubble sort.

//example: 
//[9, 7, 5, 3, 1, 2, 4, 6, 8] => [7, 9, 5, 3, 1, 2, 4, 6, 8]
//[7, 9, 5, 3, 1, 2, 4, 6, 8] => [7, 5, 9, 3, 1, 2, 4, 6, 8]
//[7, 5, 9, 3, 1, 2, 4, 6, 8] => [7, 5, 3, 9, 1, 2, 4, 6, 8]

//Do not mutate the original array.

//Edge cases? Largest array expected, timeouts? Nope. Zeros? negative or positive zero?

function bubblesortOnce(a) {
    //copy the array with slice().
    //Use a for loop to modify the copy.
    //Go through each element.
    //Use two variables to store the elements.
    //Test the elements against each other, then use an if statement to place them
    //back into an array.
    //This has been one pass.
    //return the copied and modified array.
    
    let newArr = a.slice();
    let one = 0;
    let two = 0;
    let holder = 0;
    for (let i=0;i<newArr.length-1;i++){
      one = newArr[i];
      two = newArr[i+1];
      if (one>two){
        holder = two;
        two = one;
        one = holder;
      }
      console.log(newArr);
      newArr[i] = one;
      newArr[i+1] = two;
    }
    
    return newArr;
  }
  
  console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);
//   console.log(bubblesortOnce([7, 9, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 9, 3, 1, 2, 4, 6, 8]);
//   console.log(bubblesortOnce([7, 5, 9, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 9, 1, 2, 4, 6, 8]);
  