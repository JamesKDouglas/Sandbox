//input a string type.
//only 128 ascii allowed. Any all or duplicates.
//length? Don't worry about it, it will be modest.

//Return a boolean type. True or false.

//thequickbrownfoxjumps => true.
//the quick brown fox jumps over the => false.
//Lorem Impsum => false.

function hasUniqueChars(str){
    //solution 2: using memoization.
   
     let uniqueChars = {};
     let strArr = str.split('');
     for (let i=0;i<strArr.length;i++){
       if (uniqueChars[strArr[i]]){
         return false;
       } else {
         uniqueChars[strArr[i]] = true;
       }
     }
     return true;
   }
   
   console.log(hasUniqueChars("the"), true);
   
   console.log(hasUniqueChars("the quick brown fox jumps over the"), false);
   
   console.log(hasUniqueChars("Lorem Ipsum"), false);
   
    // Solution 1: Using Set 
    //  //Str into an array
    //  //make it into a unique set
    //  //compare the length of the unique set.
   
    //  let strUnique = new Set(str.split(''));
     
    //  if (strUnique.size === str.split('').length){
    //    return true
    //  } else {
    //    return false;
    //  }