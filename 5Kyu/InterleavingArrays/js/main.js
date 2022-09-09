// parameters: Accept an arbitrary number of arrays. Then interleave them. If an array is too short then use empty values to continue the interleaving.
// return: A single array that is a combination of all the input arrays
// example:interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]) === [1, 4, 7, 2, 5, 8, 3, 6, 9]
//No example given for filled values - zeros or null or nan or what? Likely zeros.
// pseudocode:
//Use the arguments object to allow arbitrary arguments.

//Then just go through them and shift off values into a new array. Put a line in there that if the element doesn't exist add a zero instead.

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8];

function interleave(){
    let newArr = [];
    let lengths = [];

    let max = 0;
    let min = arguments[0].length;
    for (i in arguments){
        lengths.push(arguments[i].length);
        if (arguments[i].length<min){
            min = arguments[i].length;
        }
        if (arguments[i].length>max){
            max = arguments[i].length;
        }
    };

//     console.log(`${max}, ${min}`);
    
    //The interleaving could also be recursive?
    for(let i=0;i<max;i++){//Once for each position.
        for (let j=0;j<arguments.length;j++){//go through each array
            if(arguments[j].length !=0){
                newArr.push(arguments[j][0]);//add it to new array
                arguments[j].shift();//remove it from old one
            } else {
                newArr.push(null);
            }
        }
    }
    return newArr;
}

interleave(arr1, arr2, arr3)