//the input will be a comma separated list (string) of numbers using digits 0,9,4,6.

//Each number is a the same number of digits long.

//The goal is to determine how many shared digits exist. For example if 2 of the numbers
//numbers begin with a 6 that's 1 shared digit.

//Report the value as an average of the total number of digits in the list.

//for example if there are only 2 numbers and they share only a 6 in front, 
//and each is 5 digits long that is 1/10 or 10%. Output a float (number type)
//to 10 decimals (which is actually rounded to 9?)

//ex:
//s = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"
// => 29.2592592593
//s = "6900690040, 4690606946, 9990494604"
// => 26.6666666667

//edge cases? invalid inputs? Not expected.
//BigInts? No.
//Why these 4 numbers?
//how should we round the 10th decimal place? assume normal rounding.
//timeouts? 12 000ms job size?


function posAverage(s) {
  //break up this csv list into an array with split(", ")
  //Keep them as strings since we do want to just use the digits.
  //make a counter
  //2 nested for loops. 
  //The outter one chooses a number.
  //The inner one compares it to others further down in the list (no double counting).
  
  
  //at the end calculate the average - length of a # multiplied by the # of #s.
  //and use the counter. Then toPrecision(10) for 10 decimals.
  
  let numArr = s.split(", ");
  console.log(numArr);
  let counter = 0;
  let combos = 0;
  for (let i=0;i<numArr.length;i++){//choose the first number
    // console.log("first Number:", numArr[i]);
    for (let j=i+1;j<numArr.length;j++){//choose the second number
      // console.log("compare it to:", numArr[j]);
      // console.log("combo:", combos++);
      for (let k=0;k<numArr[0].length;k++){//first character
        // console.log("compare position", k, ":", numArr[i].charAt(k), numArr[j].charAt(k))
          if (numArr[i].charAt(k) === numArr[j].charAt(k)){
            counter++;
            // console.log("found matching digit", counter, "th");
          }
      }
    }
  }
 let n = numArr.length;
  // console.log("repeat digits:", counter);
  // console.log(("Number of combos:", n * (n-1)) / 2);
  // console.log(100*counter/[numArr[0].length*((n * (n-1)) / 2)])

  
  let perc = 100*counter/[numArr[0].length*((n * (n-1)) / 2)];
  perc = perc.toFixed(10);
  return perc;
}

// console.log(posAverage("6900690040, 4690606946, 9990494604"), 26.6666);
console.log(posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"),29.2592592593);
// console.log(posAverage("6900690040, 4690606946, 9990494604"), 26.6666666667);
