//The input is an array of positive integers. There are no repeats.

//The goal is to find the largerst two and return the product of them.

//bigInts? Nope. 
//Special cases? No expected invalid inputs.
//job size, timeouts? Nothing special. 
//Yes there is a timeout of 600ms for a job that would take 1900ms if you just sort

function maxProduct(a) {

    function findHighest(a){
      let highest = 0;
      for (let i=0;i<a.length;i++){
        if (a[i]>highest){
          highest = a[i];
        }
      }
      return highest;
    }
    let highest = findHighest(a);
    let ind = a.findIndex(el => el==highest);
    a.splice(ind,1,0);
    let secondHighest = findHighest(a);
    return highest*secondHighest;
  }
  
  console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842);
  console.log(maxProduct([154, 428, 455, 346]), 194740);
  console.log(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]), 187827);