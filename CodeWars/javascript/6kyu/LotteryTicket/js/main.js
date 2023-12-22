//Input: 2D array with strings as the first dimension and numbers as the second.
//This array is the 'ticket'
//There is a second input called the "win". It is an integer.

//Calculate 'mini wins' from the ticket:
//If any of the ascii character codes from the string match the number it is a 
//"mini win". There can only be 1 of these per subarray.

//Count up the number of times this occurrs. 

//If the number of times is more than "win" then return "Winner!". If not, return
//"Loser!"

//BigInts? Nope. Timeouts? Don't worry about it. "correct format" 
//means uppercase, right?

function bingo(ticket, win){
    let miniWins = 0;
    for (entry of ticket){
    //   console.log(entry);
      for (letter of entry[0]){
        // console.log(letter);
        console.log(miniWins);
        if (letter.charCodeAt(0) === entry[1]){
          miniWins++;
          break;
        //   console.log("found a winner!");
        }
      }
    }
    
    if (miniWins >= win){
      return "Winner!"
    } else {
      return "Loser!"
    }
  }
  
//   console.log(bingo([['ABC', 65 ], ['HGR', 74], ['BYHT', 74]], 2), "Loser!");
//   console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
//   console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');

console.log(bingo([["TNRQOREM",82], ["KHAC",75], ["DJC",89], ["RCRI",72], ["TH",66], ["GP",70], ["YNGJQS",90], ["DBWBHGBA",70], ["LGIVKTH",72], ["RP",67]],4), "Loser!");