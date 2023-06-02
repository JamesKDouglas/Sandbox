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

function createTwoSetsOfEqualSum(n) {
  console.log(n);
  //I could generate sets and check them. That's a brute force way.

  //An easy early return would be to see if all the numbers summed result
  //in an even number. Obviously to have two identical sums requires the
  //total sum to be even.
  
  //Early return - is the total sum even?
  //We can use an algorithm to calculate the total sum. 
  //s=((n/2)*(1+n))
  //1,2,3,4 => 10. n=4. 2*5=10
  
  let sumTotal = (n/2)*(1+n);
  if (sumTotal%2 !== 0){
    return [];
  }
  
  //if it is possible, and the sums have to be equal then I guess the
  //sum must be half the sumTotal
  let half = sumTotal/2;
//   console.log("total sum: ", sumTotal);
  
  //Look for contiguous sets? Doesn't seem like a good strategy, given the examples
  //But it would work for 3.
  //So lets solve for n then,
  //s=((n/2)*(1+n))
  //s=n/2 + n^2/2
  //hm ok so I can't isolate n
  //I notice for 3 we use 2/3 of the front indexes. Given the geometry that makes sense.



  //I do notice the solution for 8 is interspliced. That makes sense. It mostly
  //keeps things balanced.
  
  //even/odd number of elements?
  
  //say for 8:
//   [1,2,3,4,5,6,7,8]
  //When we divide it into 2 sets
  //take the highest, put it into set 1.
  //Take the second highest, put it into set 2.
  //Now set 2 is 1 less than set 1. 
  //Compensate by putting the next value into set 2
  //then the fourth value into set 1.
  //After this we get parity. So if there is a number of elements modulo 4 
  //then we can do this.
  
  //So we have [8,5] and [7,6]. Both sum to 13.
  //carry on. 
  //[8,5,4], [7,6,3] sums to 17, 16
  //[8,5,4,1], [7,6,3,2] sums to 18, 18.
  let arr1 = [];
  let arr2 = [];

  if (n%4 ===0){
    let toggle = true;
    //use the algorithm describe above
    for (let i=n;i>=1;i-=2){
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
  } else if (n%3 === 0){
//     console.log("use the continuous sequence algorithm");
    let firstTwoThirds = 2*n/3;
    // console.log(firstTwoThirds);
    for (let i=n;i>=1;i--){
      // console.log(n);
      if (i>firstTwoThirds){
        arr2.push(i);
        // console.log(arr2);
      } else {
        arr1.push(i);
      }
    }
//     console.log(arr1.reduce((a,c)=>c+=a,0), arr2.reduce((a,c)=>c+=a,0))
//     console.log([arr1, arr2]);
    return [arr1, arr2]; 
  }
}

//For 7 I see that a combination of the contiguous and alternate algorithm could work.
//I suppose this happens fairly often - split the sequence, run both algorithms then combine?
//So this is n%4 = 3.

//[1,2,3,4,5,6,7];
//[7,4,2],[6,5,3,1]

console.log(createTwoSetsOfEqualSum(7), [[4,1],[3,2]]);
//[1,2,3,4]
//[4,1],[3,2]
//You could say that we are adding values to the arrays from the right, then the left.

// console.log(createTwoSetsOfEqualSum(4), [[4,1],[3,2]]);

// console.log(createTwoSetsOfEqualSum(3), [[1,2],[3]]);
// console.log(createTwoSetsOfEqualSum(2), []);
// console.log(createTwoSetsOfEqualSum(9), []);
// console.log(createTwoSetsOfEqualSum(8), [[1,3,6,8],[2,4,5,7]]);//other answers are also ok.