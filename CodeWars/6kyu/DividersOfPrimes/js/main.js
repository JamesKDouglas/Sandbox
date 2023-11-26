//input will be an array of prime numbers and another array with associated
//powers that the primes are raised to.

//Find the factors of the product of all the primes raised to their power.

//ex:
//[5,7,11] and [2,1,1] => 5^2*7*11. That equals 1925. What are all the factors
//of 1925?
//[1, 5, 7, 11, 25, 35, 55, 77, 175, 275, 385, 1925]

//Generate a list of factors and sort it in ascending order. Then return it as 
//an array.

//Note that of course the factors can be seen by the method - each number 
//raised from 0 to the associated power, multiplied by each other. 

//0 [1, 
//1 5, 7, 11,
//2 25,
//max power reached
//now permutate? ignore the 1:
//35, 55, 77, 175, 275, 385, 1925]
//ex:

//edge cases? all powers are 0? well then just return [1].
//no duplicates of course.
//timeouts? 12 000 ms. BigInts? Nope. not expecting timeout issue.
//invalid inputs?

function getDividers(values, powers) {
  //write out all the factors.
  //ex: 5^2*7*11 => 5,5,7,11
  //then the factors are 1, all of them multiplied, and all combinations
  //then singulate at the end with Set.
  //then sort
  
  //make a new array with the numbers laid out.
  let nums = [];
  for (let i=0;i<powers.length;i++){
    for (let j=0;j<powers[i];j++){
      nums.push(values[i]);
    }
  }
  //now find all the combinations
  let factors = findFactors(nums);
  
  //thanks Mathias Bynens for this:
  function findFactors(nums) { 
    let results = [[]];
	  for (const value of nums) {
		  let copy = [...results]; // See note below.
		    for (const prefix of copy) {
			    results.push(prefix.concat(value));
		    }
	  }
    // console.log(results);
	  return results;
  };
  
  //clean up the array - there is a weird empty one at the start, and anyways it should be 1.
  factors[0] = [1];
  //Now take that list of factors and find the product of each element
  factors = factors.map((el) => el.reduce((p,el)=>p*el));
  //And singulate
  let factorsSet = new Set(factors);
  //Then make it an array
  factorsArr = Array.from(factorsSet);
  //sort it
  factorsArr.sort((a,b)=> a-b);
  
  return factorsArr;
}

console.log(getDividers([5,7,11], [2,1,1]), [1, 5, 7, 11, 25, 35, 55, 77, 175, 275, 385, 1925]);
console.log(getDividers([11, 113], [1, 1]), [1, 11, 113, 1243]);
console.log(getDividers([2, 5, 13], [4, 3, 1]), [1, 2, 4, 5, 8, 10, 13, 16, 20, 25, 26, 40, 50, 52, 65, 80, 100, 104, 125, 130, 200, 208, 250, 260, 325, 400, 500, 520, 650, 1000, 1040, 1300, 1625, 2000, 2600, 3250, 5200, 6500, 13000, 26000]);
console.log(getDividers([5,7,11], [0,0,0]), [1]);

//A lot of shorter versions simply calculate the total product and then go from 1 to half the number looking for factors
//That works fine but it is computationally expensive. I prefer this algebraic approach, since we do not have any 
//`clear guidance for the maximum number size or timeouts.