//9:30 begin
// Average runtime: ?ms
// Input is 2 strings. One is random, the next is the random with three 
// added, identical, characters in sequence (one group) THEN SHUFFLED..
// 

// Return the added character.

//it could be any character.

// edge cases: 
//The first string is completely empty.
// well, if that letter does or doesn't appear at all in the first.
// just make sure you handle that undefined. Initialize the object?



function addedChar(s1, s2){
  //First, sort the strings according to letter.
  //Then, compare them.
  //That is, count all the letters of each. Ex 3 a's, 2 b's. etc.
  //identify the one with three extra!
    let letterCount1 = {};
    let letterCount2 = {};
    let a = "a".charCodeAt(0);
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    
    //initialize
    for (let i=0;i<26;i++){
        letterCount1[String.fromCharCode(a+i)] = 0;
        letterCount2[String.fromCharCode(a+i)] = 0;
    }
    
    for (let i=0;i<s1.length;i++){
      letterCount1[s1[i]]++;
    }
    for (let i=0;i<s2.length;i++){
      letterCount2[s2[i]]++;
    }
    
    //Now, which letter has 3 more than the others?
    let oddLetter = "";
    for (let i=0;i<26;i++){
      if (letterCount1[a+i] === letterCount2[a+i]){
        continue;
      } else{
        oddLetter = String.fromCharCode(a+i);
      }
    }
    return oddLetter;
  }
    