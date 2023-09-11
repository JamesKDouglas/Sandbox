//Input is a csv file, delivered as a string.

//The file contains a table with columns in it. 

//The columns are separated with semicolons. 

//Write a method that sorts the columns by the names of the columns alphabetically (case insensitive)

//return a string.

function sortCsvColumns(csvFileContent) {
  //first, divide it up into lines
  
  let arr = csvFileContent.split("\n");
  
  //Now the first one will be the names. 
  //Then each line or array element after is a row in the table.
  
  //Now, split into a 2D array
    
  arr = arr.map(a=>a.split(";"));
  console.log(arr);

  //gather some properties for use later
  let cols = arr[0].length;
  let rows = arr.length;
  
  // I could rearrange the array into elements that are organized into columns.
  //then just sort based on the first element.
  //That sounds a bit better.

  //so, how do I make this array of columns?

  //I'll use a for loop to take apart the 2D array and remake it

  //for loop that tracks the column I'm building.
  //inset for loop that tracks the row I'm entering into the column
  let arrByCol=new Array(cols);

  for (let i = 0;i<cols;i++){
    arrByCol[i] = [];
    for (let k=0;k<rows;k++){
      arrByCol[i].push(arr[k][i]);
    }
  }

  //now sort by column. Simply using a[0]-b[0] won't work. A ternary a[0]>b[0]?-1:1 would be fine though.
  let sortedByCol = arrByCol.sort((a,b)=> a[0].localeCompare(b[0]));

  //Now re-constitute the string before returning it

  let newStr = "";

  //for loop goes row by row for the assembled string
  //that is, first build row 0. Add a newline. Then build row 1.

  for (let row = 0;row<rows;row++){
    for (let col = 0;col<cols;col++){ 
      newStr = newStr + sortedByCol[col][row] + ";";
    }
    //trim extra ;
    newStr = newStr.substring(0, newStr.length-1);
    newStr += "\n"
  }

  // trim extra \n
  return `${newStr.substring(0,newStr.length-1)}`;
}

let str = "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n"
                   + "17945;10091;10088;3907;10132\n"
                   + "2;12;13;48;11";

console.log(sortCsvColumns(str), "just try it.")