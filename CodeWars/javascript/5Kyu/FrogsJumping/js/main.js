// parameters: Input a stone sequence. It's a 1dimensional lineup with slots. The input will be an array like, [0,1,2,3,5,6] with either a 1 or 2 increment between the elements.
// return: A hop sequence to traverse the pond. Of all the possible sequences it should be the shortest. If there are multiple ones of the same length return the top one lexicographically (starting with 1s the most). So there is tension there between 2's and 1s.
// example: [0,1,2,3,5,6] has the possible traverses of 11121, 2121, 1221. Return 1221. It is the same length as 2121 in terms of numbers of moves, but is lexicographically first because it starts with 1 not 2.

// pseudocode

// - Find the location of the long hops that are required.
// - The "base" solution is the 2 hops only where required and the rest are 1s. This is a valid hop sequence, but it uses more hops than required. What we have to do is shorten the sequence by doing long hops where possible.
// - If we start from the right hand side and replace all pairs of 1's with 2s this will leave a leading 1 if it is required. That will result in the top lexicographic solution because 1's are left furthest right when they are required.

function frogsJumping(stones) {
    let twoHopsReq = [];
    let tracker = 0;

    //find where missing stones are. This will require a two hop to get over.
    for (let i=0;i<stones.length-1;i++){
        console.log(`Frog is on position ${stones[i]}, which is stone #${i}`)
        console.log(`stones.length: ${stones.length}`)
        
        if (stones[i+1] == (tracker+1)){
            console.log(`short hop possible!`)
            tracker++;
            twoHopsReq[i] = 1;
            // continue;//1 hop is ok so do nothing
        } else if (stones[i+1] != (tracker+1)){//must be a two hop
            console.log(`long hop!`)
            tracker += 2;
            twoHopsReq[i] = 2;
        }
        console.log(`hopping is done, moved from position ${stones[i]} to ${stones[i+1]}`)
        console.log(`hop log: ${twoHopsReq}`);

        
    }
    console.log(twoHopsReq);

    //now twoHopsReq is a solution but it may have lots of 1s in it.
    //replace those 1's from the right with 2's where possible.
    let mostTwoHops =[];
    for (let i=(twoHopsReq.length-1);i>=0;i--){
        if (twoHopsReq[i] == 1 && twoHopsReq[i-1] == 1){
            mostTwoHops.unshift(2);
            i--;
        } else {
            mostTwoHops.unshift(twoHopsReq[i])
        }
    }
    return mostTwoHops.join("");
}

// path = [ 0, 2, 4, 6 ];
path = [ 0, 1, 2, 3, 5, 6 ];
console.log(frogsJumping(path));