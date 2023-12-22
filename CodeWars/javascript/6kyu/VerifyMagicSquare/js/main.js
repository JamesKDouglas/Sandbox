//The input will be a 2dimensional array, nxn with 
//2<n<10, as well as an integer on it's own called 'gap'

//We have to inspect the array and decide if it is a 
//"magic square"

//That is, it must meet the following criteria to be a magic square:

//It must contain a series of integers separated only by 
//'gap'. For example if gap is 2, 2,4,6,8...
//It must have every row, column and diagonal add up to the same number

//Return true or false - if it is a magic square or not.

//detect invalid inputs? like a letter?
//Job size? don't worry. 
//timeouts? nope.

function isValid(square, gap) {
    //first, check gap.
    //Just collect the integers and sort them, then
    //go through them one by one, or generate a valid
    //set and see if it matchs.
    
    let nums = square.flat(2).sort((a,b) => a-b);
    console.log(nums);
    
    for (let i=1;i<nums.length;i++){
      if (nums[i]-nums[i-1] === gap){
        continue;
      } else {
        return false;
      }
    }

  
    // //Then, do the sums. Rows, columns, diagonals. 
    
    let sum = 0;
    
    //Get the sum from the first row, then the rest have to match
    for (let i=0;i<square[0].length;i++){
      sum += square[0][i];
    }
    console.log(sum);
    
    // //Then check the rest against the reference
    let sum2 = 0;
    
    //rows
    for (let i=0;i<square[0].length;i++){
      for (let j=0;j<square[0].length;j++){
        sum2 += square[i][j];
      }
      if (sum2 === sum){
        sum2 = 0;
        continue;
      } else {
        return false;
      }
    }

    console.log("rows pass");
    
    //columns
    for (let i=0;i<square[0].length;i++){
      for (let j=0;j<square[0].length;j++){
        sum2 += square[j][i];
      }
      if (sum2 === sum){
        sum2 = 0;
        continue;
      } else {
        return false;
      }
    }
    console.log("columns pass");

    // //diagonals
    // //just 2 diagonals
    
    //first diagonal - top left down, across
    for (let j=0;j<square[0].length;j++){
      sum2 += square[j][j];
    }
  
    if (sum2 === sum){
      sum2 = 0;
    } else {
      return false;
    }
  
    console.log("first diagonal pass");

    //second diagonal
    for (let j=square[0].length-1;j>=0;j--){
      //first diagonal - top left down, across
        // console.log("j",j);
        sum2 += square[j][square[0].length-j-1];
        // console.log("element", square[j][square[0].length-j-1]);
        // console.log("sum2 second diagonal", sum2);
    }
    // console.log(sum2);
    if (sum2 === sum){
      sum2 = 0;
    } else {
      return false;
    }

    console.log("second diagonal pass");
    return true;
  }
  
  
  console.log(isValid([
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],1), true);
  console.log(isValid([
    [4, 1, 6],
    [3, 5, 7],
    [8, 9, 2],
  ], 1), false);
  console.log(isValid([
    [9, 2, 7],
    [4, 6, 8],
    [5, 10, 3],
  ],1), true);
  
  