//The input is a string of only ASCII characters.

//Our goal is to take that string and return the same text as "block letters"
//The block letters are 7 characters high and 5 wide with one buffer space between them.

//Return a string of the block letters. Remove any leading or trailing spaces.

//ex:
//Hello world => 
// H   H EEEEE L     L      OOO        W   W  OOO  RRRR  L     DDDD
// H   H E     L     L     O   O       W   W O   O R   R L     D   D
// H   H E     L     L     O   O       W   W O   O R   R L     D   D
// HHHHH EEEEE L     L     O   O       W W W O   O RRRR  L     D   D
// H   H E     L     L     O   O       W W W O   O R R   L     D   D
// H   H E     L     L     O   O       W W W O   O R  R  L     D   D
// H   H EEEEE LLLLL LLLLL  OOO         W W   OOO  R   R LLLLL DDDD

// an alphabet of block letters is provided as one giant string.

//Note that there needs to be a /n at the end.

//edge cases: capital/lowercase don't matter. empty returns empty
//timeouts: not expected. Modest job size.

function blockPrint(input){
  // console.log(" ".charCodeAt(0));//32

  //Clean up the string:
  //Change it to uppercase only. toUpperCase().
  //trim spaces on the front and back using trim().
  
  let cleanInput = input.toUpperCase().trim();
  
  //Create a map of arrays of arrays for the letters.
  let refAlph =  " AAA  BBBB   CCC  DDDD  EEEEE FFFFF  GGG  H   H IIIII JJJJJ K   K L     M   M N   N  OOO  PPPP   QQQ  RRRR   SSS  TTTTT U   U V   V W   W X   X Y   Y ZZZZZ A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     MM MM NN  N O   O P   P Q   Q R   R S   S   T   U   U V   V W   W X   X Y   Y     Z A   A B   B C     D   D E     F     G     H   H   I       J K K   L     M M M N   N O   O P   P Q   Q R   R S       T   U   U V   V W   W  X X   Y Y     Z  AAAAA BBBB  C     D   D EEEEE FFFFF G GGG HHHHH   I       J KK    L     M   M N N N O   O PPPP  Q   Q RRRR   SSS    T   U   U V   V W W W   X     Y     Z   A   A B   B C     D   D E     F     G   G H   H   I       J K K   L     M   M N   N O   O P     Q Q Q R R       S   T   U   U V   V W W W  X X    Y    Z    A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     M   M N  NN O   O P     Q  QQ R  R  S   S   T   U   U  V V  W W W X   X   Y   Z     A   A BBBB   CCC  DDDD  EEEEE F      GGG  H   H IIIII JJJJ  K   K LLLLL M   M N   N  OOO  P      QQQQ R   R  SSS    T    UUU    V    W W  X   X   Y   ZZZZZ ";
  //This reference string has 7 sets of 26 blocks, with each block 6 characters long
  //Each letter gets an array entry with an array of 7 lines.
  //Create this by decomposing the big example string using for loops.

  let refAlphArr = [[]];
  let letter = [];
  for (let i=0;i<25;i++){//make an entry for each letter
    for (let j=0;j<7;j++){//each entry will have 7 array elements (6 characters long each)
      //The first is A. That's letter 0 in the array. 
      //the sub array will be [" AAA  ","A   A ", "A   A ", "AAAAA ", "A   A ", "A   A ", "A   A "]
      //To retrieve this from the reference alphabet string, 
      letter.push(refAlph.slice(26*6*j+i*6, (26*6*j)+(i+1)*6));
      // console.log(letter);
    }
    refAlphArr.push(letter);
    letter = [];
  }
  //add the space character
  refAlphArr.push(["      ","      ","      ","      ","      ","      ","      "])
  
  // console.log(refAlphArr);
  let blockArr = [];
   //Then construct the new string by finding the charcodes one by one, subtracting
  //to align the char code with an array index. 
  for (let i=0;i<cleanInput.length;i++){
    // console.log(cleanInput[i].charCodeAt(0))
    if (cleanInput[i].charCodeAt(0) === 32){//it's a space, which doesn't map like the alphabet
      blockArr.push(refAlphArr[26]);
    } else {
      blockArr.push(refAlphArr[cleanInput[i].charCodeAt(0)-"A".charCodeAt(0)+1]);
    } 
  }
  // console.log(blockArr);
  // //Then assemble the block string with a for loop. Put a \n at the end of each line.
  let newString = "";
  for (let i=0;i<7;i++){//do this once for each line
    for (let j=0;j<cleanInput.length;j++){
      // console.log( blockArr[j][i]);
      newString += blockArr[j][i];
    }
    newString = newString.trimEnd();
    newString += "\n";
  }
  // console.log(newString);
  // return the created string.
  return newString; 
}

console.log(blockPrint("heLLo WorLD"), "H   H EEEEE L     L      OOO        W   W  OOO  RRRR  L     DDDD\nH   H E     L     L     O   O       W   W O   O R   R L     D   D\nH   H E     L     L     O   O       W   W O   O R   R L     D   D\nHHHHH EEEEE L     L     O   O       W W W O   O RRRR  L     D   D\nH   H E     L     L     O   O       W W W O   O R R   L     D   D\nH   H E     L     L     O   O       W W W O   O R  R  L     D   D\nH   H EEEEE LLLLL LLLLL  OOO         W W   OOO  R   R LLLLL DDDD");
//Close, but I think Codewars is complaining because there is a trailing space. The don't want any space after the very last character
//So for example, here each line contains a space after the D. It shouldn't. 
//I could either modify the reference alphabet so characters don't have spaces in them,
//then add the space another way. Or I could delete the final space for the last letter.

