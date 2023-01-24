
//the input will be a positive integer, n between 10 and 100 000

//note that fib(100 000)  is a bigInt so we will have to use BigInt.

//Determine the nth element of the sequence.

//Then count the occurrance of each digit in the number.

//Return the count as a list of integer pairs. 
//Sort the list by abundance for each digit before returning it.
//If two digits have the same abundance, position the lower digit first in the array.

//ex:
//f(10) = 55 => return [[2,5]];

//f(10000) => return [(254, 3),
//    (228, 2),
//    (217, 6),
//    (217, 0),
//    (202, 5),
//    (199, 1),
//    (198, 7),
//    (197, 8),
//    (194, 4),
//    (184, 9)]
//albeit in javascript the round bracket in the arrays will be square.

function fibDigits(n) {
    //f1: calculate the sequence number. Memoizing can really speed it up, but
    //the calculation is just iterative or recursive and iterative does tend to be faster
    //so I'll just do it iteratively.
    //f2: count the digits present in it and make the 2d array.
    //Make it a string or an array of digits, then use a counter and for loop to count
    //the digits and push the count and digit to an array. 
    //We can do this in fewer lines with reduce, and be all code golfy but nah.
    //f3: sort the array.
    //we'll use the sort function for an array, give it an arrow function 
    //return it.
    
    function fibNum(n){

        if (typeof(n) != "bigint"){
            n = BigInt(n);
        }
      let n1 = 0n;
      let n2 = 1n;
      let n3 = 0n;
      for (let i=0n;i<=(n-2n);i++){
        n3 = n1+n2;
        n1 = n2;
        n2 = n3;
      }
      return n3;
    }
    
    function countDig(n){
      let digCount = {};
      
      n = n.toString();
    //   console.log(n[1]);
      for (d of n){
        // console.log(d);
        if (!digCount[d]){
          digCount[d] = 1;
        } else {
          digCount[d]++;
        }
      }
    //   console.log(digCount);
      let digArray = [];
    //   now I want the object as an array.
    //   console.log(Object.keys(digCount).length);
      for (i in digCount){
        digArray.push([digCount[i], +i]);
      }
      console.log(digArray);
      return digArray;
    }
    
    let num = fibNum(n);
    console.log(num);
    let numDigCount = countDig(num);
    // console.log(numDigCount);

    return numDigCount.sort((el1, el2) => {
        if (el2[0]===el1[0]){
            return el2[1] - el1[1];
        }
        else {
            return el2[0] - el1[0];
        };
    });
  }
  
//   console.log(fibDigits(10),[[2,5]]);
  console.log(fibDigits(10000),[[254, 3],[228, 2],[217, 6],[217, 0],[202, 5],[199, 1],[198, 7],[197, 8],[194, 4],[184, 9]]);
  

//   expected 
// [ [ 254, 3 ], [ 228, 2 ], [ 217, +0 ], [ 217, 6 ], [ 202, 5 ], [ 199, 1 ], [ 198, 7 ], [ 197, 8 ], [ 194, 4 ], [ 184, 9 ] ] 
// [ [ 254, 3 ], [ 228, 2 ], [ 217, 6 ], [ 217, +0 ], [ 202, 5 ], [ 199, 1 ], [ 198, 7 ], [ 197, 8 ], [ 194, 4 ], [ 184, 9 ] ]
