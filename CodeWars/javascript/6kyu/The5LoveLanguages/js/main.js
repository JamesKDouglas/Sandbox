//The input will be a partner object with a .response method as well
//as an integer representing a # of weeks. 

//The goal here is to determine which out of 5 keywords returns the highest
//rate of "positive" from the partner.response method. 

//5 inputs to the method are possible: "words" || "acts" || "gifts" || "time" || "touch" ;
//These represent attempts at discovering the partner's 'love language'.


//edge cases? What if there is a high false positive? don't worry about that just use stats.
//timeouts? not an issue.



function loveLanguage(partner,weeks) {
  //This is  probablility question, it is not a pure function
  //so what is our method?
  //Go through the liest of 5, if we get a positive then try that one again.
  //If it's still positive then try it again. If not, move to the next.
  //And again.
  
  //This won't always work because a false positive could trigger a search 
  //that wastes our attempts until we just run out.
  //But it's the best we can do with 5 possibilities, 7 guesses and false positives/
  //negatives.
  
  //Oh, we may actually get more than 1 week. Ok well in that case I can just try many times;
  
  
  let languages = ["words", "acts", "gifts", "time", "touch"]
  let scoresArr = new Array(5).fill(0);
  let counter = 0;
  for (let i=0;i<7*weeks;i++){
    if (partner.response(languages[counter]) === "positive"){
      scoresArr[counter]++;
    } 
    
    counter++;
    if (counter>4){
      counter =0;
    }
  }
  
  //Now, which score is highest?
  //actually I need to know the index of the highest score. If two are the same
  //just use the first. I have no way to tell the difference.
  
  let max = Math.max(...scoresArr);
  let ind = scoresArr.findIndex((el) => el === max);
  
  return languages[ind];
}