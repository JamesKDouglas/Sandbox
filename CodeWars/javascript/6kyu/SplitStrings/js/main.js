/input will be a string of character. Just regular characters.
//no invalid input. no empty strings.

//Goal here is to divide that input string into pairs of characters.
//just split the string into pairs.
//If the string has an odd # of characters then add a  _ at the end.

//Return an array of strings.

//ex: abc => "ab" "c_"

//edge cases? escaped characters? numbers are included.  ""=>[]
//timeouts not a big deal.


function solution(str){
   //early return: length is 0 return []. if length%2==1 then add _.
  
  //.split("")
  //go through the array with a for loop. Counter and %2 to assemble pairs.
  //add them to a new array.
  
  if (str.length === 0) return [];
  if (str.length%2 === 1){
    str += "_";
  }
  
//   let arr = str.split("");
  let counter = 1;
  let pair = "";
  let pairs = [];
  for (let i=0;i<str.length;i++){
    if (counter%2 === 0){
      pair = str[i-1] + str[i];
      pairs.push(pair);
      counter = 0;
    }
    counter++;
  }
  return pairs;
}

console.log(solution("abcdef"), ["ab","cd","ef"]);
console.log(solution(""), []);
console.log(solution("abcdefg"), ["ab","cd","ef", "g_"]);``