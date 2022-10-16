// parameters: The input is an array of positive (?) integers over 2 elements long. Smaller than BigInt.
// return: Return a processed version of the same length. The array as a single dimensional array.
// The processing is as follows:
// An array of products of all the elements is calculated. For each index in the returned array, the corresponding index of that factor is omitted from the calculated product.
// example:
// [1,5,2] is processed to be [10, 2, 5]. Note how the first element is a product of all the factors with the first omitted, the second omits the second factor, the third omits the third factor.
// pseudocode:
// We'll use a nested for loop.
// The outter loop goes through the array the number of times that it is long. 
// Each time the outter loop runs it adds just one number to the new array. It tracks the omitted factor.
// The inner loop calculates the product. During calculation it skips the index marked by the outter loop.

let numbers = [1,5,2];
function productArray(numbers){
    let prod = [];
    let prodTemp = 1;
    for (let i=0;i<numbers.length;i++){
        for (let j=0;j<numbers.length;j++){
            if (j==i){
                continue;
            }
            prodTemp *= numbers[j];
        }
        prod.push(prodTemp);
        prodTemp=1;
    }
    return prod;
}
console.log(productArray(numbers));
