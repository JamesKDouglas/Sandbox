function minSum(arr) {
    let sum=0;
  
    let newArr = arr.sort((a,b) =>(a-b));
    let loopL=Math.floor(newArr.length/2);
    
    for (let i=0; i<loopL;i++){
        sum+=+newArr.shift()*newArr.pop();
    }
    return sum;
  }
  //I did this on my phone in the park while drinking beer, so there is no PREP section etc.
  //They key was realizing that if you're going to have a minimum sum of products you must match the smallest numbers with the largest. So just sort the array and multiply the shift with the pop then add 'em all together..