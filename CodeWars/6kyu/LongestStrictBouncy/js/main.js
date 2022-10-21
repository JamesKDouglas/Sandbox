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

let array = [-2,3,5,4,7,-4,5,5,7,5,9,-7,-1,-6   ];

function longestBouncyList(arr){
    console.log(`array: ${arr}`);

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

    let savej=0;
    let savei=0;
    let subarr = [];
    let span = 0;
    let spanP = 0;
    for (let i=0;i<deriv.length;i++){//Choose beginning point
        console.log(`i: ${i}`)
        for (let j=i;j<deriv.length;j++){//Choose point to analyze
            if (deriv[j]==0){
                //"or the special case of length 2 arrays, we will consider them strict bouncy if the two elements are different."
                //So that means when there are two identical elements that terminates bouncy.

                //But we do still have to keep searching after this point to see if there is a longer array.
                savej = j;
                savei = i;
                i=j;//to continue searching after this point
                break;
            } else if (deriv[j]==deriv[j+1]){//Matching slope magnitude so terminate bouncy sequence
                //handle the special case where the array is only 2 long
                savej = j+1;
                savei = i;
                console.log(`found a spot where the slope is the same twice in a row i: ${i} j: ${j}`)
                i=j;//to continue searching after this point
                break;
            } else if (j == (deriv.length-1) && deriv[j]!=deriv[j+1]){//bouncy until the end.
                console.log(`The end of the array is bouncy. j is ${j} i is ${i} length is ${deriv.length}`)
                savej = j;
                savei = i;
                span = savej+2-savei;
                console.log(`span: ${span} spanP: ${spanP}`)
                if (span>spanP){
                    spanP = span;
                    subarr = arr.slice(savei, savej+2);
                    return subarr;
                }
            }
        } 
        span = savej+1-savei;
        if (span>spanP){
            spanP = span;
            subarr = arr.slice(savei, savej+1);
        }
    }
    return subarr;
}
    

console.log(longestBouncyList(array));


