//Input integer n. Can be +ve or -ve.

//It represents an index in a series call the Lucas Series.

//The goal is to return the value of the series at that index (n)

//The lucas series is defined by:
//L(0) = 2
//L(1) = 1
//L(n) = L(n-1) + L(n-2)
//For positive n

//For negative n,
//L(0) = 2
//L(1) = 1
////L(n) = L(n+2) - L(n+1)

//edge cases? BigInts not expected.
//Fractions? None. Only integers.
//invalid inputs? nope. 
//timeouts? 12 000 ms can't say more than that. 

function lucasnum(n){
  //use a brute force method
  //for loop and 2 variables.
  //2 of them - one for n<0 and one for n>0
  
  //edge cases n=0, 1
  
  if (n===2){
    return 3;
  } 
  
  if (n===1){
    return 1;
  }
  
  if (n===0){
    return 2;
  }
  //for n<0 start by calculating L(-1)
  let ln = 0;
  let lnp2 = 1;
  let lnp1 = 2;
  
  //for n>0 start y calculating L(2)
  let lnm1 = 1;
  let lnm2 = 2;
  
  if (n<0){
    //L(n) = L(n+2) - L(n+1)
    for (let i=-1;i>=n;i--){
      ln = lnp2 - lnp1;
      
      lnp2 = lnp1;
      lnp1 = ln;
      
    }
    return ln;
  } else if (n>0){
  //L(n) = L(n-1) + L(n-2)
    for (let i=2;i<=n;i++){
      ln = lnm1 + lnm2;
      
      lnm2 = lnm1;
      lnm1 = ln;
    }
    return ln;
  } 
}

console.log(lucasnum(-10), 123);
console.log(lucasnum(10), 123);
console.log(lucasnum(-1), -1);



//there are a lot of minified solutions and ones that really should have an accompanying mathematical proof
//But this one is a good recursive solution by rodming:

//var saida = new Array();
// function lucasnum(n){
// 	if (n == 0) {
// 		return 2;
// 	} else {
// 		if (n == 1) {
// 			return 1;
// 		}
// 	}

// 	if (!saida[n]) {
//     if (n > 0) {
//       saida[n] = lucasnum(n-1) + lucasnum(n-2);
//     } else {
//       saida[n] = lucasnum(n+2) - lucasnum(n+1);
//     }    
// 	}

//   return saida[n];
// }