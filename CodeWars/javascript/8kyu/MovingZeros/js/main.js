
function moveZeros(arr){
   let zeros = arr.filter(n=>n===0);
   let newArr = arr.filter(n=>n!==0);    
    return newArr.concat(zeros);
}

/*
var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
  }
*/
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]
