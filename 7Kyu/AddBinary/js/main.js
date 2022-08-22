// Input two numbers. They enter as two variables. They are in base 10.
// Return their sum, represented in binary.
// ex, 1,1 becomes 10
// This is what toString is for. ParseInt goes to base 10, toString goes from it into whatever radix.
// so just add them and return from toString.

function addBinary(a,b) {
    console.log(a);
    console.log(b);
    let sum = a+b;
    console.log(sum);
    return sum.toString(2);
  }