//input of a string. We'll call that s. Any characters. Escape characters too. \n

//goal is to identify which character is repeated consecutively most often.
//then report that as an array, with the first element the character, 
//and the second element and integer of the longest repeating sequence.

//If two characters have repeating sequences of the same length, report the first 
//one that occurs.

//empty string: return ["",0]
//"aaaab" => ["a",4]
//"aabbbbccdddd" => ["b", 4]

function longestRepetition(s) {
  
    //declare a counter.
    //declare an array to hold a result.
    //early return for empty case.
    
    //for loop, let's use for of.
    //Left hand side to the right, if the character is the same as before, 
    //add to the counter.
    //When the character changes, check the counter against the result array.
    //If it's longer, replace it.
    //If not, carry on
    
    let counter = 1;
    let result = ["",0];
    
    if (s.length === 0){
      return result;
    }
    
    for (let i=0;i<s.length;i++){
      if (s[i]===s[i+1]){
        counter++;
      } else if (counter>result[1]) {
        result[0] = s[i];
        result[1] = counter;
        counter = 1;
      } else {
        counter = 1;
      }
    }
    return result;
  }
  
  console.log(longestRepetition(""), ["",0]);
  console.log(longestRepetition("aaaab"), ["a",4]);
  console.log(longestRepetition("aabbbbccdddd"), ["b", 4]);