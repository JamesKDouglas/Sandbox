// parameters: Input an array of "unique elements". Looks like positive integers.
// return: A rearranged array which takes the highest element, puts it first. Then the lowest. Next Highest, next lowest and so on. It's "bouncy".
// example:
// solve([15,11,10,7,12]) = [15,7,12,10,11]
// pseudocode:
// Make a new array to return.
//  Sort the original array highest to lowest.
// Unshift and pop into the new array. 

let arr = [15,11,10,7,12];
// = [15,7,12,10,11]

function solve(arr){

    //Sort highest to lowest
    arr=arr.sort((a,b)=>b-a);
    
    let newArr = [];
    let length = arr.length;

    //Construct new array
    for (let i=0;i<length/2;i++){
        newArr.push(arr.shift());
        newArr.push(arr.pop());        
    }

    //Trim end if the array was an odd # elements in length
    if (newArr[newArr.length-1]==undefined){
        newArr.pop();
    }
    return newArr;
};

console.log(solve(arr));