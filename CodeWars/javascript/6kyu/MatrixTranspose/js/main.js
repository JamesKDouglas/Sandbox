//input is an array of array integers. It represents a grid of numbers, like:
//  1 2 3 
//  4 5 6
//which will be, [[ 1, 2, 3],[ 4, 5, 6 ]]

//Positive integers only? No we can see negative ones too.

//The job is to transpose the matrix. The transformation we are looking for is 
//reflection around a -45 degree line, from the top left corner to bottom left corner.

//So for the example,
//  1 4 
//  2 5 
//  3 6

//Which will be returned as an array,
// [[1, 4],[2, 5],[3, 6]]

//How big might an array be? Like how many entries? Don't worry about it.

//Timeouts? Not likely to be a problem.

//BigInts? Nope, none

function transpose(matrix) {
    //Notice in the example how collecting the first element from each inner array
    //creates the new row.
    
    //We'll use a for loop to go through each row in the input array 
    //and collect the elements and put them into a new array structure.
    //This means a set of nested for loops.
    
    let newArr = [];
    let newRow = [];
    for(let i=0;i<matrix[0].length;i++){//row in new (transposed) array.
      newRow = [];
      for (let j=0;j<matrix.length;j++){//Go through each row in the input array
        console.log(matrix[j][i]);
        newRow.push(matrix[j][i]);//retrieve the character from the right index and put it into the new row
      }
      newArr.push(newRow);//add it to the transposed array.
    }
    return newArr;
  }
  
  console.log(transpose([[1,2,3],[4,5,6]]), [[1,4],[2,5],[3,6]]);
  console.log(transpose([[1]]), [[1]]);