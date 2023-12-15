//There is a collection of characters - symbols, numbers and periods.
//The characters are organized into a block with lines of equal size terminated by newline characters.

//ex:
// 467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......

//extract and add together all numbers that are adjacent to a symbol. Here, for example 114 would be excluded.

//a "symbol" is anything except a number or a .

//just process one set of input data.

let input = importText("adventofcode.com_2023_day_3_input.txt")

// let input = importText("example.txt")

function importText(textFile) {
  "use strict";
  let rawFile = new XMLHttpRequest();
  let allText = "";
  rawFile.open("Get", textFile, false);
  rawFile.onreadystatechange = function()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              allText = rawFile.responseText;
          }
      }
  }

  rawFile.send(null);
  return allText; 
}

//first, parse out the numbers I guess. Sticking with the dataframe concept - I could just make a running sum
//but the dataframe idea is to first get the data organized into an array or object.

//separate by lines

let lines = input.split("\n");

//now add padding so we don't overrun the references when we bump into the edge.
lines = lines.map(el => "."+el+".");
lines.unshift(".".repeat(lines[0].length));
lines.push(".".repeat(lines[0].length));

// console.log(lines);

//Now go line by line. Find a number then inspect the top, left, right, bottom to see if there are any adjacent symbols


let partNums = [];
let rejectedNums = [];
let numCount = 0;

for (let lineInd=1;lineInd<lines.length-1;lineInd++){
  let line = lines[lineInd];
  console.log(line);

  let numFlag = false;
  let startNumInd = 0;
  let endNumInd = 0;
  let partNum  = "";

  for (let charInd=1;charInd<line.length;charInd++){
    char = line.charAt(charInd);

    if (+char>=0 && +char<=9){
      //Encountered a digit.
      if (!numFlag){
        //This is the start of a number
        numCount++;
        console.log("numCount incremented")
        startNumInd = charInd;
        numFlag = true; 
      }
      //keep the digit
      partNum += char;
    } else if (numFlag){
      //The character is not a digit but we were examining a number. So the number is done.
      
      numFlag = false;
      endNumInd = charInd-1;

      //Now - should we consider this number a part number? Is there an adjacent symbol?
      
      //extract substrings from the surroundings
      let subStrTop = lines[lineInd-1].substring(startNumInd-1,endNumInd+2);
      let subStrBottom = lines[lineInd+1].substring(startNumInd-1,endNumInd+2);
      let left = line.charAt(startNumInd-1);
      let right = line.charAt(endNumInd+1);

      console.log("number:", partNum, "substrings: ", left, right, subStrTop, subStrBottom);

      if (symbolFound(subStrTop) || symbolFound(left) || symbolFound(right) || symbolFound(subStrBottom)) {
        //there is a symbol, so keep the number
        partNums.push(+partNum);
      } else {
        console.log("this number has no symbol next to it: ", partNum);
        rejectedNums.push(+partNum);
      }
      //in any cases carry on searching for the next one
      partNum = "";
      console.log("numbers collected:", partNums.length, " rejected: ", rejectedNums.length, " total numbers: ", numCount, " checksum: ", partNums.length+rejectedNums.length);
    }
  }
 
} 
console.log(partNums);
console.log("numbers collected:", partNums.length, " rejected: ", rejectedNums.length, " total numbers: ", numCount, " checksum: ", partNums.length+rejectedNums.length);

console.log(partNums.reduce((a,c)=>a+c));
//I got 524899 which is apparently too low. 
//Try counting the numbers - how many total are there, how many rejected and how many included
//I see that the total numbers tracked are 1193. 141 rejected, 1045 accepted. That's 1186 total: 7 are missing somehow.
//Ok the problem is that a final number can get dropped.


function symbolFound(str){
  //I'm not looking for a symbol because I can't make a comprehensive list of what count as symbols
  //Instead, I'll look to see if any characters are other than a . or number
  //if every character is either a . or a # then .every will return true. So no symbol was found.
  let symbolFound = !str.split("").every(el => {
    if ((+el>=0 && +el<=9) || el == "."){    
      return true;
    } else {
      return false;
    }
  })

  return symbolFound;
}