
//Integer as input. not, ex. "eleven" but number type. 
//output is also an integer of number type.
//Big Int? Nope.

//what if we just get 1 digit? 2 is a palidrome. So is 3.

//output is going to be a palindrome, the smallest palindrome larger than the input.

//negative numbers? Don't expect them.

//if null? Not expected.

//202 is not an exception, zeros are just like other digits.


function nextPal(val) {
    let searchNum = val + 1;
    while(searchNum.toString().split("").reverse().join("") !== searchNum.toString().split("").join("")){
      searchNum++;
    }
    return searchNum;
}
  
  console.log(nextPal(11),22);
  console.log(nextPal(191),202);
  console.log(nextPal(2541), 2552);