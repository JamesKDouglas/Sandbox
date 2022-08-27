
// If a string contains doubles of all letters then it's a possible palindrome.
  //So just count the appearance of all pairs. The second time a letter is paired,
  //it fails as a palindrome

function permuteAPalindrome (input) { 
    console.log(`input: ${input}`);

    let length = input.length;
    let arr = input.split("");
    let unMatched = 0;
    let counter = 1;

    for (let i=0;i<arr.length+1;i++){
     console.log(`looking at the first letter for the ${i}th time. It is a ${arr[0]}`);

      //for all the letters that occur, count then remove them.
      counter = 1;
      for (let j=1;j<arr.length;j++){
        console.log(`examining arr: ${arr}`);
        console.log(`comparing ${arr[0]} to ${arr[j]}`);
  
        if (arr[0] == arr[j]){
          counter++;
          console.log(`letter counter for ${arr[0]} just incremented to ${counter}`)
          arr.splice(j,1);
          j--;//Compensate for loss of length from splice. This is important if there are adjacent characters
        }
      }
      //Remove letter from the front so we can track the next one.
      arr.shift();     
      
      console.log(`letter counter modulo 2: ${counter%2}`);
      if (counter%2 == 0){} else {
        unMatched++;
        console.log(`unmatched pair logged. unMatched just incremented to: ${unMatched}`);
      }; 

      console.log(`unMatched: ${unMatched}, length: ${length}`)

      if (unMatched>=2 || unMatched>0 && length%2==0){
        return false;
      }
    }   
  return true;
}

// let input = "qllffxllqlff";
//expecting false, got true.

// let input = "ijewirigiqtofbuvilftviqodjermkvglcmddibwvcwuoiwkd" 
//Expected: true, instead got: false

// let input = "haqamjhvjscgpgxhbjccsbocjxjmjpovq" 
// Expected: true, instead got: false

let input = "racecars";

// let input = 'a';

//There are 12 characters and 1 unmatched so it is indeed not a palindrome. That is tested first, before the fact that we notice there are 5 l's and 1 x.
console.log(permuteAPalindrome(input));
