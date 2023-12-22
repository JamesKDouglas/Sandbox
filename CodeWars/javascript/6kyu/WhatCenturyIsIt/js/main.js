//The input will be a string 4 characters long indicating the year. 

//The goal is to return the century.
//ex: 1999 => 20th
//2259 => 23rd

//return the value as a string.

//1st 2nd 3rd 4th 5th 6th 7th 8th 9th 10th
//if it ends in a 1 -st 2 if not 12 -nd 3 -rd except 13th. otherwise th.

//edge cases? 

//0? Can we have below 1000 with a placeholder?
//zero case: 2000=>20th. 
//teen cases: 1299 => 13th. 1101 => 12th. No nd or rd for teens.

//12 is a special case => 12th instead of 2nd or 22nd
//timeouts not a problem. No big job sizes.

function whatCentury(year)
{
  //extract the 2 digits. Make them a number.
  //edge cases first - 12, 13.
  //extract the last 2. set 0 flag if necessary.
  
  //extract the 2nd digit. Assign a rd, nd, th based on it.
  
  //take the first 2 digits and the 0 flag. Combine them into the # of the century.
  //concatenate the end on. return it.
  
  let firstTwo = year.substring(0,2);
  let lastTwo = year.substring(2);
  
  // console.log("strings: ", firstTwo,  lastTwo);

  //edge cases
  //if the century will be 12 or 13 so that's a special case - 12th and 13th not 12nd and 13rd
  //or course we could use the zero flag instead
  if (firstTwo == "12" && lastTwo !== "00"){
    return "13th";
  } else if (firstTwo == "13" && lastTwo == "00"){
    return "13th";
  } else if (firstTwo == "12" && lastTwo == "00"){
    return "12th";
  } else if (firstTwo == "11" && lastTwo !== "00"){
    return "12th";
  }

  //zero flag
  let zeroFlag = false;
  if (lastTwo === "00"){
    zeroFlag = true;
  }

  //Decide the century number
  let centuryNum = "";
  if (zeroFlag === false){
    centuryNum = (+firstTwo+1).toString();
  } else {
    centuryNum = firstTwo;
  }

  //decide the suffix
  let suffix = "";
  let second = +centuryNum.charAt(1);

  if (second == 1 ){
    suffix = "st";
  } else if (second === 2){
    suffix = "nd";
  }  else if (second === 3){
    suffix = "rd";
  }  else {
    suffix = "th";
  }
  return centuryNum+suffix;
}

console.log(whatCentury("1999"), "20th");
console.log(whatCentury("2000"), "20th");
console.log(whatCentury("2011"), "21st");

console.log(whatCentury("1124"), "12th");
console.log(whatCentury("1201"), "13th");
console.log(whatCentury("2101"), "22nd");
console.log(whatCentury("2201"), "23rd");

// 0th
// 1st
// 2nd
// 3rd
// 4th
// 5th
// 6th
// 7th
// 8h
// 9th
// 10th
// 11th
// 12th
// 13th
// 14th
// 15th
// 16th
// 17th

// The above does work but it's very verbose. This is more concise, by Ivan Diachenko. 
//Usually I don't like code golf but this is nicer:

// function whatCentury(year)
// {
//   var century = Math.ceil(year/100);
//   return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
// }