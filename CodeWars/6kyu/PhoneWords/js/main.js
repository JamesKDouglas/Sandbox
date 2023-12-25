//Input of a string of numbers. Not an integer, a string.

//decode that string into text, based on a normal phone num pad arrangement:
//There is a map of characters to numbers.
//Repeating the number marches through the characters
//1 terminates this procession.
//If a number appears enough times in a row termination is automatic
//- we just use the last one.

//return a string of characters.

//if it's empty return empty.
//Any other edge cases? Special characters? Integers? Nope.

// 443355555566604466690277733099966688 -> hello how are you
// 55282 -> kata
// 777777 -> "sq"
// 7717777 -> "qs"

function phoneWords(stringOfNums) {
    //Make an object to map the numbers/letters to an array.
    
    let keypad = {
      0:[" "],
      1:[""],
      2:["a","b","c"],
      3:["d","e","f"],
      4:["g","h","i"],
      5:["j","k","l"],
      6:["m","n","o"],
      7:["p","q","r","s"],
      8:["t","u","v"],
      9:["w","x","y","z"],
    }
    // console.log(keypad[4].length);

    //Use a for loop to go through the string
    let counter = 0,
        newString = "",
        activeNum = 0,
        nextNum = 0;
    
    for (let i=0;i<stringOfNums.length;i++){
    
    //Use a character identifier and a counter and a string to build
    //Increment the counter, get the character ID
      activeNum = Number(stringOfNums[i]);//must match the type of the map key
    //   console.log("activeNum:", activeNum, "i:", i);

      nextNum = Number(stringOfNums[i+1]);
      
    //test to see if the counter is at the max value (if so, terminate, concat)
    //test to see if the input is terminated by a 1 (if so, terminate, concat)
    //test to see if a totally different number is pushed next
      if ((counter+1) === keypad[activeNum].length){
        //then terminate
        // console.log("max # keypress case");
        newString += keypad[activeNum][counter];
        counter = 0;
        continue;
      } else if (nextNum === 1){
        //for a real phone system we would have to consider the digits as they come in
        //But here we have the entire sequence already so we can look ahead
        newString += keypad[activeNum][counter];
        //1 only terminates, it doesn't have a character of its own so:
        // console.log("found a 1!");
        // console.log("concat a: ", keypad[activeNum][counter]);
        i++;
        counter = 0;
        continue;
      } else if (nextNum !== activeNum){
        newString += keypad[activeNum][counter];
        counter = 0;
        continue;
      }
      counter++;
    }
  //   return built string
    return newString;
  }
  
  // console.log(phoneWords("443355555566604466690277733099966688"),"hello how are you");
  // console.log(phoneWords("55282"), "kata");
  // console.log(phoneWords("777777"), "sq");
  // console.log(phoneWords("7717777"), "qs");
  // console.log(phoneWords("66885551555"), "null");
  
  function phoneWords2(stringOfNums) {  
    const keys = [' ', ,'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    //the 2{1,3} says match the element at least 1 time and no more than 3 times. 
    const regexp = /2{1,3}|3{1,3}|4{1,3}|5{1,3}|6{1,3}|7{1,4}|8{1,3}|9{1,4}|0{1}/g;    
    let result = '';  
    
    //the ?. here is called "optional chaining." It makes the function return an undefined instead of an error in a situation which would otherwise be null.
    //So we'll go through the sequence of numbers looking for sequences according to the regex. When it finds one, pass it to the function in map, which decodes it to a letter.
    let results = stringOfNums.match(regexp)?.map(nums => {
      //identify the id of the number.
      const key = keys[nums[0]];
      
      const letter = nums.length-1;  

      //This is a side-effect coming out of map. lets rewrite that.
      // result += key[letter];
      
      return key[letter];
    }); 
    
    return results.join("");
  }

  console.log(phoneWords2("443355555566604466690277733099966688"),"hello how are you");
  console.log(phoneWords2("55282"), "kata");
  console.log(phoneWords2("777777"), "sq");
  console.log(phoneWords2("7717777"), "qs");
  console.log(phoneWords2("66885551555"), "null");
  
  