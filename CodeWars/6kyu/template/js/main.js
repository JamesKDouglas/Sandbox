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
      console.log(entry);
      for (letter in entry[0]){
        if (letter.charCodeAt(0) === entry[1]){
          miniWins++;
        }
      }
    }
    
    if (miniWins >= win){
      return "Winner!"
    } else {
      return "Loser!"
    }
  }
  
  console.log(bingo([ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], ));
  console.log(bingo([ 'ZNJVZO', 68 ],[ 'ZZGHMV', 71 ],[ 'NFZANO', 78 ],[ 'UKYKH', 89 ],[ 'GGCBO', 78 ]), 4);