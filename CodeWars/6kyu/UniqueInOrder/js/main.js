//Input will be either a string OR an array. 
//A string of letters, both capital and uppercase.
//no special characters or punctuation? None.
//OR an array of numbers.
// What if we get something mixed like, ["AA",1,2,2,3]? No it will be either or.

//Size of input string? Small as in the examples.
//Size and character of the numbers? Positive integers not bigInt.

//Take that string and singulate characters. So return an array of the characters
//that appear but only one of each if there is a repeat sequence.

// AAAABBBCCDAABBB => ['A', 'B', 'C', 'D', 'A', 'B'];

//So this is not a Set. A appears twice because there are two sequences of A.

// ABBCcAD => ['A', 'B', 'C', 'c', 'A', 'D'];

//[1,2,2,3,3] => [1,2,3];
//This is increasing order but really the key is that it is the order they 
//appeared originally

var uniqueInOrder=function(iterable){
    //See if we've got a string or array. use typeof.
    //If it's a string, turn it into an array.
    
    if (typeof(iterable) ==="string"){
      iterable = iterable.split("");
    }
    
    //Then detect repeats:
    //use a for loop to look at the elements and detect a change.
    //Push the prior element onto a new array if a change is found.
    //At the end, handle the comparison to an undefined.
    let newSeq = [];
    for (i in iterable){
        i = Number(i);
        if (iterable[i]===iterable[i+1]){
          continue;
        }
        newSeq.push(iterable[i]);
    }
    // for (let i=0;i<iterable.length;i++){
    //   if (iterable[i]===iterable[i+1]){
    //     continue;
    //   }
    //   newSeq.push(iterable[i]);
    // }
    //Report the new array
    return newSeq;
  }
  
  console.log(uniqueInOrder("AAAABBBCCDAABBB"), ['A', 'B', 'C', 'D', 'A', 'B']);
//   console.log(uniqueInOrder("ABBCcAD"), ['A', 'B', 'C', 'c', 'A', 'D']);
//   console.log(uniqueInOrder([1,2,2,3,3]), [1,2,3]);