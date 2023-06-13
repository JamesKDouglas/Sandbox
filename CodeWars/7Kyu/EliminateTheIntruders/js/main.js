//Input will be a binary series as a string type.

//The goal is to remove all of the zeros

//Then report the number containing only 1's in base 10 as a number.

//ex:
//11010101010101 => 11111111 => 255

//111 => 7

//000 => 0

//Invalid inputs, like unexpected character? Nope.
//How large? Not bigInts.
//Timeouts? For something quite large? Nope not really.

function eliminateUnsetBits(number) {
    //put it into an array.
    //Remove zeros
    //use parseInt
    
    let arr = number.split("");
    let arr2 = [];
    for (let i=0;i<number.length;i++){
      if (arr[i] === "0"){
        continue;
      } else {
        arr2.push(1);
      }
    }
    console.log(arr);
    console.log(arr2);
    
    return parseInt(arr2.join(""), 2)||0;
  }
  
  console.log(eliminateUnsetBits("11010101010101"), 255);
  console.log(eliminateUnsetBits("111"), 7);
  console.log(eliminateUnsetBits("1000000"), 1);
  console.log(eliminateUnsetBits("000"), 0);