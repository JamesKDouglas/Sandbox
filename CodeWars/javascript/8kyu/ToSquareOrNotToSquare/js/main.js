let input = [ 9, 9, 9, 9, 9, 9 ];

console.log(squareOrSquareRoot(input));

/*
function squareOrSquareRoot(array) {
    for(i=0;i<(array.length);i++){
      if (Math.sqrt(array[i]) == parseInt(Math.sqrt(array[i]))){//if the sqrt is an integer
            array[i] = Math.sqrt(array[i]);// then assign the sqrt to that spot in the array
          }
          else{//otherwise, square the number
            array[i] = array[i]*array[i];
          }
    }
    return array;  
  }
*/

/*
function squareOrSquareRoot(array) {
    const arr = array.map(n=> {
        if (Math.sqrt(n) == parseInt(Math.sqrt(n))){
            return Math.sqrt(n);
        } else {
            return n*n;
        }
    })
    return arr;  
}
*/
