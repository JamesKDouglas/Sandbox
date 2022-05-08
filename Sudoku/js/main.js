let puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

  let solution = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]];

function sudoku(puzzle) {
    //strategy 1: fill it with just each array getting filled with 1-9 digits.
    //Then check the next dimensions.
    //if it fits then great. If not, try again!

    console.log(puzzle);
    //fill
    let digits = [1,2,3,4,5,6,7,8,9];
    let tempPuzzle = puzzle;//I just want a shallow copy I can edit. Is this right?

    let tempPuzzle2 = [];
    let tempPuzzle3 = [];
    let tempPuzzle4 = [];
    for (i=0;i<9;i++){
        for (j=0;j<9;j++){
            tempPuzzle2[i] = tempPuzzle[i].filter(x => x!=0);
        }
    }
    //Now that the numbers that do appear are collected, subtract them from the 1-9.
    //I could probably just do this once by taking out the indexes that are nonzeros.
    for (i=0;i<9;i++){
        for (j=0;j<tempPuzzle2[i].length;j++){
            tempPuzzle3[i] = digits.filter(el => !tempPuzzle2[i].includes(el));
        }
    }
    //console.log(tempPuzzle2)
    //console.log(tempPuzzle3) 
    //now I have a set of numbers to choose from. I'll put them randomly into the array in the zero spots

    for (i=0;i<9;i++){
        for (j=0;j<tempPuzzle3[i].length;j++){
            //choose a random number from the prepared set - numbers to fill the first array from 1 to 9

            let randNumIndex = Math.round(tempPuzzle3[i].length*Math.random());//now I have an index
            //take that out of the array
            let randNum = tempPuzzle3[i].slice(randNumIndex, randNumIndex+1);
            //console.log(tempPuzzle);
            //
            for (k=0;k<9;k++){
                if (tempPuzzle[i][k] = 0){//then we should replace it
                    tempPuzzle[i][k] = Number(randNum);
                    console.log(`new number into the board: ${tempPuzzle[i][k]}`);
                } 
        }   }
    }
//    console.log(`${tempPuzzle}`);

    //then choose random ones and slot them into the array.
}

