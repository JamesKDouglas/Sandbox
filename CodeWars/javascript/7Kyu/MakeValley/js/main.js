//The description is a bit garbled. For example they show a asterisks around a character without describing that we should do that. Also there is some sort of text drawing shown in the examples?

// parameters: passing in an array of integers. not very many. Can be negative. within normal integer size limits.
// return: an array that is sorted according to the "valley" description where the left half is decreasing and the right is increasing. The bottom resides in the right side.
// example a = [67, 93, 100, -16, 65, 97, 92]
// make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
// idk about these asterisks. Is this just too point it out for illustrative purposes, or is this something they actually want in the return.

// pseudocode:
//sort according to size. Then just drop them into the left and right sides. Then join the sides.

//pseudocode: 
function makeValley(arr) {
    let sorted = arr.sort((a,b) => a-b);
    console.log(sorted);
    let r = [];
    let l = [];

    let rInd, lInd;
    //This is necessary because of the specification that the left wing elements should be larger than their right wing counterpards
    if (sorted.length%2==0){
        rInd = 0;
        lInd = 1;
    } else {
        rInd = 1;
        lInd = 0;
    }

    for (let i=0;i<sorted.length/2;i++){
        if(sorted[rInd]){
            r.push(sorted[rInd]);
        }
        if(sorted[lInd]){   
            l.push(sorted[lInd]);
        }
        rInd +=2;
        lInd +=2;
    }
    console.log(`right: ${r}`);
    console.log(`left: ${l}`);
    l = l.reverse();
    let finalArr = l.concat(r);
    return finalArr;
}

a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
console.log(makeValley(a));

//with rInd starting as 0, lInd as 1:
//Expected: '[17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]', instead got: '[17, 14, 7, 5, 4, 1, 4, 7, 8, 15, 17]'
//"each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing."

//Conversely,
// Expected: '[20, 6, 2, 7]', instead got: '[7, 2, 6, 20]'