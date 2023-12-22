//Get two lists of integers, (number type) as arrays.
//The first list is the original collection of integers. The second list is a list of items to remove from the original list. Every item is completely removed, even if it occurs multiple times in the orginal collection.

//ex:
//[1,2,2,2,3], [2] => [1,3]

//[1,222,2], [2] = [1,222]

//null cases must be handled:
//[1,2,3,4,5], [] => [1,2,3,4,5]

//[], [1,2] => []

//modest sized array.

//This is rather a funny sort of recursion, processing on the way down instead of on the upstroke then giving the output as a side effect. 
function arrayDiff(arr1, arr2){
    if (arr2.length === 0){
      return arr1;
    }
    
    let counter = -1;
    let newArr = [];
    
    function manyFilter(arr){
      counter++;
      if ((counter+1) === arr2.length){
        newArr = arr.filter(el => el !== arr2[counter]);
        return;
      } else {
        manyFilter(arr.filter(el=> el !== arr2[counter]))
      }
    }
    
    manyFilter(arr1);
    return newArr;
  
  }
  
  console.log(arrayDiff([1,2,2,2,3], [2]), [1,3]);
  console.log(arrayDiff([1,222,2], [2]), [1,222]);
  console.log(arrayDiff([1,2,3,4,5], [2,4,5]), [1,3]);
  console.log(arrayDiff([1,2,3,4,5], []), [1,2,3,4,5]);
  console.log(arrayDiff([], [1,2]), []);
  
  // let arr = [1,2,3,4,5];
  // console.log(arr.filter(el=>el!==2));
  