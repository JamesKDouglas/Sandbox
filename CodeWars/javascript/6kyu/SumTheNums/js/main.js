//The input will be an integer between 1 and 10^9
//So that's a bigInt. Call it N.

//What we want do is:
//Have a function that finds the sum of all numbers up to n.
//Call that function once for every integer between 1 and N. Add up the results.

//Return that result as a bigInt.

//timeouts? 10 000 ms 80 jobs, unsure of how large they are.

// sumOfSums(3n) => 55n
// sumOfSums(5n) => 630n
// sumOfSums(100n) => 14,740,530,850n

//We do get to some very large numbers very quickly. Are we going to use memoization?
//We may have to come up with an algorithm.
//brute force first.
//for N = 3
// for s n=3:
// 1=> 1, 2=>1+2 = 3, 3=>1+2+3 = 6
// so 1+3+6 = 10.
// for s n=2
// 1=>1, 2=> 1+2
// so 1+3 = 4
// for s n=1
// 1=>1

// so 10+4+1 => 15
//Ok so probably the reason this exercise gets a low score 
//is that it is poorly described

//what they are describing is:
//s(3) = 10.
//Now find s(10)
//10+9+8+7+6+5+4+3+2+1
//=55


function sumOfSums(N) {
    //brute force first
    
        function s(n){
    //       console.log(`call s being passed ${n}`)
          let sum = 0n;
          let sumAll = 0n;
          for (let i=0n;i<=n;i++){
            sum = sum + i;
            sumAll += sum;
    //         console.log(sumAll);
          }
          return sumAll;
        }
        
        function z(n){
          let sum =0n;
          for (let i=0n;i<=n;i++){
            sum += i;
          }
          return sum;
        }
      
        let stage1 = s(N);
    
        let stage2 = z(stage1);
        return stage2;
    }
    
    console.log(sumOfSums(3n), 55n);
    console.log(sumOfSums(5n), 630n);
    console.log(sumOfSums(100n), 14,740,530,850n);