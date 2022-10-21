// parameters:Two arrays of nevative, zero or positive integers, sorted in ascending order and up to 1 million entries. A query index, n, is also submitted.

//no integer appears twice in both arrays. They are not necessarily the same length.

// return: Return the value at the index n of the sorted union of the arrays. 
// example:
//array1 = [1, 3, 4], array2 = [2, 6, 8]
//the union would be, [1, 2, 3, 4, 6, 8]
//if n were 5, the returned result would be 8. That's starting ar 0.

//that isn't the best example though because it's just the end value.
// pseudocode:

//the "brute force" aka straightforward simple way would be to just join the arrays and sort them then retrieve n. However, this exercise is pushing for a faster way of doing that with largish datasets.

//because both arrays are initially sorted, if the values are random then beginning a search at Math.ceil(n/2) is likely to be a good place to start. Movement may also be based on the range and size of the array.

//We can calculate what n would be if the arrays were joined and sorted, without ever actually doing so. 

//Begin at ind = math.ceil(n/2). Compare both values. 

//case 1: array 1 is much lower than array 2, so if they were merged and sorted we would just be retrieving n from arr1. arr2[ind] > arr1[ind] and also arr2[ind-1]>arr[ind-1]. 

//case 2: arr1 is much higher than arr2, so if we were to merge and sort we would just be retrieving n from arr2. arr2[ind]<arr1[ind] and arr2[ind-2]<arr1[ind-1].

//These two are simple returns because we can just compare the end/start values to realize his.
//The point is, where arr1[index]<arr2[index] for the first time we have found the interface.

//Basically, if we add both indexes together and they equal n, and there is a related condition involving the magnitudes of the surrounding elements then we've found it.

//Ok I can't figure it out this way. How about a more efficient sorting algorithm that takes advantage of the fact that they are already sorted?

// let arr1 = [1,3,4];
// let arr2 = [2,6,8,9];
// //union sorted would be [1,2,3,4,6,8,9]. So here we can see that one array completely ends then the next is added. That does simplify things if we want to use that fact. Get the max value, then count the contribution to the index and search for where it would be joined by comparing values 
// let n = 5;
// function twoArraysNthElement(array1, array2, n) {

//     //fast returns
//     max1 = array1[array1.length-1];
//     max2 = array2[array2.length-1];


//     let ind1,ind2 = Math.ceil(n/2);
//     let found = false;
//     for (let i=Math.ceil(n/2); found = true;i++){

//     }
    
    
// }
// console.log(twoArraysNthElement(arr1,arr2,n));

// let arr1 = [1,3,4];
// let arr2 = [2,6,8,9];
// let n = 5;



// function twoArraysNthElement(array1, array2, n) {
//     console.log(`begin`)
//     console.log(array1);
//     console.log(array2);
//     console.log(n);
// //sort
//     let newArr = [];
//     let j=0;
//     let k=0;
//     for (let i=0;i<=n;i++){
//         if (array1[j]<array2[k]){
//             j++;
//         }
//         if (array1[j]>array2[k]){
//             k++;
//         } 
//     }

//     //Either the arrays get interspliced, and the value we are looking for is in there, or maybe it's just on one end.
//     let num;

//     if (j+k == n){//then we were going back and forth until we found the index.
//         if (j>k) num = array1[n-j];
//         if (j<k) num = array2[n-k];
//     } 
//     else if (j==0) {
//         if (j==0) {//That means arr2 has entirely smaller values than arr1
//             num = array1[n-array2.length-1];
//         } 
//     else if (k==0){
//         //arr1 has entirely smaller values than arr2
//         num = array2[n-array1.length-1];
//     }
//     else {
//         //ya I'm just really confused and can't figure this out.
//     }

//     return [j,k,num];
// }

let arr1 = [1000000,1000004]
let arr2 = []
let n = 0 

function twoArraysNthElement(array1, array2, n) {
    //     console.log(`begin`)
    //     console.log(array1);
    //     console.log(array2);
    //     console.log(n);
      
        if (array1.length ==0){
          return array2[n];
        }
        if (array2.length ==0){
          return array1[n];
        }
      
        let newArr = [];
        let j=0;
        let k=0;
        for (let i=0;i<=n;i++){
            if (array1[j]<array2[k]){
                newArr.push(array1[j]);
                j++;
                if (j>array1.length-1){//If we've come to the end of one array, just concat the rest of the other and break.
                    newArr = newArr.concat(array2.slice(k));
                    break;
                }
            } else {
                newArr.push(array2[k]);
    //             console.log(`pushed ${array2[k]}`)
                k++;
                if (k>array2.length-1){//If we've come to the end of one array, just concat the rest of the other and break.
    //                 console.log(`arr2 has been totally added, so add the rest of arr1 then. adding ${array1.slice(j)}`)
                    newArr = newArr.concat(array1.slice(j));
                break;
            }
            }
        }
        return newArr[n];
    }

console.log(twoArraysNthElement(arr1,arr2,n));



