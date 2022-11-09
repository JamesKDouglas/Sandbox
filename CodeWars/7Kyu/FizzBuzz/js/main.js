//input of N.
//This represents the sequence of integers 1 to N.
//ex: if N=5 that represents the sequence [1,2,3,4,5].

//Take a look at that sequence and replace some of the values.
//Replace the integer with a string in the following way:

//If the integer is a multiple of 3 and not 5 replace it with "Fizz"

//If the integer is a multiple of 5 and not 3 replace it with "Buzz"

//If the integer is a multiple of both 5 and 3 (15) then replace it with "FizzBuzz"

// Return an array of mixed types. Some integers, unchanged, and some strings as above.

//Large integers? No BigInt.
//No timeout.

//if n is undefined? return "must submit N!"
function fizzbuzz(n) {
    //handle undefined
    if (n===undefined){
      return "n isn't defined!"
    }
    
    //Generate array.
    let arr = [];
    for (let i=1;i<=n;i++){
      arr.push(i);
    }
    
    let newArr = [];
    
    //Go through the array. Build a new one.
    for (el of arr){
     
    //If the number is a factor of 3 ,5, or 15.
    //if it is then add fizz buzz or fizzbuzz.
    //if not just append the number
    
      if (el%15===0){
        newArr.push("FizzBuzz");
      } else if (el%3===0){
        newArr.push("Fizz");
      } else if (el%5===0){
        newArr.push("Buzz");
      } else {
        newArr.push(el);
      }
    }
    //return the newly built array.
    return newArr;
  }
  
  console.log(fizzbuzz(5), [1,2,"Fizz",4,"Buzz"]);
  console.log(fizzbuzz(1), [1]);
  console.log(fizzbuzz(15), [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]);
  
  