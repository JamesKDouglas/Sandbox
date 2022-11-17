//input: array of strings. Each string has only 1 letter type, which may repeat.
//return an array of strings in which each string has the same letter identity as the first but the length of each string is equal to the average length of all the strings in the first array.

//output: an array of string, with each string containing only 1 letter, possibly with altered length compared to the original array.

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

//no bigInts. No extremely large arrays.

//['au','gg'] ? can we expect this? No don't worry.
//at least 1 element long.
//[""] ? No not likely.
//["au",""] nope

function averageLength(originalArr) { 
    //Create new array (numChars) with map, counting the length of each element. The array will contain the length of each element.
    let numChars = originalArr.map(el=>el.length);
    //['aa', 'bbb', 'cccc']=>[2,3,4]
  
    //Then use reduce to operate on numChars to sum the values. Find the average by dividng by the number of element.
    //Then round. Save that value (lengthAvg).
    let lengthAvg = Math.round(numChars.reduce((a,c) => a+c, 0)/numChars.length);
    // [2,3,4] => 3
    
    //Take a look at each element with some kind of loop. For loop.
    //Make a new array with the loop. A new element for each position in the original array - a new string. Use charAt[0] to ID the character then string method repeat to build the string. Just push it onto the new array.
    let newArr = [];
    for (let i=0;i<numChars.length;i++){
      newArr.push(originalArr[i].charAt(0).repeat(lengthAvg));
    }
    //newArr to be ['aaa', 'bbb', 'ccc']
  
    // return the array
    return newArr;
  }
  
  console.log(averageLength(['u', 'y']), ['u', 'y']);
  console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']);
  console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']);
  