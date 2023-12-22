//input will be a string of numbers, str, as well as a "chunk size", sz.

//the goal is to divide up the string into chunks of size sz, then examine and 
//modify each chunk based on these 2 rules:

//If a chunk has digits for which the sum of the cubes is even, reverse it.

//If not, rotate it to the left by one position.

//edge cases:Return "" if sz<=0 or if str is empty or if sz.length>str.length
//timeouts: none expected  12 000 ms. no large jobs. No bigInt.
//invalid inputs not expected. base 10 only.

function revrot(str, sz) {
  //early returns: str is empty, sz>str, sz<=0
  
  //divide str into sz sized pieces and store those in an array.
  //use substr() and a counter.

  //examine each piece: is it something we want to reverse or rotate?
  //divide the chunk into an array, then process the digits for the digits cubed test.
  //.reverse() to reverse. 
  //use shift and push to "rotate"

  //then assemble the chunks with some join() s.

  if (str.length = 0||sz<=0||sz>str.length){
    return "";
  }

  //cut up the string
  let pieces = [];
  let subString = "";
  for (let i=0;i<str.length/sz;i++){
    subString = str.substring(i*sz,(i+1)*sz);
    pieces.push(subString);
  }
  // console.log(pieces);

  //now examine each piece. We could use reduce but whatever.
  function isCubedEven(num){
    let sum = 0;
    let numArr = num.split("").map((el)=>+el);
    for (let i=0;i<numArr.length;i++){
      sum += numArr[i]**3;
    }
    if (sum%2 === 0){
      return true;
    }  else {
      return false;
    }  
  }

  //examine each piece
  for (let i=0;i<pieces.length;i++){
    if (isCubedEven(pieces[i])){
      pieces[i] = pieces[i].split("").reverse();       
      // console.log("reversed a piece!");
    } else {
      //rotate
      //cut off first char`
      let firstChar = pieces[i].split("")[0];
      // console.log(firstChar);
      let piece = pieces[i].split("");
      piece.shift();
      piece.push(firstChar);
      pieces[i] = piece;

      // console.log("rotated a piece:", pieces[i])

    }
  }

  // console.log(pieces);

  pieces = pieces.map((el)=> el.join(""));//could use .flat as well

  return pieces.join("");
}

console.log(revrot(`"123456987654",6), "234561876549");
console.log(revrot("123456987653",6), "234561356789");
console.log(revrot("", 8), "");
console.log(revrot("1234", 5), "");
console.log(revrot("1234", -5), "");``