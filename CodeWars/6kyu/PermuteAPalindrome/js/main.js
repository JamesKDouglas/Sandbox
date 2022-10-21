//can a palindrome be constructed from the string?

//ex:
//madam => true
//junk => false

//If there is 1 unmatched letter and also an odd number of letters then yes a palindrome can be constructed.
// If there are 0 unmatched letters then also yes.

//otherwise no. Any more than 1 unmatched letter and it's not possible to make a palindrome. 
//Also if there is one unmatched letter and the total number of letters is even, it's still not possible.

//try to use string methods here:
//Look up the first character with charAt(0);
//Compare it to each next characters with charAt(j);
//Count how many times the character appears. Remove each letter as it is counted/matched. Use slice for that (begin, end).
//If it appears an uneven number of times, increment unMatched.
//remove the first letter.
//repeat, going through all the letters and seeing how many are unmatched.
//At the end of each letter:
// check to see if unmatched is 2 or over 2. If it is just return false.
// 

// let input = "racecars";
let input = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbczazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazazaza


function permuteAPalindrome (input){
  //early returns
  if (input.length == 1) return true;
  if (input.length == 0) return true;

  let inputPrime = input;
  let length = input.length;
  let letterCounter = 1;
  let unMatchedCount = 0;
  let currentLength = 0;

  //Count how many letters of each they are, one at a time. 
  do {
    //One loop for each letter.
    letterCounter = 1;
    currentLength = inputPrime.length;//changes after every letter is inspected.

    for (let j=1;j<currentLength;j++){//compare it to all the rest;
      if (inputPrime.charAt(0) == inputPrime.charAt(j)){
        letterCounter++;
        inputPrime = inputPrime.slice(0,j) + inputPrime.slice(j+1);//remove it so we don't match it again.
        j--;//don't skip a letter!

      } else {
      };
    }
    
    //Is this letter appearing an odd number of times.

    if (letterCounter%2 !=0){
      unMatchedCount++;
    }
    
    //So far, given the number of unmatched letters and string length is this able to make a valid palindrome?
    if (unMatchedCount == 1 && length%2 == 0){
      return false;
    } else if (unMatchedCount > 1){
      return false;
    }
    inputPrime = inputPrime.slice(1);//Remove the first character.
  } while (inputPrime.length>0);

  return true;
}

console.log(permuteAPalindrome(input));


//a more succinct solution from smatric:
// function permuteAPalindrome ([...input], odd = 0) { 
//   new Set(input).forEach(a => input.filter(b => b == a).length % 2 ? odd++ : 0)
//   return odd < 2;
// }
//However, this version uses arrays, and I'm practicing with strings.