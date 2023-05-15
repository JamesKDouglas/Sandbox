//input will be an integer of number type, either positive or negative.

//the goal is to format it with a comma separating thousands.

//ex: 100000 => 100,000

//return this as a string.

//edge cases? Suppose someone submits 000000 or 00 0000? or 100 000? Could we see
//a string incoming? Not expected. 0.0? Nope.
//001? Nope

//Timeouts? not an issues.

var numberFormat = function (number) {
    //We could take the input, make it an array then splice in a comma
    //but we just have to watch out for that negative sign.
    let j=1;
    let numArr = number.toString().split("");
    console.log("start with numArr", numArr);
    do{
      if (numArr[numArr.length-j]!==","){
        j++;
        if (j%3===0 && numArr[numArr.length-j-1]!=="-"){
            numArr.splice(numArr.length-j,0,",");
            console.log(numArr, j);
        }       
      }
      j++;
    } while (j<numArr.length)
    return numArr.join("");
  };
  
  console.log(numberFormat(100000), "100,000");
//   console.log(numberFormat(5678545), "5,678,545");
//   console.log(numberFormat(-420902), "-420,902");
  
  
  