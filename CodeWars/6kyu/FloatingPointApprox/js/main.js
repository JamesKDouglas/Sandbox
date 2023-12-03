//input will be a number close to zero, like 1^10-15.

//The goal is to return the value f calculated as:
//f = (1+x)^0.5 - 1

//The term (1+x)^0.5 is very close to 1 when x is very small.

//That means we are subtracting to very similar numbers. Javascript does not do that well.

//Just evaluating it in a straight forward manner results in
//a badly approximated value.

//try to return the answer to a precision of 17 decimal places.

//ex
//just doing the calculation in javascript below
//x = 10^-15 (written in JS as "1e-15")
// would give
//f = 4.4408...e-16
//while the more precise answer is
//4.99999999999999875e-16

//I couldn't figure this out because I didn't understand the algebra.

//It turns out that somehow even though //f = (1+x)^0.5 - 1
//also,
//  f                                                              = x/((1+x)^0.5 + 1)

//I don't know how people came up with that but it's fairly easy to prove that it's true:
// (1+x)^0.5 - 1                                                   = x/((1+x)^0.5 + 1)
// ((1+x)^0.5 - 1)*((1+x)^0.5 + 1))                                = x
// (1+x)^0.5*(1+x)^0.5 + (-1)*(1+x)^0.5 + (1)*(1+x)^0.5 + (-1)*(1) = x
// (1+x) - (1+x)^0.5 + (1+x)^0.5 -1                                = x
// (1+x) - 1                                                       = x
// x =x

//the key seems to be that we have to rearrange the equation to find a version that does
//not use subtraction.

function f(x) {

  // const f = x =>  x / (Math.sqrt(1 + x) + 1);

  // console.log(Math.sqrt(1 + x)+1);
  // console.log(Math.sqrt(1 + x));

  // console.log(x/(Math.sqrt(1 + x) + 1));

  // let f = x/(Math.sqrt(1 + x) + 1);
  

  console.log(Math.sqrt(1 + x)-1);

  let t = Math.sqrt(1+x);
  console.log(t);
  console.log(t.toFixed(22));
  console.log(t.toPrecision(23));
  console.log(t-1);

  console.log((t+1).toFixed(22));
  console.log((t+1).toPrecision(23));

  console.log(1/(t+1));

  let f = x/(t+1);

  console.log(f);

}



console.log(f(1e-15), 4.99999999999999875e-16)
// console.log(f(1.7e-15), 8.499999999999996e-16);
// console.log(f(1e-100), 1.0e-100);//?
// console.log(f(4.6e-16), 2.3e-16);