//Input: two integers. 
//Two positive Number type integers, which represent a range.

//The goal is to find a special type of number within that range:
//The type of number we are looking for has the form,
//abc = a^1 +b^2 +c^3 where the powers the digits are raised to are the position of the digit.
//That is, a is in the first position, b the second and c the third.

//Of course single digit numbers are all of this type. 

//The first with two digits is 89.

//Output numbers of this type within the range, in an array.

//If there are none, then return an empty array.

//ex:
//1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
//1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
//90,100 -> []


//any timeouts? No BigInts, but what ranges are we looking at, guidance on computing power?

function sumDigPow(a, b) {
    //Brute force first:
    
    let digits = [];
    let sum = 0;
    let eurekaNum = [];
    //set up a for loop, starting at a and going to b.
    for (let i=a;i<=b;i++){
    //Check each number's digits:
      //Split the number up into digits and make an array.
      digits = i.toString().split("").map(el => Number(el));
      //second for loop to make the sum.
      for (let j=0;j<digits.length;j++){
        //Add them together according to the powers and indexes.
        sum += digits[j]**(j+1);
      }
      //Check to see if this sum equals the original number.
      if (sum === i){
        //If it does, add it to a separate array.
        eurekaNum.push(i);
      } 
      sum = 0;
      //If not, move on to the next number.
    }
    return eurekaNum;
  }
  console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
  console.log(sumDigPow(90,100), []);
  
  