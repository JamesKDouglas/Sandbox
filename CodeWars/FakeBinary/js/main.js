// p a string of digits is provided. 
// return a new string with all digits below 5 replaced with 0. All digits above or equal to 5 replaced with a 1.
// example: "55154" becomes "11010"
// pseudocode:
//Break into an array.
//(Coerce to number for testing)
//Test each element. If it's 5 or above the input into a new array is 1. otherwise 0.
// return the new array as a string
//As usual, no regex is allowed!

function fakeBin(x){
    let arr = x.split("");
    return arr.map(el=>el >= 5 ? 1 : 0).join('');//remember map is non-mutating. It returns an array.
    
     // let newArr = [];
    // for (let i=0;i<arr.length;i++){
    //     if (arr[i]>=5){
    //         newArr.push(1);
    //     } else {
    //         newArr.push(0);
    //     }
    // }
    // return newArr.join("");
}

x="55154";
console.log(fakeBin(x));

//function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }