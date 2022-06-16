// function solve(arr){
//     let freqArr = new Array(10).fill(0,0,10);//in order to increment I need to initialize the elements as zero. 
    
//     for (i=0;i<=9;i++){//choose a number to scan for to count # times it occurs
//       //console.log(`scanning for ${i}`);
//       for (j=0;j<arr.length;j++){//scan through the array
//         //console.log(`does ${i} match ${arr[j]}?`)
//         if (arr[j] == i){
//           //console.log(`yes, ${i} matches ${arr[j]}!`)
//           freqArr[i]++;//if the number is present, count it.
//           //console.log(`increment that index for freqArr. Now it is ${freqArr[i]}`)
//         }
//       }
//     }
//     let newArr = [];
//     let counter = 0;

//     //some problem with the while array? troubleshoot that:
//     // while (freqArr.length && counter < 100){
//     //     counter++;
//     //     console.log(counter);
//     //     console.log(freqArr.length);
//     // }

//     console.log(`freqArr assembled. It is: ${freqArr}`);

//     //construct new array using freqArr;
//     while (freqArr.length && counter < 20){
//         console.log(`doing some building, just looking at the array for the ${counter}th time.`);

//         counter++;
//         for (i=0;i<freqArr.length;i++){
//             console.log(`looking at element ${i} in freqArr: ${freqArr[i]}. Is it the least frequent? That is, does it match ${Math.min(...freqArr)}?`);
//             if (freqArr[i] == Math.min(...freqArr)){//If this is the least commonly occurring value
//                 console.log(`yes, it matches!`);
//                 if (freqArr[i] == 0){
//                     console.log(`but it's zero, which means there is nothing to add to the new array so remove the element from the freqArr and move on.`);
//                     console.log(`old freqArr length: ${freqArr.length}`);
//                     freqArr.splice(i,1);//splice isn't working correctly. well, this would return the removed piece.
//                     console.log(`new freqArr length: ${freqArr.length}`);
//                     console.log(`new freqArr: ${freqArr}`)
//                     break;//restart the scan at the beginning.
//                 }

//                 //then add it to the array.
//                 for (j=0;j<freqArr[i];j++){//might want to count down here instead of up. That would take care of the ordering of 2 and 9 in the ex.
//                     console.log(`so add it to the new array`)
//                     newArr.unshift(i);
//                 }
//                 //now remove it from the freqArr after dealing with it. That way Min works next time too.
//                 //freqArr = freqArr.splice(i,1);
//                 console.log(freqArr.length);
//             } 
//         }
//         console.log(freqArr.length);
//     }
//     //ya this isn't working at all. 

//     return newArr;
//   }

// parameters: an array of numbers from 0 to 9 is submitted.
// return the same numbers in an array, but sorted. The array should be sorted by decreasing frequency of occurrance. If a number occurs with the same occurrance frequency as another, then the smaller one comes first
// example: solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// pseudocode:
// Make an array that is 10 elements long, that records the frequency of each number.
// so for the above example we'd get [0,0,1,3,0,2,0,2,0,1]. Zero occurs 0 times, 1 occurs 0 times etc..
// now make a new array by pushing, counting down from the last one.

//this algorithm is a bit basic. I could, for example, stop searching after finding the max. But it's not a big calculation job so whatever. 
function solve(arr){
    let freqArr = new Array(10).fill(0,0,10);//in order to increment I need to initialize the elements as zero. 
    
    for (i=0;i<=9;i++){//choose a number to scan for to count # times it occurs
      for (j=0;j<arr.length;j++){//scan through the array
        if (arr[j] == i){
          freqArr[i]++;//if the number is present, count it.
        }
      }
    }
    console.log(`freqArr assembled. It is: ${freqArr}`);

    let newArr =[];
    for (i=0;i<=9;i++){//look for 1's
    console.log(`looking for ${i}'s in the freq array`)
        for (j=9;j>0;j--){//start from the end of the array
            console.log(`looking through the freqArr at position ${j} which is ${freqArr[j]}`)
            if (freqArr[j] == i){//found a 1
                console.log(`found a match. So there is ${i} occurrance of ${j}`);
                for (k=0;k<freqArr[j];k++){
                    console.log(`lets add that to arrArr`);
                    newArr.unshift(j);
                }
                
                console.log(`newArr is now ${newArr}`);
                
            }
        }
    }
    console.log(`${newArr}`);
    return newArr;
}

//solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
console.log(solve([2,3,5,3,7,9,5,3,7]));
