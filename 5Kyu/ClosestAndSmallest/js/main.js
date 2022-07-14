function  closest(strng) {
    if (strng == ""){
        return [];
      }
    console.log(strng);
    //put that string into an array so I can do things with it.

    nums = strng.split(" ");
//     console.log(nums);
    nums2D = Array.from(Array(nums.length), () => new Array (3));//declaring a 2D array is actually a bit complicated. This is one option. Another is to use a for loop and new Array, or just make the elements and add them at that time rather than declaring an empty array first?

    //generate an array of arrays with [weight, index, number]. I could use forEach or map for this?
    for (i in nums){
        for (let j = 0; j<=3;j++){
            if (j==0){//add 'weight'
                let digs = nums[i].split('');
                digs = digs.map(x => parseInt(x,10))
                // console.log(digs);
                let weight = 0;
                //calculate weight
                for (k in digs){
                    // console.log(`examining ${digs[k]}`)
                    weight += digs[k];
                }
                nums2D[i][j] = weight;
            }  
            if (j==1){//add index
                nums2D[i][j] = parseInt(i,10);
            }
            if (j==2){//add actual number
                nums2D[i][j] = parseInt(nums[i],10);
            }
        }
    }
//     console.log(nums2D);
    //oddly, this array is already sorted according to weight. Why?

    //sort the array by weight. If two things have the same weight sort by index in the string.

    nums2D.sort(sortByWeight);
    function sortByWeight(a,b){
        if (a[0] === b[0]){
            return 0;
        }
        else {
            return (a[0]<b[0]) ? -1 : 1;
        }
    }
    // console.log(nums2D[0][0]);
    // console.log(nums2D[1][0]);

    //examine the elements to find the pair with the smallest increment in weights between the two. Since we start at the top of a sorted list it will also be the pair with the lowest weight.
    let foundSmallPairsFlag = false;
    let count=0;
    let indexes = [];
    //Choose an increment value with counter, then search through the list to find a pair with this increment in weight.
    while (!foundSmallPairsFlag){
        for (let i=0;i<nums2D.length-1;i++){
            if ((nums2D[i+1][0] - nums2D[i][0]) === count){//we found at least one pair. Good. Now, are there more like it?
                foundSmallPairs = true;
                indexes.push(i);//make a list of pairs (just note the first index).
                continue;//keep checking for more pairs with this increment
            } 
        }
        count++; 
    }

    //now we should have a list of indexes which meet the first two criteria - a list with pairs of elements with the smallest difference in weights ordered by smallest weights (low to high).
    //Now examine the pairs and find the pair with the smallest indexes when they are added together. Report the first pair.

    console.log(indexes);

    // let retArr = [];


    // if (nums2D[index][0] == nums2D[index+1][0]){
    //     if (nums2D[index][1] > nums2D[index+1][1]){
    //         retArr.push(nums2D[index]);
    //         retArr.push(nums2D[index+1]);
    //     } else if (nums2D[index][1] <= nums2D[index+1][1]){
    //         retArr.push(nums2D[0]);
    //         retArr.push(nums2D[1]);
    //     }
    // } else {
    //     retArr.push(nums2D[0]);
    //     retArr.push(nums2D[1]); 
    // }

    // return retArr;
}


//56899 50 11992 176 272293 163 389128 96 290193 85 52
//Expected: '[[13, 9, 85], [14, 3, 176]]', instead got: '[[5, 1, 50], [7, 10, 52]]'
//Why would something with a lower weight be expected? I thought we were returning the smallest.
//Ok, well just start at the beginning and look for ones that are the same or 1 then count upwards, checking the list.


s = "456899 50 11992 176 272293 163 389128 96 290193 85 52";
console.log(closest(s));

//No, the goal is:
// Task:
// For each number in strng calculate its "weight" and then find two numbers of strng that have:

// the smallest difference of weights ie that are the closest
// with the smallest weights
// and with the smallest indices (or ranks, numbered from 0) in strng

// This obviously is impossible. I think what they mean is
// the first priority is the smallest difference of weights. If there is more than one pair with the same difference then choose the smallest weights. If there is more than one pair with the same difference and the same weights then choose the pair with the smallest indices (come first in the string). I guess that means smallest added indices?

//This three dimensional sort is a challenge. A two dimensional can be accomplished by sorting the list according to weight, then checking weight differences between pairs. But the third degree may require deriving an array of pairs. 

//Right now I do things in the correct order for the first two criteria by counting upwards for the difference of weights then examining a sorted list repeatedly as I count upwards.

//When I find a pair with a small difference of weights I could output the index to an array, building a list.




//As far as I can see, this works fine on my local computer but Codewars, using node 8.1 cannot run it. It throws a typeerror.
// TypeError: Cannot read property '0' of undefined
// at closest
// at /home/codewarrior/index.js:82:13

//Note how there is no line 82. https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/console-debug-javascript indicates that only the line should accompany the error message. Why are there two numbers reported? 
////The error is not present on line 13. I thought the two numbers were char:line but this is not the cases. When i comment out sections one by one I see that the error is present after line 54. When that is commented out, the console log on line 2 works.

//furthermore, there is no console log output before that happens. So the program itself actually does not run at all, which is surprising for a script language.

// After putting in hard returns to find the real line number, I see that indeed the error is not being reported from my code. It seems like Codewars is appending code to the bottom of the script before running it, and that is where the error is coming from.


//my code is 65 lines long and it's reporting an error on 79 now. So that's line 14 in the test code?

// Ok the problem was this line in the test code,
// testing(closest(""), [])
// When the string passed in is empty it screws stuff up. I should have handled this early return right away.