//There will be an integer input, of string type

//the goal is to determine the number of odd numbers that can be formed 
// From substrings. That is, no scrambling digits is allowed.

//output an integer of the #.

//Ex:
//1341 => 1, 1, 3, 13, 41 , 341, 1341 => 7
//Note how 1 appears twice so it can be used twice.

// 311, 411, 11 etc. do not appear because they are not entire substrings

//1357 => 10

//1358 => 1, 2, 5, 13, 135, 35 => 6

//obviously an even number is not terminated by an even digit

//edge cases? null or invalid input not expected.
//BigInts? Ya maybe. 
//timeouts? 12 000 ms. 

function solve(s){
  //make an object that contains the odd numbers.
  //We'll use that to check to see if one has been found before.
  
  //add the number by digit count.
  
  //1 digit: go though all the digits and see if they are odd. If they are, add them.
  //2 digits: go through all the 2 digit sections and see if they are odd.
  
  let numberList = 0;
  let substr = "";

  for (let i=1;i<=s.length;i++){
    //Length of substrings examined determined by i
    // console.log("i is: ", i);
    for (let j=0;(j+i)<s.length+1;j++){
      //The position is determined by j

      substr = s.substring(j,j+i);
      // console.log("substring extracted: ", substr);
      // console.log("check this for oddness:", Number(substr.charAt(substr.length-1)));
      if (Number(substr.charAt(substr.length-1))%2 !== 0){
        //final digit is odd
        numberList++
        // console.log("added", substr)
      }
    }  
  }
  
  return numberList;
  
};

console.log(solve("1341"), 7);
console.log(solve("1357"), 10);
console.log(solve("1358"), 6);
