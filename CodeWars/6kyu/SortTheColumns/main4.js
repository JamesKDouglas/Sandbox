//Input is a csv file, delivered as a string.

//The file contains a table with columns in it. 

//The columns are separated with semicolons. 

//Write a method that sorts the columns by the names of the columns alphabetically (case insensitive)

//return a string.

function sortCsvColumns(csvFileContent) {
    //I'm having trouble with lexicographic sorting. 
  
    //Lets try some things
  
    let arr = ["b","c","D","A","F"];
    arr = arr.map(a=>a.toLowerCase());
    console.log(arr.sort((a,b)=>a.localeCompare(b)));
  }
  sortCsvColumns();