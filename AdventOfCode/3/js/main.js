//There is a collection of characters - symbols, numbers and periods.
//The characters are organized into a block with lines of equal size terminated by newline characters.

//ex:
// 67..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664*598..

//sometimes there is a situation where two numbers border a *. In the example it's the final
//644*589.

//Is it possible to have a triplegear? Well yes but we should reject that.

//Find the sum of the product of all such pairs.

// let input = importText("adventofcode.com_2023_day_3_input.txt")

let input = importText("example2.txt")

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

console.log(input);

//separate by lines

let lines = input.split("\n");

//now add padding so we don't overrun the references when we bump into the edge.
lines = lines.map(el => "."+el+".");
lines.unshift(".".repeat(lines[0].length));
lines.push(".".repeat(lines[0].length));

console.log(lines);

//Now go line by line. 

//find a *. Then look left and right for numbers. 

let prodSum = 0;

for (let lineInd=1;lineInd<lines.length-1;lineInd++){
  let line = lines[lineInd];

  console.log(line);

  for (let charInd=1;charInd<line.length;charInd++){
    char = line.charAt(charInd);
    console.log("char: ", char);
    if (char === "*"){
      console.log("found an *");
      
      //4 strings for 4 sides of the asterisk
      let preGear = line.charAt(charInd-1);
      let postGear = line.charAt(charInd+1);
      let aboveGearStr = lines[lineInd-1].substring(charInd-1, charInd+2);
      let belowGearStr = lines[lineInd+1].substring(charInd-1, charInd+2);

      //first of all, I want to see if more than 2 numbers touch the gear. If that happens we reject the whole thing
      //
      
      //inline gear check - left and right side?
      if ((+preGear>=0 && +preGear<=9) && (+postGear>=0 && +postGear<=9)){
        //Looks like we found a real gear. So lets get the numbers from the left and right.
        console.log("found a real gear!")
        let leftGear = "";
        let rightGear = "";    

        //These could be while loops but I can see that the numbers are never over 3 digits.
        for (let i=0;i<4;i++){
          //Left
          let tempChar = line.charAt(charInd-i);
          if (+tempChar>=0 && +tempChar<=9){
            leftGear = tempChar + leftGear;
          }
          tempChar = line.charAt(charInd+i);
          //Right
          if (+tempChar>=0 && +tempChar<=9){
            rightGear = leftGear + tempChar;
          }
        }
        console.log("gears: ", leftGear, " ", rightGear);
        prodSum += +leftGear*+rightGear;
      }

      //top/bottom gear check
      if (hasNum(aboveGearStr) && hasNum(belowGearStr)){


      }

    }
  }
} 

function hasNum(str){
  for (let i=0;i<str.length;i++){
    if (+str.charAt(i) >= 0 && +str.charAt(i) <= 9){
      return true;
    }
  }
  return false;
}

console.log(prodSum);
