//The input will be an array of integers. Both positive and negative.

//The goal is to find groups of numbers surrounded by -ve integers. The group
//can't contain a negative integer. 
//Then add the numbers contained up, and report the largest.

//return it as an integer
//If there isn't even one - that is, if there is just 1 -ve integer
//, just return -1.

//[4, -1, 6, -2, 3, 5, -7, 7] -> 8
//[4, -1, -2] -> 0
//[1,-2], -> -1

//Timeouts? none. Edge cases, job size? Not expected.

function maxSumBetweenTwoNegatives(a) {
    //nest some for loops. When a -ve container opens, start counting. Report when
    //it gets closed.
    
    
    if (a.filter(el => el<0).length <= 1){
      return -1;
    };
    let containerFlag = false;
    let maxSum = 0;
    let sum = 0;
    
    for (let i=0;i<a.length;i++){
      if (a[i]<0){
        containerFlag = true;//A container is open
        i++;
      }
      
      if (containerFlag){
        for (let j=i;j<a.length;j++){
          if (a[j]>=0){
            sum += a[j];
          } else if (a[j]<0){
            containerFlag = false;
            break;
          }
          
        }
      }
      
      if (containerFlag === false && sum>maxSum){
        maxSum = sum;
      }
      sum =0;
      
    }
    return maxSum ;
  }
  
  console.log(maxSumBetweenTwoNegatives([4, -1, 6, -2, 3, 5, -7, 7]), 8);
  console.log(maxSumBetweenTwoNegatives([4, -1, -2]), 0);
  console.log(maxSumBetweenTwoNegatives([1,-2]), -1);