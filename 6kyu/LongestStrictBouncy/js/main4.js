// parameters: Input an array of any integers. The longest expected is 825 elements to solve in 12s with a processor about twice as fast as my laptop.

// return: The longest sequence from the array that is "bouncy". That is, the longest sequence that contains integers that repeatedly go up and down in value. If the value goes up or down twice in a row the sequence is not "bouncy". Arrays of length 2 with different values are bouncy, and a an array of length 1 is considered bouncy. So always at least 1 number from array of length 1 or over will be returned.

// example:
//arr = [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8]
//[7,9,6,10,5,11,10,12] (length = 8)  is the longest.
//Note that there is a second sequence here, 
// [4,2,5,1,6,4,8] (length = 7)
// Since it is shorter it won't be returned, it is just ignored.

// pseudocode:
//find the derivative.
//Go throught the derivative array and look for a change in slope for each element. If there isn't then the array is no longer bouncy.
//go through with nested for loops. We have to look at every single possible sub array.

// This algorithm is considered "brute force". It will be slow, just like in the binary contig array. The number of operations will be related to the square of he number of elements, which isn't very good. But the max size we are looking at is just 825 elements.

// let array = [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8];
let array = [ 1, 2, 3, 4, 5, 6 ];
//[ 1, 2, 3, 4, 5, 6 ]
//deriv 1,1,1,1,1
// expect [1,2];
// got [1]


//[ -4, -3, -6, 11, 6 ]
//       [-1,-9,11,13,-18, -4,-3,-6,11,6, 6,-15,-11,4,10,-10,-6 ];
  //deriv  [-8,20,2,-31,14, 1,-3,17,-5,   0,-21,4,15,6,-20,4]
//           -1,1,1,-1,1, 1,-1,1,-1,   0, -1,1,1,1,-1,1
//now the problem is literally becoming binaryContigArray!

//[ 7, 9, 6, 10, 5, 11, 10, 12, 13, 4, 2, 5, 1, 6, 4, 8 ]
//    [1,-1,1,-1,1,-1,1,  1,-1,-1,1,-1,1,-1,1]
//got [ 7, 9, 6, 10, 5, 11, 10, 12, 13, 4 ]
// should get [ 7, 9, 6, 10, 5, 11, 10, 12 ]

// lets take that a step further and make it -1 0 or +1

console.log(`array: ${array}`);


function longestBouncyList(arr){
    console.log(arr);

    //early return
    if (arr.length==1){
        return arr;
    }

    //calculate derivative
    let deriv = [];
    for (let k=0;k<arr.length-1;k++){
        if ((arr[k+1] - arr[k])>0) deriv.push(1);
        if ((arr[k+1] - arr[k])==0) deriv.push(0);
        if ((arr[k+1] - arr[k])<0) deriv.push(-1);
    }
    console.log(`derivative magnitude: ${deriv}`);

    let savej = 0;
    let savei = 0;
    let span = 0;
    let spanP = 0;
    for (let i=0;i<arr.length;i++){
        for (let j=i;j<arr.length-i;j++){
            //off by 1 from derivative calc
            if (deriv[j]==deriv[j+1] || deriv[j+1]==0) {
                span = j-i;
                if (span>spanP){
                    savej = j+1;
                    savei = i;
                    spanP = span;
                    i =j+1// There's no point in just searching from i+1 again, you know bounciness will terminate with a shorter sequence so lets just start working after j
                }
                console.log(`end bouncy at ${savej}`)
                break;
            };
        }
    }
    
  //special case when there is no change in magnitude of slope, we can't report a single value as the bouncy array. It's just an arbitrary definition of "bouncy" so lets handle that
  //unless slope was just always zero then it's ok.  
  if ((savej-savei)==0 && deriv[savej] != 0){
    savej++;
  }

    //off by one because slice is not inclusive.
    return arr.slice(savei, savej+1);
}

console.log(longestBouncyList(array));


