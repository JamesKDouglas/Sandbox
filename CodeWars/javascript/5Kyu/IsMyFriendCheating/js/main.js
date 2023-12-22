//input of n. n represents a sequence of integers from 1 to n.
//n bigInt? No. 

//The goal is to find two integers, a and b, which are in the sequence, and
//when taken out their product is equal to the sum of the numbers remaining.

//so, imagine that a and b are initially numbers in the sequence 1 to n. 
//Remove them, multiply them together. They should equal the sum of the 
//integers in the sequence that were not removed.

//Now, there can be more than 1 solution. Indeed there may often be two since 
//a 'solution' is in the form [a,b]. [b,a] is considered a unique solution.

//if there is no solution, return an empty array.

// ex:
// n=26. a, b = 15, 21 or a,b = 21, 15
// removeNb(26) => [[15,21],[21,15]] 

//ex
//removeNb(100) => []

//timeouts? Job size? Don't worry about it. 

function removeNb (n) {
    //Gauss's sum? Reduce as brute force.
    //Gauss's summation: 1,2,3,4,5 =>15. n=5, sum of first and last are 6. n/2 =2.5 5*2.6 = 15
    
    //Then we could try removing integers. Well that would be the brute force way.
    //We could improve that by starting with a rough bracket.
    
    //eq 1: a*b = summation - (a+b)
    //a!=b
    //b<n, a<n
    //n>0, a and b must be positive
    //summation = (n/2)*(n+1)
    //some algebra:
    //a*b + a + b = summation
    //a(b+1) + b = summation
    //a = (summation-b)/(b+1)
    
    //This algebra doesn't consider that a and b have to be integers, but it's a good start.
    
    //lets proceed with the rest via brute force: count up with b, find an a and see if it's an integer.
    //If it is, we found a solution.
    
    let sumFullSeq = (n/2)*(n+1);// the 1 is because the sequence does always start at 1
    let a,b = 0;
    let solutions = [];
    for (let i=0;i<n;i++){
      b = i;
      a = (sumFullSeq-b)/(b+1);
      if (Math.floor(a) === a && a<n){
        //Then a is an integer and we have a solution.
        solutions.push([b,a]);
      }
    }
    return solutions;
  }
  
//   console.log(removeNb(26),[[15,21],[21,15]]);
  console.log(removeNb(100),[]);