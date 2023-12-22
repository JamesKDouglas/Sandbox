//Input of an array of arrays containing integers from 1 to 9, 9 arrays long
//(valid)
//There can be a 0, but that makes the input invalid. 
//if there is a repeat digit for a line or column, the input is invalid
//no integers over 9.

//No floating points/decimals. 

//the form will be,
//[[line],[line],[line]...]
//Which represents a Sudoku board.
//The lines are series of 9 digits as in [1,2,3,4,5,6,7,8,9]
//There are 9 lines per board.

//our goal is to determine if this is a valid Sudoku solution.

//That means 
//each line contains only the digits from 1 to 9, with no repeats, 
//Each column contains only the digit from 1 to 9 with no repeats,
//each 3x3 square from the top left, contains the digits 1 to 9.
//This 3x3 is a "box".

//If the board is valid return true.
//otherwise return false.

//timeout limits? No.
//"1". No not gonna happen.

function validateSudoku(board) {
    //early returns:
    //look for zeros.
    //nested for loop to check every value.
    
    //Then check every line for duplicates.
    //In order to do that we'll make an object with a property of each integer.
    //We go through the line and assemble the object.
    //if we find that the number exists already we will return false. 
    
    //we could use an array method to find the integer in an array. it would work but be a bit slower.
    
    //Then, check every column in the same way.
    
    //if every line and column pass we haven't returned false yet, then return true.
    
    //check lines
    let lineObj = {};
    for (let i=0;i<board.length;i++){
      for (let j=0;j<board[i].length;j++){
        if (lineObj[board[i][j]]){
          return false;
        } else if (lineObj[board[i][j]] === 0){
          return false;
        }
        else {
          lineObj[board[i][j]] = true;
        }
      }
    }
    
    //check columns
    let columnObj = {};
    for (let i=0;i<board.length;i++){
      for (let j=0;j<board[i].length;j++){
        if (lineObj[board[i][j]]){
          return false;
        } else if (lineObj[board[i][j]] === 0){
          return false;
        }
        else {
          lineObj[board[i][j]] = true;
        }
      }
    }
    
  }
  
  console.log(validateSudoku(
       [[5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5]]), false));
  console.log(validateSudoku(
       [[1,1,1,1,1,1,1,1,1],
        [2,2,2,2,2,2,2,2,2],
        [3,3,3,3,3,3,3,3,3],
        [4,4,4,4,4,4,4,4,4],
        [5,5,5,5,5,5,5,5,5],
        [6,6,6,6,6,6,6,6,6],
        [7,7,7,7,7,7,7,7,7],
        [8,8,8,8,8,8,8,8,8],
        [9,9,9,9,9,9,9,9,9]]), false));
  console.log(validateSudoku(
       [[5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]]), true));
  console.log(validateSudoku(
       [[1,3,2,5,7,9,4,6,8],
        [4,9,8,2,6,1,3,7,5],
        [7,5,6,3,8,4,2,1,9],
        [6,4,3,1,5,8,7,9,2],
        [5,2,1,7,9,3,8,4,6],
        [9,8,7,4,2,6,5,3,1],
        [2,1,4,9,3,5,6,8,7],
        [3,6,5,8,1,7,9,2,4],
        [8,7,9,6,4,2,1,5,3]]), true));
  console.log(validateSudoku(
       [[1,3,2,5,7,9,4,6,8],
        [4,9,8,2,6,0,3,7,5],
        [7,5,6,3,8,4,2,1,9],
        [6,4,3,1,5,8,7,9,2],
        [5,2,1,7,9,3,8,4,6],
        [9,8,7,4,2,6,5,3,1],
        [2,1,4,9,3,5,6,8,7],
        [3,6,5,8,1,7,9,2,4],
        [8,7,9,6,4,2,1,5,3]]), false));
  console.log(validateSudoku(
       [[1,3,2,5,7,9,4,6,8],
        [4,9,8,2,6,1,3,7,5],
        [1,5,6,3,8,4,2,1,9],
        [6,4,3,1,5,8,7,9,2],
        [5,2,1,7,9,3,8,4,6],
        [9,8,7,4,2,6,5,3,1],
        [2,1,4,9,3,5,6,8,7],
        [3,6,5,8,1,7,9,2,4],
        [8,7,9,6,4,2,1,5,3]]), false));`