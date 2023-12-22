`//Input is n, an integer from -50 to 150.

//If the input is 0 or negative just return an empty string.

//Otherwise, generate a pattern like this:
//n lines long
//Take the last digit of n

//The first line of the pattern is just the digit repeated n times.
//The second line is the digit as the first character, then the lower
//digit for the rest.
//The third line is the digit as the first character, the lower digit once,
//then the second lower digit for the rest.

//ex:
//n=3
//333
//322
//321

//Return the pattern as a string with \n delimiting the lines.


function pattern(n){

  //Find the final digit of n.
  //
  //Use a for loop to build an array of lines.
  //build the array using
  //two strings- one that grows and gets reused and then one that is 
  //just repeats.
  //At the end, join the array together into a string before returning it.
  
  let arr=[];
  
  let stringN = n.toString();
  let lastDig = stringN.charAt(stringN.length-1);
  console.log(lastDig);
  let counter = Number(lastDig);
  
  let start = "";

  let end = "";
  let line = "";
  
 
  for (let i=n;i>0;i--){
    start = start.concat(counter.toString())
    end = counter.toString().repeat(i-1)
    line = start.concat(end);
    
    arr.push(line);

    counter--;
    if (counter ==-1){
      counter = 9;
    }

  }
  
  return arr.join("\n");
}

console.log(pattern(3),"333\n322\n321");
console.log(pattern(7),"7777777\n7666666\n7655555\n7654444\n7654333\n7654322\n7654321");
console.log(pattern(17),"77777777777777777\n76666666666666666\n76555555555555555\n76544444444444444\n76543333333333333\n76543222222222222\n76543211111111111\n76543210000000000\n76543210999999999\n76543210988888888\n76543210987777777\n76543210987666666\n76543210987655555\n76543210987654444\n76543210987654333\n76543210987654322\n76543210987654321");
        `