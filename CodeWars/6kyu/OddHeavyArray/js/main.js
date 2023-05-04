//input of integers. Can be negative. Odd or even.
//Size? no idea.
//could be empty. could have only one element.

//our goal here is to assess whether the array is "odd heavy" or "even heavy"
//Really, we decide if it is odd heavy or not.

//odd heavy means every single odd value is above every single even value.
//if even one of the even values is above the odd values, it's not odd heavy.
//In other words, if we sort the array and all of the highest are odd, it's odd heavy.
//Otherwise it is not

//and empty array is not odd heavy. If there is only one element and that's odd
//then it's odd heavy. Otherwise it isn't. 

//return true or false.

//if an invalid input is submitted? A letter? No
//timeouts? no guidelines.

function isOddHeavy(n){
    //early return to handle empty cases and single values.
    if (n.length === 0) return false;
    if (n.length === 1 && n[0]%2 === 0) return false;
    if (n.length === 1 && n[0]%2 === 1) return true;
    
    
    //Then sort from highest to lowest
    let sorted = n.sort((a,b)=>b-a);
    console.log(sorted);
    //If the first is even, return false
    if (sorted[0]%2 === 0) return false;
    
    let evenFound = false;
    
    //If the first is odd, continue
    //If we find an even, set a flag
    //After that, if we find an odd, return false.
    //if not, return true at the end.
    for (let i=0;i<sorted.length;i++){
      if (sorted[i]%2 !== 0){
        console.log("encountered odd", sorted[i]);
        if (evenFound === true) return false;
      } else {
        console.log("encountered even", sorted[i]);
        evenFound = true;
        console.log("even found flag set", evenFound);
      }
    }
    return true;
  }
  
//   console.log(isOddHeavy([ 6, 2, 4, 2, 2, 2, 1, 5, 0, 0, -12, 13, -5, 4, 1 ]), false);
//   console.log(isOddHeavy([11,4,9,2,3,10]), false);
//   console.log(isOddHeavy([0,2,19,4,4]), true);
//   console.log(isOddHeavy([1,-2,-1,2]), false);
//   console.log(isOddHeavy([]),false);
//   console.log(isOddHeavy([3]), true);
  console.log(isOddHeavy([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, -2, -1 ]), false);