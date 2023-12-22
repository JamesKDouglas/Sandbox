//Input of a string. 

//The goal is to return the value of the highest "scoring" consonant-only substring.

//That is, vowels delineate substrings. And each substring is scored 
//according to a=1,b=2 etc.

//ex:
//zodiacs => 26 because z is a 26
//strength => 57 because str scores at 57 and gth as less
//chruschtschov => 80

//edge cases? lowercase letters only, no spaces.
//Timeouts? 12 000 ms. no big jobs expected.

function solve(s) {
  console.log(s);
  //Go through the string and check each character.
  //Either add it to the running sum, or terminate the sum.
  //Keep track of the largest sum ever.
  
  let sArr = s.split("");
  
  let sum = 0;
  let biggestSum = 0;
  
  for (let i=0;i<sArr.length;i++){
    //if it's a vowel, compare sums, reassign if necessary and terminate.
    if (sArr[i]==="a" || sArr[i]==="e" || sArr[i]==="i" ||sArr[i]==="o"||sArr[i]==="u"){
      if (sum>biggestSum){
        console.log("found bigger string:", sum);
        biggestSum = sum;
        sum = 0;
      }
    } else {
    //if it's a consonant
      sum += (sArr[i].charCodeAt(0) - "a".charCodeAt(0) + 1);
    }
  }
  
  if (sum>biggestSum){
    console.log("found bigger string at the end:", sum);
    biggestSum = sum;
    sum = 0;
  }
  
  return biggestSum;
};

console.log(solve("az"), 26);
console.log(solve("zodiacs"), 26);
console.log(solve("strength"), 57);
console.log(solve("chruschtschov"), 80);
