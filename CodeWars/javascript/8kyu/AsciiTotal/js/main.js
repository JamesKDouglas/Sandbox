//input: string. "all printable ascii characters"

//output: an integer that represents the sum of all the ascii values.

//ex: a => 97
//  aaa => 291

//edge cases timeouts? 

function uniTotal (string) {
    //Reduce or a for loop, both are good. For is a bit clearer.
    let sum = 0;
    for (letter of string){
      sum += letter.charCodeAt(0);
    }
    return sum;
  }
  
  console.log(uniTotal("a"), 97);
  console.log(uniTotal("aaa"), 291);