//The input will be an integer. positive. Call it n.
//bigInt? no.

//the goal is to generate a multiplication table that is nxn.
//ex n=3
//1 2 3 
//2 4 6 
//3 6 9

//return the table as an array, ex:
//[[1,2,3], 
//[2,4,6], 
//[3,6,9]]

//edge cases? n=0? not expected.
//invalid like if n=a; No, base ten not expecte.
//job size? not really no. 


let multiplicationTable = function(size) {
    console.log("size ", size);
    //nested loops. for loops.
    
    let mTable = [];
    let mTableLine = [];
    //   outter loop will determine the line, the inner on the elements. 
    for (let i=0;i<size;i++){
      console.log(`Build line ${i}`);
      for (let j=0;j<size;j++){
        console.log((i+1)*(j+1));
        mTableLine.push((i+1)*(j+1));
      }
      mTable.push(mTableLine);
      mTableLine = [];
    }
    return mTable;
  }
  
  console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
    