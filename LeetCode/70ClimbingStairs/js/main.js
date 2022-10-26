/**
 * @param {number} n
 * @return {number}
 */

// input n, an integer. not "ten". type number.
// No BigInt.
// Just return a count of the # of ways. Not the actual ways.
// Zero, null, undefined? No, no funny business.

//Starting at the bottom, no up and down, straight to top. 
// no landing, no funny business like that.

//Timeouts? This could be an n^2 time complexity.

// 5 => (2,2,1), (1,2,2), (2,1,2), (1,1,1,1,1), (2,1,1,1), (1,2,1,1), (1,1,2,1), (1,1,1,2) => 8.

//3 =>(2,1),(1,2), (1,1,1) => 3.

//1 => (1) => 1.

var climbStairs = function(n) {
    var result = [];
     
    //generate 2, 1 combos before scrambling them.
    //Start with all 1's then add the two's one at a time
    let arrToDis = new Array(n).fill(1);
    let combos =[];

    do{
        combos.push(arrToDis.slice());
        arrToDis.shift();
        arrToDis.shift();
        arrToDis.push(2);
    } while (n%2===0 ? arrToDis[1]!==2 : arrToDis[0]!==2 );

    //recursively generate permutations
    function permutator(inputArr) {
        var results = [];
      
        function permute(arr, memo) {
          var cur, memo = memo || [];
      
          for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
              results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
          }
      
          return results;
        }
        return permute(inputArr);
    }

    //There are n! permutations so 4*3*2*1 is 24.
    //in order to use set to singulate we need to flatten the array.
    let uniqueCombos = [];
    let flatCombos =[];
    for (let i=0;i<combos.length;i++){
        flatCombos = permutator(combos[i]).map((el)=>+el.join(''));
        uniqueCombos.push(new Set(flatCombos));
    }
    return uniqueCombos.reduce((acc, el)=>acc + el.size,0);
  };
  
  console.log(climbStairs(5), 8);
  console.log(climbStairs(3), 3);
  console.log(climbStairs(1), 1);
  
  