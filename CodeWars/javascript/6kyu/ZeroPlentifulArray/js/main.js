// parameters: Input an array of integers. The array may or may not have a series of zeros over 4 entries long.
// return: The number of groups of zeros over 4 elements long and report the number IF every sequence is 4 or more long.
// example: [0, 0, 0, 0, 0, 1]  -->  1
// [0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2

// # 2 group of 4 zeros (>= 4), thus the result is 2

// [0, 0, 0, 0, 1, 0]  -->  0 

// pseudocode:
//Iterate along the array looking for zeros. 

//If you find one then count the next four units and see if there is more than four entries of zeros. If so, add to a counter. If not, return zero.

let arr = [0, 0, 0, 0, 0, 1];
console.log(zeroPlentiful(arr));

function zeroPlentiful(arr){
    
    let zeroGroupCounter = 0;
    for (let i=0;i<arr.length;i++){
        
        console.log(`begin iterating through array`)
        let zeroCounter = 0;
        if (arr[i] == 0){
            console.log(`found a zero sequence start!`);
            
            while (arr[i] == 0){
                console.log(`count the zeros. count now is ${zeroCounter}`)
                zeroCounter++;
                i++;
            }
            
            if (zeroCounter>3){
                console.log(`found a group of zeros`)
                zeroGroupCounter++;
            } else {
                return 0;
            }
        }
    }

    return zeroGroupCounter;
}

//This is a more concise and fairly clever way which madmed88 wrote:
// function zeroPlentiful(arr){
//     var sequences = arr.map((x) => !x ? x : ',').join('').split(',').filter((str) => str);
//     return sequences.every((str) => str.length >= 4) ? sequences.length : 0;
//   }

//So it generates an array of strings, with x's for zeros. ex. [xxxxx,""]. Then filters out the empty ones and uses every to check to see if every single one is over 4 in length. If so it reports how many there are, if not return 0.