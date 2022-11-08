

//array of integers. Number type. 

//All of them are square? square root is an integer. True if all of them are
//square. If even one of them doesn't have a square root that is an integer,
//return false

//size? Below bigInt. 
//how many elements are we expecting? Modest # so no timeout issues.

//if the input array is empty just return ? null.

var isSquare = function(arr){
  //for loop
  //use Number.Sqrt() and floor. compare to sqrt.
  //isInt could also work fne.
  
  if (arr.length === 0){
    return undefined;
  }
  
  for (let i=0;i<arr.length;i++){
    if (Math.sqrt(arr[i]) !== Math.floor(Math.sqrt(arr[i]))){
      return false;
    }
  }
  return true;
}

console.log(isSquare([1,4,9]), true); //expect a boolean returned.
console.log(isSquare([1,3,9]), false);
console.log(isSquare([]), undefined);   
