//Input: integer expected. If it is a string return "Error".

//Our goal is to multiply the integer by 50 and add 6.

//BigInts? Nope.
//Boolean? Not expected.

//ex: 
//1 => 56
//"a" => Error
//5 => 256

function problem(x){
    console.log(x);
    if (typeof(x) === "string"){
      return "Error";
    } else {
      return x*50+6;
    }
  }
  
  console.log(problem(1), 56);
  console.log(problem("a"), "Error");
  console.log(problem(5), 256);
  console.log(problem(-3), -144);
  
  console.log(problem(""), "Error");