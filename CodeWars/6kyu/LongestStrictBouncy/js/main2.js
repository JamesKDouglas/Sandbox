// parameters: Input an array of any integers. The longest expected is 825 elements to solve in 12s with a processor about twice as fast as my laptop.

// return: The longest sequence from the array that is "bouncy". That is, the longest sequence that contains integers that repeatedly go up and down in value. If the value goes up or down twice in a row the sequence is not "bouncy". Arrays of length 2 with different values are bouncy, and a an array of length 1 is considered bouncy. So always at least 1 number from array of length 1 or over will be returned.

// example:
//arr = [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8]
//[7,9,6,10,5,11,10,12] (length = 8)  is the longest.
//Note that there is a second sequence here, 
// [4,2,5,1,6,4,8] (length = 7)
// Since it is shorter it won't be returned, it is just ignored.

// pseudocode:
// Use a nested for loop.
// Start at a position. 
// Go through the array and see if the value goes up or down. 
// Track whether the last move was either up or down. 
// If there are two ups or two downs then escape the for loop and report the index.
//  Move to the next position.

// This algorithm is considered "brute force". It will be slow, just like in the binary contig array. The number of operations will be related to the square of he number of elements, which isn't very good. But the max size we are looking at is just 825 elements.

// let array = [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8];
let array = [ -1, -9, 11, 13, -18, -4, -3, -6, 11, 6, 6, -15, -11, 4, 10, -10, -6 ];

function longestBouncyList(arr) {
    if (arr.length == 1){
        console.log(`early return!`);
        return arr.length;
    }
    if (arr.length == 2 && arr[0] != arr[1]){
        console.log(`early return!`);
        return arr.length;
    }

    let moveTracker = 0;
    let moveTrackerP = 0;
    let el1 = 0;
    let el2 = 0;
    let span = 0;
    let spanP = 0;

    let savei = 0;
    

    for(let i=0;i<arr.length;i++){//Start search location
        // console.log(`begin searching at ${i} which is a ${arr[i]}`);
        for (let j=i;j<arr.length-1;j++){
            // console.log(`examine elements ${j} and ${j+1} which are ${arr[j]} and ${arr[j+1]}`);
            el1 = arr[j];
            el2 = arr[j+1];
            moveTrackerP = moveTracker;

            // console.log(`previous two elements moved by ${moveTrackerP}`);
            moveTracker = el2-el1;
            if (moveTracker>0 && moveTrackerP>0 || moveTracker<0 && moveTrackerP<0 || moveTracker==moveTrackerP && moveTracker==0 ){
                span = j-i;
                // console.log(`sad panda no more bounce after length ${span}`);
                break;
            }
        }
        
        if (span>spanP){
            console.log(`found a longer sequence. Max span was ${spanP} and now is ${span}`)
            spanP = span;
            savei = i;
        }
    }
    return arr.slice(savei, savei+spanP+1);
}

console.log(longestBouncyList(array));