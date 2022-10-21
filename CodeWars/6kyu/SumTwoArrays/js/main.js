// parameters:Two arrays containing integers are submitted.
// return: Return the arrays, added together as if they were unseparated numbers.
// example: [3,2,9],[1,2] --> [3,4,1]
// Note that his is 329 + 12 = 341.
// If the arrays submitted are empty just return an empty array.
// if there is a negative symbol in front of the first integer treat the number as a negative number.
// pseudocode:


let array1 = [];
let array2 = [];

// function addArrays(array1, array2) {
//     console.log(array1,array2);

//     if (array1 == [] && array2 == []){
//         return [];
//     }

//     let arrayToNumber1 = parseInt(array1.join(''));
//     let arrayToNumber2 = parseInt(array2.join(''));
    
//     if (!arrayToNumber1){
//         arrayToNumber1 = 0;
//     }
//     if (!arrayToNumber2){
//         arrayToNumber2 = 0;
//     }
    
//     console.log(arrayToNumber1);
//     console.log(arrayToNumber2);
//     let sum = arrayToNumber1 + arrayToNumber2;
    
//     console.log(sum);

//     if (sum==0){
//         return [];
//     }
    
//     let finalArr = sum.toString().split("").map(el => {
//             return (isNaN(el) ? "" :  Number(el));
//         }
//     );

//     if (finalArr[0]==""){
//         finalArr.shift();
//         finalArr[0] = finalArr[0]*(-1);
//     }

//     console.log(sum);
//     return finalArr;
// }

console.log(addArrays(array1,array2));

//ok this works fine but it is a bit long and rambling
// // here is a shorter version from vikrend
function addArrays(array1, array2) {
    let nbr1 = parseInt(array1.join('')) || 0
    let nbr2 = parseInt(array2.join('')) || 0
    let sum = Math.abs(nbr1 + nbr2)
    let sign = nbr1 + nbr2 < 0 ? -1 : 1
    let res = sum.toString().split('').map(x => Number(x))
    
    res[0] *= sign
    
    return nbr1 === 0 && nbr2 === 0 ? [] : res
}

//This has basicaly all the same steps but it is more compact. 
//- use the || to handle and empty array, which makes sense.
//- discard the sign because it just messes things up
// if it's negative grab a negative factor.
// they use parseInt instead of Number. Either is fine here although parseInt is quite different from Number, accepting radix and discarding decimals or scientific notation among other things