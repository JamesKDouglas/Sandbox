//Given the equation,
//U = x + 2x**2 + 3x**3 ... nx**n

//when x is between 0 and 1 and n is a positive integer.
//this converges to a finite value, m, as n becomes very large.

//given m, find x to the nearest 1e^-12. m will be provided to 0.1.

//edge cases: 0? well then x is just 0.
//timeout? 12 000 ms for 1 case.
//no invalid inputs expected.

function solve(m) {
  //brute force is to just implement the equation and keep trying.
  
  //more accurately, we are trying to compute as n approaches the limit of inf.
  
  //suppose we just choose an n and say that's close enough
  
  //n =1000

  //then try some x's and see if it's close to m

  //we're working on a solver. What if we notice the correct digit then keep working on 
  //it that way?
  // or use a PID model. Start with just using d. 

  
  let roughx = startSolve(m);

  return roughx;
  function startSolve(m){
    //This is a simple starting algorithm. In a few runs we get a rough x.
    //solver cycles
    let n = 100;

    //input
    let x = 0.11;

    let u = x;

    //it uses a PD loop as in PID without the I.
    //P
    let changefac = 1.01;
    //D
    let diff  = 0.01;

    let lastx = 0;

    for (let j = 0;j<100;j++){//adjust x 100 times

      // console.log("x:", x);
      for (let i=2;i<n;i++){
        u += i*x**i;
      }
      // console.log("calculated u:", u)

      if (u>m){
        // console.log("u is too high. diff:", (m-u));
        return lastx;
      } else if (u<m){
        // console.log("u is too low. diff:", (m-u));
        x = x*changefac+(m-u)*diff
        lastx = x;
      }

      u = x;
    }
    return x;
  }
}

console.log(solve(8.0), 0.7034648345913732);
console.log(solve(2.0), 0.5000);
console.log(solve(4.00), 6.096117967978e-01)