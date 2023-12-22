//Input is an integer. Positive. "any integer" So, bigInts are possible then? No.
//Ok no bigInts.

//number type. "four hundred"? Nope. 

//Describe the number sequence with a sort of simple 'lossless compression'.
//Group repeat sequences into a description using the number of repeated digits
//and the digit identity.

//ex 1111 becomes 41 because there are 4 ones.
//the sequence can be recovered.
//ex 11 22 4 5 11 becomes 21 22 14 15 21, without spaces. The spaces are to illustrate

//Return a number type integer. 

//edge cases: defective input detection? No assume it's fine.
//The speed? Are there anytimeouts or large job? Don't worry about that.

function lookSay(number){
    //Make the number a string.
    //declare a new empty string.
    
    //Goes through each character and counts the number of identical characters 
    //encounters.
    //When a change is detected, store that 'group' as a sequence.
    
    //At the end cast to a number and return
    
    let numberStr = number.toString();
    let newStr = "";
    
    let counter = 1;
    for (let i=0;i<numberStr.length;i++){
      if (numberStr[i]===numberStr[i+1]){
        counter++;
      } else {
        newStr += counter + numberStr[i];
        counter = 1;
      }
    }
    
    return Number(newStr);
  }
  
  console.log(lookSay(0), 10);
  console.log(lookSay(2014), 12101114);
  console.log(lookSay(1122), 2122);
  console.log(lookSay(22322), 221322);