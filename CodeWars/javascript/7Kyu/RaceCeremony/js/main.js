// parameters: 
//
//Here's a better problem description that includes the important ommission about regularly sized blocks:
//You're making a podium for an awards ceremony. There will be three platforms for places 1, 2 and 3 of different heights. 

//In order to make the podiums you are required to use regularly sized blocks. The number of blocks you have will be described on-site - you don't know how many blocks you have but you'll have to figure out quickly once on site how to make the podium according to the requirements.

// The structure has to be such that:
// -The first place platform has the minimum height possible
// -The second place platform has the closest height to first place
// -All platforms have heights greater than zero.

// return: an array that contains the number of blocks that each podium gets. In real life the platforms are situated 2,1,3 so report the array in that order, not in ascending or descending.

//Obviously the platform can't have a zero height.

// example: 11 -> [4,5,2]
// pseudocode:

//To find the second from the third just subtract 1. 
//third has to be at least 1.
//second has to be at least 2 to be higher than 1.
//So the shortest platform is 6 blocks 2,3,1.
//When you get one new block where does it go? If you had 7 there would be no solution. so that's an early return. Same for 8. Well no, you could make the 1 platform taller - [2,4,1] and [3,4,1] is fine. That's how the progression will go with mod3

//A brute force would just cycle through numbers until it finds the correct sequence. That quickly gets computationally expensive. 

//I would say platform 1 can be n/3 - 1. So each platform gets 3 blocks then.
// Then the other two platforms have to differ by only 1 and use the rest of the blocks.
// So they use 2n/3 + 1 blocks. That means each pile is 2n/3 then the final one goes on 3.

//for 11: 11/3 is 3.66, so floor of 3. then minus 1 gives 2. 

//First place being a minimum height means we are trying to spread the blocks out. So yes we build a base of 1/3 blocks each, then adjust the height.
//Second place having the closest height ... would normally just mean it's 1 shorter right?


console.log(racePodium(7));
function racePodium(blocks) {

    //setup  - for first place to be minimum height, the podiums must be roughly equal in height.
    let heightFirst = Math.floor(blocks/3) + 1//min 6 blocks total
    let heightSecond = Math.floor(blocks/3);
    let heightThird = Math.floor(blocks/3) - 1;
    // console.log(`${heightSecond}, ${heightFirst}, ${heightThird}`)


    if (blocks%3 == 0){
        //do nothing, we're good
    } else if (blocks%3 == 1){
        //make first place a bit taller
        heightFirst++;
        //then correct to make the second still 1 away from first.
        heightSecond++;
        heightThird--;

        //The only exception we have to work with is basically 7, and prevent heightThird from being zero
        if (heightThird ==0){
            heightThird++;
            heightSecond--;
        }
    } else if (blocks%3 == 2){
        //First and second both get taller
        heightFirst++;
        heightSecond++;
    }

    return [heightSecond, heightFirst, heightThird];

}
  