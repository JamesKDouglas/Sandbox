//input will be an array of positive integers as well as a number called sum. 

// the integers will be between 2 and 22, inclusive
//There will be between 0 and 20 of them, inclusive
//the sum will be between -10 and 10, inclusive

//The goal is to determine if it is possible to modify the array to change the 
//sign
//of the integers in a way that results in all of them being added together 
//and equalling sum.

//Return a true if it is possible, false if not.

//edge cases:
//If there is no need to change the sign at all then return true
//timeout not a problem because of small range.
//invalid inputs? nope. 

function getSolution(arr, sum) {
  //Add all the integers.
  //use .reduce. 
  //Call that bigSum.
  
  //If bigSum is smaller than sum, return false. 
  
  //if bigSum is larger than sum find the difference between them.
  
  //It's that difference we need to subtract using an integer.
  
  //Sort the original array from smallest to largest.
  
  //shorten the high end. We won't need that. 
  
  //find all combinations, make an array.
  //see if any of them match the difference. use .find().
  
  let bigSum = arr.reduce((a,c) => a+c);
  let dif = bigSum - sum;

  // console.log("bigSum: ", bigSum);
  // console.log("targetSum: ", sum);
  // console.log("dif: ", dif);
  
  if (dif<0) return false;
  if (dif === 0) return true;
  
  let sortedArr = arr.sort((a,b)=>a-b);
  
  // console.log(sortedArr);

  let ind = sortedArr.find((el)=>el>dif);
  
  let smallArr = sortedArr.slice(0,ind);
  
  console.log("smallArr: ", smallArr);

  //generate combos
  let combos = findCombos(smallArr);
  // console.log(combos);

  //remember that when we change the sign we reduce the total sum by twice the value
  combos = combos.map(arr => 2*arr.reduce((a,c) => a+c));
  console.log(combos);

  let combosSing = new Set(combos);
  console.log(combosSing);

  if (combosSing.has(dif)) return true;

  function findCombos(nums) { 
    let results = [[]];
	  for (const value of nums) {
		  let copy = [...results];
		    for (const prefix of copy) {
          results.push(prefix.concat(value));
		    }
	  }
    // console.log(results);
    results.shift();
	  return results;
  };
  
}

// console.log(getSolution([1, 3, 4, 6, 8], -2), true);
// console.log(getSolution([15, 2, 3], 10), true);
console.log(getSolution([1, 5, 3, 2, 5], -2), false);
//For this test case I see a [-1,5,-3,2,-5] added all together is (-9, 7) => -2. so it's true not false.
//that looks like another mistake in the test case.

// Kosia has a more concise solution,
// function getSolution(arr, sum) {
//   let sums = new Set([arr[0]]);
//   for (let i = 1; i < arr.length; i++) {`
//     let nextSums = new Set();
//     for (let x of sums)
//       nextSums.add(x + arr[i]).add(x - arr[i]);
//     sums = nextSums;
//   }
//   return sums.has(sum);
// }