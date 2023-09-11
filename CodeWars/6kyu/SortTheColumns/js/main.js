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

  //maybe useful
  let cols = arr[0].length;
  let rows = arr.length;
  
  //I can sort the headers alphabetically. But I need to sort the rest of the data in the same way then.

  //I would like to generate a map like el 1=>pos 2, el2=>pos3 etc.
  //[0,1,2,3,4,5,6] => [3,4,5,6,0,1,2] for [e,f,g,a,b,c,d]
  //Then for each row, rearrange according to the correct pattern.

  //Sort can't report a map like that. But I can make a sorted array then use find to 
  //make the map. 

  //Alternately, I could rearrange the array into elements that are organized into columns.
  //then just sort based on the first element.
  //That sounds a bit better.

  //let sortedHeaders = arr[0].sort((a,b)=>a-b);

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
  console.log(arrByCol);


  //now sort by column
  let sortedByCol = arrByCol.sort((a,b)=> {

  //Sort can't deal with the column titles normally so I used this sort function.

    if(a[0] === b[0]) {
        return 0;
    }

    if (a[0] > b[0]) {
        return 1;
    }

    return -1;
    
  });

  //anyways

  console.log(sortedByCol);

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


  console.log(newStr);
  return newStr;
}

let str = "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n"
                   + "17945;10091;10088;3907;10132\n"
                   + "2;12;13;48;11";

console.log(sortCsvColumns(str), "just try it.")