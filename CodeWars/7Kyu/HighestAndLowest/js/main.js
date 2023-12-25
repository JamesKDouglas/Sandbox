function highAndLow(numbers){
    let arr = numbers.split(" ").map(el=>Number(el)).sort((a,b)=>a-b);
    return `${arr[arr.length-1]} ${arr[0]}`;
  }