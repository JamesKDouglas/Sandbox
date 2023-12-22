//inputs will be 2 strings. The strings can contain any letter.
//The first is longer than the second.

//The task is to determine whether the second string matches the end of the first.

//For example
// 'abc', 'bc' => true
// 'abc', 'd' => false

//Output is boolean - true/false.

//Size? Timeouts? Special characters are allowed as far as I can tell. No timeout concernns
//undefined? Don't expect that.

function solution(str, ending){
    //Go through the characters from the end.
    //if they match to the end of the 'ending' then return true.
    //otherwise, if you find a mismatch return false.
    
    let strLen = str.length-1;
    let endingLen = ending.length-1;
    
    for (let i=ending.length-1;i>=0;i--){
      
      //We could also try addressing with a -ve number to count from the end
      if (str[strLen] === ending[endingLen]){
        strLen--;
        endingLen--;
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
  
  // console.log(solution('abc', 'bc'), true);
  console.log(solution('abc', 'd'), false);