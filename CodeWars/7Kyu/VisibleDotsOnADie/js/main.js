//Input: 2 integers. topNum is the number rolled, and numOfSides is the 
//total number of die sides - 6,8,10, 12 or 20.

//all opposite sides add to 1 more than the side count. 
//So that means the number on the table is numOfSides-1-topNum

//output the sum of all the showing dots. as an int. 

//timeouts? don't worry about it. 
//invalid data? topNum>numOfSides? Don't expect it.
//
function totalAmountVisible(topNum, numOfSides){
  //find summation of numOfSides
  let totalDotCount = 0;
  for (let i=numOfSides;i>0;i--){
    totalDotCount += i;
  }
  
  
  //find the missing number - the one facing down
  //topNum + bottomNum = numOfSides+1
  //
  let bottomNum = - topNum + (numOfSides+1); 
       //ex: a 6 sided dice rolls a 6. The bottom is a 1.
       //if you roll a 1: The bottom is a 6.
  return totalDotCount-bottomNum; 
}