//The input will be two arrays. The arrays contain integers.

//The goal is to report the sum of all the elements together. 

//arr1 = [1,2,3,4]
//arr2 = [5,6,7]
//return 28

//bigInts? Nope.
//timeouts? 10 000ms timeout, not an issue.
//No invalid inputs. empty arrays? [] and []? Not expected


function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((el,a)=> el+a, 0) + arr2.reduce((el,a)=> el+a, 0);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);