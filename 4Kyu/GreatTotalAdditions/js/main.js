// parameters: A value called "limit" as well as a number of integers are submited
// return: Interleave the numbers while removing any duplicate digits. If a number is shorter than the others don't pad null or zero, just skip to the next. This interleaved array is only as long as the "limit" describes, ex 7 digits.
// Then find all the permuations of the constructed array. 
// return the sum of all of the digits of all of the permutations ("Grand Total Addition")
// // example:
// 123489, 5, and 67 limit of 7
// the starting interleaved array is [1, 5, 6, 2, 7, 3, 4]
// the GTA is 328804

// 12348, 47, 3639  with  limit = 8 
//base list [1, 4, 3, 2, 7, 6, 9, 8]

// pseudocode:
//Take the input numbers and make them arrays.
//Interleave them as we did in InterleavingArrays except with a different limit to the for loop.
//Permute as we did in FindTheMissing Number
//Go through each permutation and add the numbers up
//return the sum.
//

let n1 = 12348;
let n2 = 5;
let n3 = 67;
let limit =7;


function gta(limit, ...args){
    //Get those digits into arrays
    let digits = [];
    for (i in args){
        digits[i] = args[i].toString();//What is the correct way to string these methods togethers? 
        digits[i] = digits[i].split("");
        digits[i] = digits[i].map(Number);
    }
    console.log(digits);

    //Now interleave
    let baseList = [];
    for(let i=0;baseList.length<limit;i++){//only persist up to the limit length
        for (let j=0;j<digits.length;j++){//go through each array
            //Don't add this digit if it already exists
            if (!baseList.includes(digits[j][0])){
                //If it's a unique digits, carry on.
                if(digits[j].length !=0){
                    baseList.push(digits[j][0]);//add it to new array
                    digits[j].shift();//remove it from old one
                } else {
                    //just skip it, don't load a null
                }                   
            } else {
                digits[j].shift();//This digit already exists, so just skip it
            }
        }
    }

    //Now generate all possible arrays.
    // for example with a 7 digit base list there are 42 possible 2 digit arrays.

    //Heaps permute function can help with that, but it only permutes a defined list. We need to define many lists and permute all of them.

    //I could pair heap's method with a function that takes a certain number of digits, say 2, examines an array and reports all possible combinations of that length which can be constructed.

    // That's a function that performs some sort of combinatorics. I think it would be a bit hard to come up with that function on my own but I can likely find a copy somewhere.
    // https://www.techiedelight.com/find-distinct-combinations-of-given-length/
    //https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
    let comb = [];
    let perm = [];

    //To generate combinations the function I borrowed uses strings.
    let numStr = baseList.join("");
    comb = combinations(numStr);

    console.log(`combinations: ${comb}`);//type is number


    for (let i=0;i<comb.length;i++){
        //comb contains all the possible combinations of digits. For each one we need to generate the possible rearrangments.

        perm[i] = permute(comb[i].split(""));
    }

    function combinations(str) {
        var fn = function(active, rest, a) {
            if (!active && !rest)
                return;
            if (!rest) {
                a.push(active);
            } else {
                fn(active + rest[0], rest.slice(1), a);
                fn(active, rest.slice(1), a);
            }
            return a;
        }
        return fn("", str, []);
    }

    //This is Heaps method. The number has to come in as an array here.
    function permute(permutation) {
        var length = permutation.length,
            result = [permutation.slice()],
            c = new Array(length).fill(0),
            i = 1, k, p;
      
        while (i < length) {
          if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
          } else {
            c[i] = 0;
            ++i;
          }
        }
        return result;
    }

    console.log(baseList);
    console.log(perm);
}

gta(limit,n1,n2,n3);