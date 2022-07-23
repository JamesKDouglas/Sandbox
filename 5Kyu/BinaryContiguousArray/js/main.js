// parameters: input a binary array like s = [1,1,0,1,1,0,1,1]
// return: the largest subsequence with an even number of zeros and ones.
// The array can be 1 element long or up to 120 000 elements.
// example: s = [1,1,0,1,1,0,1,1], subsequence is [0,1,1,0]

// pseudocode 1:
// Examine the array starting at the first index.
// Count 1 as a +1 and 0 as a -1 for each element. If the sum comes to 0, then you've found a balanced sequence. Imagine a line going up and down as we traverse the array. We're looking for the crossings or zero points.

//One thing we can also do is count the total number of zeros and ones. Once the total number of ones exceeds the total zeros, a balanced sequence is impossible. In the example array there are two zeros, so after the third 1, you can give up on a balanced sequence starting at index 0.

// Two or more contiguous sequences together should be combined.
// Report the longest one.

// function binarray(a) {
//     let zeros = a.filter(el => el==0).length;
//     let ones = a.filter(el => el ==1).length;
//     let length = a.length;
//     let counter =0;
//     let balSeq = new Array();
//     console.log(`balancedSequences: ${balSeq}`)
//     console.log(balSeq);
    
//     for (let i = 0;i<length-2;i++){
//         console.log(balSeq);
//         console.log(`inspecting from element ${i}, which is a ${a[i]}`)
//         counter = 0;
//         for (let j=i;j<(length-i);j++){
//             console.log(`considering element index ${j} with value ${a[j]}`)
//             console.log(`counter before: ${counter}`);
//             if (a[j] == 1){
//                 counter++;
//             }
//             if (a[j] == 0){
//                 counter--;
//             }
//             console.log(`counter after: ${counter}`);

//             if (counter > ones || counter < -zeros){//If this happens, at this point it's impossible to make balanced sequence, so stop
//                 break;
//             }
            
//             if (Math.abs(counter) >= length-j){//Also impossible to balance if the counter is just larger in magnitude than the number of elements that remain to inspect.
//                 console.log(`impossible to balance this sequence`)
//                 break;
//             }

//             if (counter == 0){
//                 //found a balanced sequence!
//                 console.log(balSeq);
//                 console.log(`found balance! Will it continue?`)
//                 let el = [i,j];
//                 console.log(`i: ${i} j: ${j}`)
//                 balSeq.push(el);



//                 //No, I need to keep going somehow, not break. How?
//                 break;
//             }
//         }
//     }

//     //Now, I should check to see if there are more than one balanced sequences.
//     //It is possible to have overlapping sequences? I think so, yes. A larger balanced sequence may contain a smaller one.
//     // let sequence = [];
//     console.log(balSeq);
//     for (let i=0;i<balSeq.length-1;i++){
//         if (balSeq[i][1] == balSeq[i+1][0]){
//             balSeq[i] = balSeq[i].concat(balSeq[i+1]);
//         }
//     }
//     return balSeq;
// }

// Pseudocode 2:
// Generate all possible sequences, checking them 1 by one to see if they are balanced. 
// Start with the largest. 
// The sequence itself is not important, only the number of 0's and 1's.
// If you want to speed this up somehow, then try to think of ways to more rapidly eliminate the sequences.
//What sort of scan should I use? Well, start at an index. Then take pieces off the end. What I did above is count upwards. Instead, count downwards. that will give the longest sequence.
// one way to speed it up is if there is only a small number of zeros compared to the total array length, locate them and search around them for balance. But lets start with the brute force method. 
// A similar way is to look for areas that contain similar amounts of zeros and ones. Suppose you cut the array in half and there is majority ones, then locate the nearest zeros in relation to the middle. 

// function binarray(a){
//     let subArr = new Array();
//     let longestSeqLength = 0;

//     for (let i = 0; i<=a.length;i++){//Where to start
//         // console.log(`i: ${i}`);
//         for (let j = a.length-1;j>=i;j--){//now count down from the end
//             // console.log(`j: ${j}`);
//             subArr = a.slice(i,j+1);//end is not included!
//             // console.log(`subArr: ${subArr}`);
//             let zeros = subArr.filter(el => el == 0).length;
//             let ones = subArr.filter(el => el == 1).length;
//             if (zeros == ones){
//                 // console.log("Balanced!")    
//                 // console.log(`number of zeros: ${zeros}`);
//                 // console.log(`number of ones: ${ones}`);  
//                 if (subArr.length>longestSeqLength){
//                     // console.log(`ooh, it's a long one`);
//                     // console.log(`here is is: ${subArr}`);
//                     longestSeqLength = subArr.length;
//                 } 
//             }
//         }
//     }
//     //I could make a big list then sort balSeqs by length. But instead I'll just check to see if, when I find a balanced sequence it's longer than the last one. If it is, store it.
//     return longestSeqLength;
// }
//Ok the above does work, but it also times out on very large ones, taking over 12s on the codewars computer for an array 120 000 long of highly mixed zeros and ones. "big sized" is only like 8x12 maybe 100 numbers. Very big is 120 000.

