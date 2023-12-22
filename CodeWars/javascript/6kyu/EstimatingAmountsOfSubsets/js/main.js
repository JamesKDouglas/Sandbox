//The input is an array of elements.
//in JS, the array will be between 6 and 100 elements.

//The goal is to return the number of possible sets that can be created. Sets created
//cannot contain duplicates, even if the original array does contain them.
//sets with the same elements are considered the same. That is, order does not matter.
//That means we are looking for the number of possible combinations, not sets.

//edge cases: All the same element? 
//invalid inputs? Any character or string can be an element.
//timeout: the input is limited to 50 elements. 12 000 ms

//ex:
//[1, 2, 3, 4] => 15
//['a', 'b', 'c', 'd', 'd'] => 15
//[2, 3, 4, 5, 5, 6, 6, 7, 8, 8] => 127



function estSubsets(arr) {
  
  //Only the number of unique element matters.
  // the order does not. That means we are doing combinatorics, not permuatations.
  //the number of combinations possible is
  //n!/(k!(n-k)!)

  //for n=4
  //k = 1
  //4*3*2*1/(1*(3*2))
  //which is 4
  let uniqueArr = new Set(arr);
  let n = BigInt(uniqueArr.size);
  

  function factorial(n){
    let fact = BigInt(1);
    for (let i=n;i>=1;i--){
      fact *= i;
    }
    return fact;
  }

  //top term remains the same, so calculate it once
  let nFact = BigInt(factorial(n));
  let comboCount = 0n;
  //Calculate the bottom term for every possible k, find the combos
  for (let k=1n;k<=n;k++){
    let kFact = factorial(k);
    let nkFact = factorial(n-k);
    comboCount += nFact/(kFact*nkFact);
  }
  return parseInt(comboCount);
  
}

console.log(estSubsets([1, 2, 3, 4]), 15)
console.log(estSubsets(['a', 'b', 'c', 'd', 'd']), 15);
console.log(estSubsets([2, 3, 4, 5, 5, 6, 6, 7, 8, 8]), 127);
