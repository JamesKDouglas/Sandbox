//This works fine but as is often the case on codewars they complain that it times out. I'm getting pretty tired of that bullshit. Obviously I don't know how many jobs they are going to submit when I first write the code - I write something that works, it's readable and simple enough and uses standard methods with logical steps. Then it's just "too slow", timing out after an arbitrary amount of time with an arbitrary amount/size of job.
//What they need to start doing is give the example then say how many ms it should take to compute the example. 

//Right now it's the summation that take the longest amount of time. It take 20ms to add up 800 000. That seems reasonable to me.

// I tried and it did finish in under 12 s, but then also threw a timeout error!

//On the server I'm seeing that for the larger jobs in the random testing it takes about 400ms for each the permutation and summation for a 9 digit. 8 digit take about 71 ms. That's about twice a fast as my local machine.

//Sending the information into the permute function as a number saves quite a bit of time. Then I also don't have to convert it to a number later.

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

//Example 1
let n1 = 123489;
let n2 = 5;
 let n3 = 67;
let limit = 9;

// 4 [ 7303, 7841 ]
// expected 5742 to equal 882

// 7 [ 123489, 5, 67 ]
// expected 375776 to equal 328804

function gta(limit, ...args){
    //Get those digits into arrays
    let digits = [];
    for (i in args){
        digits[i] = args[i].toString().split("").map(Number);//What is the correct way to string these methods togethers? 
    }

    //Now interleave
    //Right now this interleave function does not work properly. It should create an array 4 long but make one 5 long.

    let baseList = [];

    //about 0.2ms with example 1
    console.time();
    for(let i=0;baseList.length<limit;i++){//only persist up to the limit length
        console.log(`add a digit! i: ${i}`)
        for (let j=0;j<digits.length;j++){//go through each array
            //Don't add this digit if it already exists
        
            if (!baseList.includes(digits[j][0])){
                //If it's a unique digit, carry on.
                if(digits[j].length !=0){
                    baseList.push(digits[j][0]);//add it to new array
                    digits[j].shift();//remove it from old one
                    if (baseList.length>=limit){break};
                }                
            } else {
                digits[j].shift();//This digit already exists, so just skip it
            }
        }
    }
    console.timeEnd();
    console.log(`baseList: ${baseList}`);
    //Now generate all possible arrays.
    // for example with a 7 digit base list there are 42 possible 2 digit arrays.

    //Heaps permute function can help with that, but it only permutes a defined list. We need to define many lists and permute all of them.

    //I could pair heap's method with a function that takes a certain number of digits, say 2, examines an array and reports all possible combinations of that length which can be constructed.

    // That's a function that performs some sort of combinatorics. I think it would be a bit hard to come up with that function on my own but I can likely find a copy somewhere.
    // The beginnings of this combinations function come from
    //https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
    let comb = [];
    let perm = [];

    //To generate combinations, the function I borrowed uses strings.
    let numStr = baseList.join("");

    //Usually less than 0.1 ms.
    console.time();
    comb = combinations(numStr);
    console.timeEnd();

    //Between 5 and 17 ms with example 1
    console.time();
    for (let i=0;i<comb.length;i++){
        //comb contains all the possible combinations of digits. For each one we need to generate the possible rearrangments.
        perm[i] = permute(comb[i].split("").map(Number));
    }
    console.timeEnd();

    // Literally just going through with a for loop is too slow.
    //20ms with example 1
    console.time();
    //Now, we just have to sum all the digits.
    let sum = 0;
    for (let i=0;i<perm.length;i++){
        for (let j=0;j<perm[i].length;j++){
            sum += perm[i][j].reduce((acc, el) => acc += el, 0);
        }
    }
    console.timeEnd();

    return sum;

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
}

console.log(gta(limit,n1,n2,n3));