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