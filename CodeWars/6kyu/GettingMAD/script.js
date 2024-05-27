//array input of integers
//find the minimum absolute difference between any two elements in the array
//output it as an integer

//size modest
//edge cases? empty array not happening. MAD can be zero.

function gettingMad(array) {
    // return the minimum absolute difference
  
  //sort, then look for min. 
  
  let sorted = array.sort((a,b)=>a-b);
  
  let min = Math.abs(sorted[sorted.length-1] - sorted[0]);
  console.log(sorted);
  for (let i=0;i<sorted.length-1;i++){
    if (Math.abs(sorted[i]-sorted[i+1])<min){
        min = Math.abs(sorted[i]-sorted[i+1]);
    }
  }
  return min;
}

console.log(gettingMad([-10,0,-3,-1]), 1);

console.log(gettingMad([-69,-808,828,57]), 126);