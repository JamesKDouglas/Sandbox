
// If a string contains doubles of all letters then it's a possible palindrome.
  //So just count the appearance of all pairs. The second time a letter is paired,
  //it fails as a palindrome

  function permuteAPalindrome (input) { 

     let length = input.length;
     let arr = input.split("");
     let unMatched = 0;
     let counter = 1;

     for (let i=0;i<arr.length;i++){

       //for all the letters that occur, count then remove them.
        for (let j=1;j<arr.length;j++){
             if (arr[0] == arr[j]){
               counter++;
               arr.splice(j,j+1);
             }
        }

        arr.shift();     

        if (counter%2 == 0){} else {unMatched++}; 

        if (unMatched>2 || unMatched>0 && length%2==0){
          return false;
        }
      }   
    return true;
   }
