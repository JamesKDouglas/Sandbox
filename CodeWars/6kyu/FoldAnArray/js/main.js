//Input will be an array of integers.

//The goal is to make a new array of integers which "folds" the input.

//fold it x times.

//Then return that array.

//When we say "fold" that is the same as cutting off the second half, reversing it
//and adding each element to the first half
//ex:
//fold 1 time
//[1,2,3,4,5] => [6,6,3]
//the second half is [4,5], reversed is [5,4]. Then add 5 to 1 and 4 to 2.

//fold 2 times
//[1,2,3,4,5] => [9,6];

//fold 3 times
////[1,2,3,4,5] => [15];


//no null values expected. Notice that the central value just stays the same.
//invalid input? Letters? not expected.
//safe integer? Yes always below. 
//timeouts? large arrays? No large arrays, 

function foldArray(array, runs)
{
  //try iteration first.
  //not allowed to modify the original array.
  //so copy it.
  
  //with slice.
  let arrCopy = array.slice();
  
  //   Then move on to folding.
  //Outer loop does the folding x times. So it just goes around x times.
  for (let foldCount=0;foldCount<runs;foldCount++){
    let arrLen = arrCopy.length;
    
    if (arrLen === 1) return arrCopy;
    
    let firstHalf = arrCopy.slice(0, Math.ceil(arrLen/2));
    let secondHalf = arrCopy.slice(Math.ceil(arrLen/2));
    
    secondHalf = secondHalf.reverse();
    
    //combine
    let foldedArr = [];
    for (let i=0;i<Math.floor(arrLen/2);i++){
      foldedArr.push(firstHalf[i]+secondHalf[i]);
    }
    //append if it's an odd number
    if (arrLen%2 === 1) foldedArr.push(firstHalf[firstHalf.length-1]);
    
    arrCopy = foldedArr;
  }
  return arrCopy;
}

console.log(foldArray([1,2,3,4,5],1), [6,6,3]);
console.log(foldArray([1,2,3,4,5],2), [9,6]);
console.log(foldArray([1,2,3,4,5],3), [15]);


