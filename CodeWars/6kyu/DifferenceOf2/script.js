//The input will be an array of integers. No duplicate integers.

//Find all of the pairs that can be made in which two integers differ by a magnitude of 2

//Output should be an array of arrays that arranges the integers into pairs. 
//The pairs have differences of two between the integers.

//No bigInts.
//No empty arrays.
//No negative integers.

function twosDifference(input){
    //first, sort the input array
    let sorted = input.sort((a,b)=>a-b);
    
    //Then go through from the start and see if the next one is 2 higher. If it is, 
    //add those two integers to the collection and remove them from the array.
    //If it isn't, check once more for an additional step ahead.
    let pairs = [];
    let num1 = 0;
    let num2 = 0;
    
    for (let i=0;i<sorted.length;i++){
      console.log("begin!", i);
      console.log(sorted.length);
      console.log(sorted);
      //compare this one to the next
      if ((sorted[i+1]-sorted[i]) === 2){
        //add them to the pair collection
        num1 = sorted[i];
        num2 = sorted[i+1];
        pairs.push([num1, num2]);
        
        //now remove them from the list. Right one first so we don't mess up the index
        sorted.splice(i+1,1);
        sorted.splice(i,1);
        i=-1;
      } else if ((sorted[i+2]-sorted[i]) === 2){
        //add them to the pair collection
        num1 = sorted[i];
        num2 = sorted[i+2];
        pairs.push([num1, num2]);
        
        //now remove them from the list. Right one first so we don't mess up the index
        sorted.splice(i+2,1);
        sorted.splice(i,1);

        //start again at the beginning. When the loop starts again it will increment to 0.
        i=-1;
      }
      console.log("i", i);
    }
    
    return pairs;
  }
  
  console.log(twosDifference([1,2,3,4]), [[1,3], [2,4]]);