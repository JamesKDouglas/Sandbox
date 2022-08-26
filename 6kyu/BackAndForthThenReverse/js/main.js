// parameters: A list of number is input, s. It comes in as an array of integers, positive or negative.
// return: A list of numbers scrambled according to the method:
// Remove the first and last element of s and add them to list T.
// reverse the list s
// repeat until s 'gets emptied'

// so the instructions as us to empty s but also generate T without mutating the input list s. So it's ambiguous that way.

//If there is an uneven number of entries the middle stays the same. 

// example:
// S = [1,2,3,4,5,6]
// T = [1,6,5,2,3,4]

// S = [1,2,3,4,5,6]
// T = []

// S = [2,3,4,5] => [5,4,3,2]
// T = [1,6]

// S = [4,3] => [3,4]
// T = [1,6,5,2]

// S = []
// T = [1,6,5,2,3,4]

// pseudocode:
// copy s into another array.
// deconstruct the array with shift and pop.
// put the items shifted and popped in with unshift and push into the new list.
// carry on until the copy of s is emptied.

//I did try reverse() here and it was too slow.
function arrange(s) {
    let newArr = [];
    
    let lengthS = s.length;
    let loopLength = Math.ceil(lengthS/2);
    
    for (let i=0,j=lengthS-1;i<loopLength;i++,j--){
      if(i%2 ==0){
        newArr.push(s[i]);
        newArr.push(s[j]);
      } else {
        newArr.push(s[j]);
        newArr.push(s[i]);
      }
    }
    if (lengthS%2 ==1){
      newArr.pop();
    }
    return newArr;
}
  

// let s = [9,7,-2,8,5,-3,6,5,1];
let s = [1,2,3,4,5,6];

console.log(arrange(s));

//   Test failed with s = 9,7,-2,8,5,-3,6,5,1: expected [ -2, 5, 9, 1, 7, 6, 8 ] to deeply equal [ 9, 1, 5, 7, -2, 6, -3, 8, 5 ]

// Test failed with s = 9,7,-2,8,5,-3,6,5,1: expected [ 9, 1, 5, 7, -2, 6, -3 ] to deeply equal [ 9, 1, 5, 7, -2, 6, -3, 8, 5 ]