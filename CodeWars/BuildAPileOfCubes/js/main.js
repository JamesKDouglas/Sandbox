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


function findNb(m) {
    //Brute force: try all n's. 
    let tryn = 1;
    let v = 0;
  
    //Try each value of n, make the summation and see if it equals the target volume.
    for (let j=0;j<50;j++){
      v=0;
      for (let i=0;i<tryn+1;i++){
        v += (tryn-i)**3;
        console.log("tryn", tryn);
        console.log("v", v);
      }
      tryn++;
    }
    return tryn;
    
    //  return (-1);
  }
  
  
//   console.log(findNb(1071225), 45);
  //console.log(findNb(91716553919377),-1);
  