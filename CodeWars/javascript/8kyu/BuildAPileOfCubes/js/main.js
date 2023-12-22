//input will be an integer, m.

//That represent the total volume of a stack of cubes.

//The first cube has volume n^3. (so it has a dimension length n). The next is (n-a)^3, where a represent the level, with 0 as the bottom level. So the second cube up from the bottom has volume (n-1)^3, the third (n-2)^3.

//So the equation we're working with is 
// m=summation a 0 to x (n-a)^3
//where x is the number of levels, which is the same as the number of cubes.

//return the integer n. return -1 if there is no solution.

//bigInt?

//timeout? No real timeout.
//edge cases? string? No not expected. No bigInt. 

// findNb(1071225) --> 45
// findNb(91716553919377) --> -1


//What I would ask an interviewer here is to clarify for the case of m=1
//for m=1, we could have a 'pile of cubes' with just 1 cube of side dimension 1.
//So in the problem description they show a summation 
// n^3 + 1^3. What do they mean by that final term? It just doesn't make sense in the base case of 1. 
//well in the case of m=1, the solution is n=0.


function findNb(m) {
  //Brute force: try all n's. 
  for(let n=0;n<10000;n++){
    let sum = 0;
    for (let i=0;i<=n;i++){
      sum += i**3;
    }
    if (sum === m){
      return n;
    }
    if (sum>m){
      return -1;
    }
    // console.log(sum);
  }
}
  
console.log(findNb(1071225), 45);
console.log(findNb(91716553919377),-1);
  