//First of all, this kata is poorly named. The problem has nothing
//to do with two arrays being the same. 

//The input will be two arrays. Each array contains integers.

//Test to see whether one array contains elements which correspond with the 
//the squares of the other array.

//return true or false. True if one array contains the squares of another.

//No BigInts.
//Repeat numbers are allowed.

//ex:
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// returns true. Note that the order of numbers may not match
//regarding the inputs. Note that 19 appears multiple times, as does its square.

//edge cases: both arrays are all 0 or all 1's. That should return true.


function comp(array1, array2){
  //first, sort the arrays.
  //Then, find which one is larger. Test that one as the squared one.
  //Then just go through each element and see if it's the square.
  
  //early returns: if the number of elements doesn't match return false

  // console.log(array1, array2);

  if (!array1 || !array2) return false;
  if (array1.length!=array1.length) return false;
  if (array1.length === 0 || array2.length === 0) return true;

  let arrSorted1 = array1.sort((a,b)=>a-b);
  let arrSorted2 = array2.sort((a,b)=>a-b);
  
  // console.log(arrSorted1,arrSorted2);

  let arrSquared = [];
  let arrOriginal = [];
  
  // console.log(arrSquared, arrOriginal)

  //I want to see which array is proposed as the squared one. The problem doesn't 
  //indicate whether it would be the first or second so we should not assume.

  if (arrSorted2.reduce((acc,cur)=> acc+cur)>arrSorted1.reduce((acc,cur)=> acc+cur)){
    //then we'll test arrSorted2 as the proposed squared array
    arrSquared = arrSorted2;
    arrOriginal = arrSorted1;
  } else {
    arrSquared = arrSorted1;
    arrOriginal = arrSorted2;
  } 
  
  // console.log(arrSquared, arrOriginal)

  //now test to see if the big one is in fact squared:
  
  for (let i=0;i<arrSquared.length;i++){
  
    if (arrSquared[i]**0.5 === arrOriginal[i]){
      // console.log("found a square");
      // console.log(arrSquared[i], "is the square of", arrOriginal[i]);

      continue
    } else {
      return false
    }
  }

  // if the test were passed, all elements are the squares of the original.

  return true;
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]), true);
console.log(comp([0,0,10],[0,100,0]), true);
console.log(comp([120, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]), false);

