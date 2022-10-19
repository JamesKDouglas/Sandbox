// input just one integer as Number. No strings, no special characters etc.
// below BigInt.

// 81 => 9
// 15 => 3.87298
// 21 => 4.58258
// 39 => 6.245 (not 6.24500)

// return no trailing zeros, as in ex 4. Just the number.

// no timeout.

function squareRoot(x) {
    let sqrt = x**0.5;
    return parseFloat(sqrt.toFixed(5));
}

console.log(squareRoot(81), 9);

console.log(squareRoot(15), 3.87298);

console.log(squareRoot(39), 6.245);

console.time("test");
let n = 4.5*10**13;
console.log(squareRoot(n));
console.timeEnd("test");


//optimization: try some larger examples, like sqrt 40200000000
// console.time("test"), (fx) console.timeEnd("test");
// try some for loops?