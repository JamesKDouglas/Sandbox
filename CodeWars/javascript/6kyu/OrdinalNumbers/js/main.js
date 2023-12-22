//inputs will be a number, integer, and a boolean.

//The goal is to determine the ordinal suffix of the number.

//The ouput is a string of the ordinal suffix.

//ex:
//1 => 1st => st
//12 => 12th => th
//2 => 2nd => nd
//3 => 3rd => rd

//if brief is set to true then nd and rd change to d. Default is false.

//edge cases? Not an integer? Not a number? No expect. Inputs valid.
//Bigints? Nope.
//timeouts? just look at last 2 digits. parse as string. So no problem.
//


function ordinal(number, brief = false) {
  // Turn the number into array of integers. 
  // So I can look at the digits one at a time.
  
  let numArr = number.toString().split("").map(el=>Number(el));
  
  //Examine with conditionals:
  //is the 2nd last digit a 1? => return th.
  if (numArr.length>1){
    if (numArr[numArr.length-2] === 1) return "th";
  }
  
  //if not, look at the final digit.
  
  let lastDig = numArr[numArr.length-1];
//   console.log(typeof(lastDig));
  switch(lastDig){
      case 0:
        return "th";
        break;
      case 1:
        return "st";
        break;
      case 2:
        if (brief){
          return "d";
        } else {
          return "nd";
        }
        break;
      case 3:
       if (brief){
          return "d";
        } else {
          return "rd";
        }
        break;
      default:
        return "th";
  }
  
}

console.log(ordinal(1), "st");
console.log(ordinal(12), "th");
console.log(ordinal(2), "nd");
console.log(ordinal(3), "rd");
console.log(ordinal(3, true), "d");