//Lets just clean up the code,
// function binarray(a){
//     let subArr = new Array();
//     let longestSeqLength = 0;

//     for (let i = 0; i<=a.length;i++){//Where to start
//         for (let j = a.length-1;j>=i;j--){//now count down from the end
//             subArr = a.slice(i,j+1);//end is not included!
//             let zeros = subArr.filter(el => el == 0).length;
//             let ones = subArr.filter(el => el == 1).length;
//             if (zeros == ones){
//                 if ((j-i+1) > longestSeqLength){
//                     longestSeqLength = j-i+1;
//                 } 
//             }
//         }
//     }
//     return longestSeqLength;
// }

//Timeout! This algorithm work but it is too slow for a large data set. Even for an array of only 100 it takes 582ms. I suppose it runs 10 000 times in that case, which is indeed a lot.

//In this sequence 0,1,1,0 is the longest balanced sequence. But 0,1 is also balanced, so is 1,0. Oh 1,0 is also balanced.
// let s = [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    // 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0,
    // 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1,
    // 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    // 0, 0, 1, 1, 1, 0];
// let s = [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0,
// 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
// 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
// 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
// 1,1, 1, 0, 1, 0];

// let s = [ 0, 1, 1, 1, 1,
// 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
// 1]
// let s = [1,1,0,1,1,0,1,1];
// let s = [0,1];

//expecting 24? I see 22 not 24.
let s = [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0,
    1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
    0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    1, 1, 1, 0, 1, 0]

    // let s = [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1,
    //     1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1,
    //     1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0,
    //     0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1,
    //     1, 1, 1, 0, 1, 1]
console.log(binarray(s));

// What I am interested in trying is the charting visualization I started with. I can't put my finger on the actual chart parameter I'm looking for though. It's some sort of maximum extent zero crossing. 

//I suppose you could imagine an orthogonal scan. Make chart, then scan upwards looking for values, find the max and min indexes that those Y values appear in and report then compare them. 

function binarray(a){
    console.log(a);
    
    console.log(`# zeros: ${a.filter(el => el ==0).length} # ones: ${a.filter(el => el ==1).length}`)
    console.log(`total size: ${a.length}`)
    //early returns
    //The whole thing is completely balanced
    if (a.filter(el => el ==0).length == a.filter(el => el ==1).length) return a.length;

    let counter = 0;
    let countArr = [];
    for (i in a){
        countArr.push(counter);
        if (a[i] == 0){
            counter--;
        } else if (a[i] == 1){
            counter++;
        }
        
    }
    console.log(countArr);

    let longestBalSeq = 0; //I don't actualy need to know the sequence or even location. Just the length.

    for (let i = Math.min(...countArr);i<Math.max(...countArr);i++){
        let startSeq=0;
        let endSeq=0;

        // let isNumi = (el) => el == i;
        console.log(`examining the value ${i}`);
        startSeq = countArr.indexOf(i);//If the value is not found it returns -1, which is incorrect. As written it is always not found on the first go.
        console.log(`start: ${startSeq}`);
        endSeq = countArr.lastIndexOf(i);
        console.log(`end: ${endSeq}`);
        if (endSeq-startSeq>longestBalSeq){
            longestBalSeq = endSeq-startSeq;
            console.log(`longestBalSeq ${longestBalSeq}`);
        }
    }
    return longestBalSeq;
}

//An entirely different algorithm is to attempt to balance a sequence. Take a sequence. Count the zeros and ones. You know how many you need to remove in order to make it balanced. Search from the end to see if you can find a sequence that accomplishes this - has a total removal of the amount required. Search from the beginning for the same. Alternate and combine. This works well if the piece is almost balanced and it is a case where only small pieces have to be cut off the array to balance it. So that suggests routing - examine the sequence then if the balance is close, route it to this method and see if that works.

//I'm about ready to give up on this problem after 3 days.