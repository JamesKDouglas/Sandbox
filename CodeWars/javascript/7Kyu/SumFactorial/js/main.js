//input will be an array of positive integers. Each value is unique.
//how big are these integers? BigInts? How many of them?

//our goal is to calculate a sum of all the factorials of the integers.

//ex [4,6] => 4!+6! => 24+720 => 744

//just return the sum.

//edge cases? Timeouts? 

function sumFactorial(arr){
    //brute force version: 
    //calculate each factorial. Add them together.
    function findFact(num){
      let runningFact = 1;
      for (let i=1;i<=num;i++){
        runningFact = runningFact*i;
      }
      return runningFact;
    }
    let sum =0;
    for (let i=0;i<arr.length;i++){
      sum += findFact(arr[i]);
    //   console.log(sum)
    }
    return sum;
  }
  
  console.log(sumFactorial([6]), 720);
  console.log(sumFactorial([4,6]), 744);
  console.log(sumFactorial([5,4,1]), 145);