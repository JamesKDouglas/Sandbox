//the inputs will be an array and an element to search for. Data types unknown.

//find where the element is in the array and return the index.

//if it isn't found, return the string "Not found"

//ex:
// [2,3,5,7,11],5 => 2
// [2,3,5,7,11],11 => 4
// [2,3,5,7,11],5 => 1


function find(array, element) {
    let i = array.findIndex(el => el===element);
    return (i>-1) ?  i :  "Not found";
  }