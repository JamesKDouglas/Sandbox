//input that will be in 3 parts: a string, a width and a fill character.

//Padd the string on the start and end with the fill character, up to the width 
//value.

//How do we handle assymetry?
//left 1 char longer.

//if width is too short, do no padding.

//["a", 3, ' '] => " a "
//["abc", 10, '_'] => "____abc___"
//["abcdefg", 2, ' '] => "abcdefg"

//No big jobs. no timeout requirements.
//edge cases? invalid data type, 0's? Nope. All parameters provided.

function center (strng, width, fill = ' ') {
  //   console.log(typeof(strng));
  //find the difference between string and width.
  //That's the for loop length
  
  let loopLen = width-strng.length;
  
  if (loopLen<=0) return strng; //unmodified, just return it
  
  //turn that string into an array.
  let strngArr = strng.toString().split("");
  
  //for loop. it will be set to count the fill characters required
  //Add to the left, then to the right. Odd/even.
  for (let i=0;i<loopLen;i++){
    if (i%2 === 0){
      strngArr.unshift(fill);
    } else {
      strngArr.push(fill);
    }
  }
  
  //return as a string.
  return strngArr.join("");
}

console.log(center("a", 3, ' '), " a ");
console.log(center("abc", 10, '_'), "____abc___");
console.log(center("abcdefg", 2, ' '), "abcdefg");
