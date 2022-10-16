// String.prototype.toJadenCase = function (thisString) {
//     return thisString;
// };

// let str = "How can mirrors be real if our eyes aren't real";

// console.log(str.toJadenCase ());

//The issue here is dealing with prototypes, not the problem 'content'.
//So I'm just going to look at a solution.

//A solution, posted on codewars
// String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }

//   //So, does this actually work?
// let str = "How can mirrors be real if our eyes aren't real";

// console.log(str.toJadenCase());

//Yes it does.

String.prototype.toJadenCase = function () { 
    return this.split("").join("");
  }

  //So, does this actually work?
let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());
