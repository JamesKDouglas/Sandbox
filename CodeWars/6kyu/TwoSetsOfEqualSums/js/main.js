//The input will be an integer, n up to 1 million.

//That integer represents the size of an integer series counting upwards
//from 1 to n, in increments of 1.

//The goal is to take that set and determine whether it is possible to 
//divide the integers in it into two groups, both with the same sum.
//If that is possible, return just one possible solution. That is,
//return an array of arrays with the 2 groups of numbers, both adding to the same
//amount

//If it is not possible to divide the integers in such a way, return 
//an empty array [].

//Timeouts? Yes there likely is a timeout, 10 000ms
//invalid inputs? What if n is a decimal? Not expected. Over 1 million?
//not expected.
//edge cases? 0? 


//For 7 I see that a combination of the contiguous and alternate algorithm could work.
//I suppose this happens fairly often - split the sequence, run both algorithms then combine?
//So this is n%4 = 3.

//[1,2,3,4,5,6,7];
//[7,4,2],[6,5,3,1]

//[7,4,2,1][6,5,3]
//or  [7,4,3][6,5,2,1] of course.
//I suppose this suggests a recursive algorithm- split the array until it can be handled

//so there are 4 cases, supposing the sum is even:
//modulo 4 = 0.
//modulo 4 = 1
//modulo 4 = 2.  
//modulo 4 = 3. We can take the first 3 values off, which balance, then balance the rest

//even+odd = odd
//even+even = even
//odd+odd = even
//The series has n elements and they go even odd even odd of course. 
//So we can discount certain n values based on this.
//if modulo 4 is 0 then that means the set is composed of odd + odd which collapses to 
//even or even+even
//if modulo 4 is 3 then we have even+odd+even+odd. So even again.
// if modulo 4 is 2 then we have even + even + odd. That's going to be an odd sum. so not solvable.
//if modulo 4 is 1 then we have even + odd which again is odd. 
//So we don't need to deal with these 2 and 1 cases.

function createTwoSetsOfEqualSum(n) {
  console.log(n);
  
  if (n%4 === 2 ||n%4 === 1){
    return [];//Not possible to balance. The 4 sections will balance but [2,1] will not neither will [1]. See informal proof of odd/even.
    //the sum of all remainder 4 1 and 2 cases is always odd.
  }

  let arr1 = [];
  let arr2 = [];

  function balanceFour(n, k){
    let toggle = true;
    //use the algorithm describe above
    for (let i=n;i>k;i-=2){
      if (toggle){
        arr1.push(i);
        arr2.push(i-1);
        toggle = false;
      } else {
        arr2.push(i);
        arr1.push(i-1);
        toggle = true;
      }
    }

    console.log(arr1.reduce((a,c)=>c+=a,0), arr2.reduce((a,c)=>c+=a,0))
    return [arr1, arr2];
  }

  if (n%4 ===0){
    return balanceFour(n, 1);
  } else if (n%4 === 3){
    console.log("mod4 is 3")
    //hm, I want to do balancing as if it was mod4 0 but then stop at 3.
    let newArrs = balanceFour(n, 3);
    //then add [2,1] to one of them and [3] to the other

    newArrs[0].push(1);
    newArrs[0].push(2);
    newArrs[1].push(3);
    console.log(newArrs);
    return newArrs;
    
  }
}



console.log(createTwoSetsOfEqualSum(7), [[4,1],[3,2]]);
//[1,2,3,4]
//[4,1],[3,2]
//You could say that we are adding values to the arrays from the right, then the left.

console.log(createTwoSetsOfEqualSum(4), [[4,1],[3,2]]);

console.log(createTwoSetsOfEqualSum(3), [[1,2],[3]]);
console.log(createTwoSetsOfEqualSum(2), []);
console.log(createTwoSetsOfEqualSum(9), []);
console.log(createTwoSetsOfEqualSum(8), [[1,3,6,8],[2,4,5,7]]);//other answers are also ok.