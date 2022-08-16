
// p input an array of 0's and 1's as numbers. It can be longer than 4 elements.
// r eturn the value of the binary represented as a base 10 number
// example [1, 0, 1, 1] returns 11.
// pseudocode:
//parseInt and toString are generally what we use for this.
// parseInt takes a string and current base, then outputs base 10 integer.
// toString takes a base 10 and returns a specific radix as a string
//so lets use parseInt here and report a base 10. Just convert the array to a string then use parseInt..

const binaryArrayToNumber = arr => {
    let str = arr.join('');
    return parseInt(str, 2);
};