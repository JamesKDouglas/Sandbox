// "digital root" refers to the sum of the digits all the way until there is only one digit.

//    16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// So the input is an integer number above 0. The output is an integer number as well. 

//Try to solve this recursively?

//no big Ints. 

//No funny business, no string inputs etc.

// Try a loop first

function digitalRoot(n) {
    let digArr = [];
    do{
      digArr = n.toString().split("").map(el => Number(el));
      n = digArr.reduce((a,c)=>a+c,0);
    }while(digArr.length>1)
    return n;
  }
  console.log(digitalRoot(16),7);
  console.log(digitalRoot(942),6);
  console.log(digitalRoot(132189),6);
  console.log(digitalRoot(493193),2);
  
//cleverer solution:
//   function digital_root(n) {
//     return (n - 1) % 9 + 1;
//   }
//can it be proven though?
  
  