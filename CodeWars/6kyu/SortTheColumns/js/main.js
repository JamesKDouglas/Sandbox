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

  
}

let str = "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n"
                   + "17945;10091;10088;3907;10132\n"
                   + "2;12;13;48;11";

console.log(sortCsvColumns(str), "just try it.")