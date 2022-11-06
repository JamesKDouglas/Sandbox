
//Inputs are numbers data type string or Number.
//Input will be an array with these values.

//Timeout? No problem.
//null undefined? No, populated array. 
// no special character. No scientific notation.

// bigInt? Nope.

// return the sum of the numbers. the output is an integer.
// output type is a Number.
// [9, 3, '7', '3'] => 22
// ['5', '0', 9, 3, 2, 1, '9', 6, 7] => 42
// ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] => 41


function sumMix(x){
    let arr = x.map((el) => +el);
    let sum = arr.reduce((acc, el) => acc+el,0);
    return sum;
}

console.log(sumMix([9, 3, '7', '3']), 22);

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);

console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);


