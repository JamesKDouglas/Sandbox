//input is n length of array returned, x which is the starting number.
//number type integers. no floats fractions, strings.

//if n is negative or zero, just return an empty array.

//Start with x, then square it and add that to the array. Then square it again
//and add that to the array.

//x=2,n=5 => [2,4,16,256,65536];
//x=3, n=3 => [3,9,81];

//if x=0, just carry on.

//timeouts? Large numbers? Nothing fancy expected. Below 9*10^15.

function squares(x, n) {
    //for loop.
    if (n<=0){
    return [];
    }
    //take in x and push a new element each loop around.
    let arr = [x];

    for (let i=0;i<(n-1);i++){
    arr.push(arr[i]*arr[i]);
    }
    return arr;    
}

console.log(squares(2,5), [2,4,16,256,65536]);
console.log(squares(3,3), [3,9,81]);