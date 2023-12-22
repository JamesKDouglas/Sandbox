//The input will be a series of zeros and ones, as a string.
//The 1 represents a card facing up, 0 facing down.

//Examine this string and look for 1's.
//When you find a 1, change it to a zero - "flip the card"
//and flip the card directly to the right as well. This counts as a 'turn'
//After a turn, examine the next character to the right. Even though the
//card or character has just been flipped, consider it anyways.

//return the number of turns taken as an integer.

//ex
//101010101010101010
//011010101010101010
//010110101010101010
//010000101010101010
//010000011010101010
//010000010110101010
//010000010101101010
//010000010100001010
//010000010100000110
//010000010100000000
//In this case 10 1's were detected and flipped, so return 10.

//Invalid character? Return 0.
//job size? timeouts? not an issue.

function xPlusY(str){
    //check for validity
    
    //then, go through and do the flipping. keep track when we need to flip
    
    //return flip count.
    
    for (let i=0;i<str.length;i++){
      if (str[i] !== "0" && str[i] !== "1"){
        return 0;
      }
    }
    
    let strArr = str.split("");
    let turns = 0;
    
    for (let i=0;i<strArr.length;i++){
      if (strArr[i] === "1"){
        strArr[i] === "0";
        if (strArr[i+1] === "1"){
          strArr[i+1] = "0";
        } else if (strArr[i+1] === "0") {
          strArr[i+1] = "1";
        }
        turns++;
      }
    }
    return turns;
  }
  
  console.log(xPlusY('0'), 0);
  console.log(xPlusY('1'), 1);
  console.log(xPlusY('011101010101'), 6);
  console.log(xPlusY('101010101010101010'), 10);
  
  // This is the ChatGPT attempt. It's amazing that it can write anything
  //of course, but it misinterprets the question and doesn't actually flip the
  //cards at all. The console logs don't come out correct.
  
  // function xPlusY(str) {
    // Check if the input string is valid
  //   if (!/^[01]+$/.test(str)) {
  //     return 0;
  //   }
  
  //   let turns = 0;
  //   let i = 0;
  //   while (i < str.length - 1) {
  //     if (str[i] === "1" && str[i + 1] === "1") {
  //       // Flip the cards
  //        //haha note that here the content of the string isn't altered at all so this solution is wrong
  //       turns++;
  //       i += 2;
  //     } else {
  //       // Move to the next card
  //       i++;
  //     }
  //   }
  
  //   // If the rightmost card is face up, flip it
  //   if (str[str.length - 1] === "1") {
  //     turns++;
  //   }
  
  //   return turns;
  // }
  
  // console.log(countTurns("101010")); // logs 3
  // console.log(countTurns("1010101")); // logs 3
  // console.log(countTurns("10101")); // logs 2
  // console.log(countTurns("1111")); // logs 2
  // console.log(countTurns("0000")); // logs 0
  // console.log(countTurns("abc")); // logs 0