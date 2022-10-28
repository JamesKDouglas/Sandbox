//String input. Any characters. 
//No timeouts, moderate length. 

//Return a boolean, true or false. True if the # of x's match the # of o's 

//Case insensitive. 

function XO(str) {
  //toLowerCase.
  //Then make it into an array.
  //filter method, and filter.length. 
  //Count number of o's and x's this way. Compare.
  let numOs = str.toLowerCase().split('').filter((el)=>el === "o").length;
  let numXs = str.toLowerCase().split('').filter((el)=>el === "x").length;
  
  return (numOs === numXs);
} 

console.log(XO("sasfooXx"), true);
console.log(XO("xxx"), false);
console.log(XO("ooosssxxxx"), false);
