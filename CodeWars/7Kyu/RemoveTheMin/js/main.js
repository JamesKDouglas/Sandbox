//input: array of positive integers of number type.
//"two". No bigInts. 

//The integers represent a score for museum items 

//the goal is to remove the lowest scored item while leaving the rest of the array intact

//if there are two that are the same remove the one that is in the lower index.

//the output will be an array of integers.

//[1,2,3,4,5] => [2,3,4,5]
//[5,3,2,1,4] => [5,3,2,4]
//[2,2,1,2,1] => [2,2,2,1]
//[] => []


function removeSmallest(numbers) {
  
    //early return if numbers is empty.
    if (numbers.length === 0) return [];
    
    //Identify the magnitude of the smallest element. Math.min for that.
    let minVal = Math.min(...numbers);
  
    //hunt from the left to find the index. findIndexOf does that.
    let leftIndex = numbers.indexOf(minVal);
    console.log(leftIndex);

    //Make a copy, then mutate it.
    let nums = numbers.slice();
    nums.splice(leftIndex,1);

    return nums;
  }
  
  console.log(removeSmallest([1,2,3,4,5]), [2,3,4,5]);
  console.log(removeSmallest([5,3,2,1,4]), [5,3,2,4]);
  console.log(removeSmallest([2,2,1,2,1]), [2,2,2,1]);
  console.log(removeSmallest([], []));