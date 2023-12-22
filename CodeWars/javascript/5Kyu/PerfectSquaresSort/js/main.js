// parameters: Input a list of numbers as an array. 
// return: Take the digits of each number and find the possible "perfect squares" that can be made from those digits. A "perfect square" is a number that is a squared integer. That is, the square root is an integer.
// example:
// arr = [715, 112, 136, 169, 144]
// Number   Perfect Squares w/ its Digits   Amount
//  715                -                       0
//  112               121                      1
//  136               361                      1
//  169           169, 196, 961                3
//  144             144, 441                   2

//returns [169, 144, 112, 136, 715].

// pseudocode:
// Interate through the list, of course. We'll build a 2D array with the number and the amount of perfect squares.

// Take the number then find all permutations possible. 

//Find the square root of each permutation. If it is an integer, that is if the square root is equal to the Math.floor of the square root, then count it. Add the counted value (and the orignal number) to the 2D array.

//Then we have to sort the 2D array. During this sorting there are two rules: sort by the amount of perfect squares, descending. But if there is the same number of perfect squares then sort by ascending value. You can see that in the example when 112 comes before 136.

//finally, extract the first dimension and report that. 

let arr = [715, 112, 136, 169, 144];
function sortByPerfsq(arr) {
    
    let arr2D = [];
    let perm = [];
    let counter = 0;

    for(let j=0;j<arr.length;j++){//j tracks the numbers from arr.
        let digits = arr[j].toString().split('').map(Number);

        perm = permute(digits);
        
        perm = perm.map(el => el.join("")).map(Number);// turn permutations into proper numbers.

        //remove duplicate permuations
        let uniq = Array.from(new Set(perm));

        //Check permutations to see if there are any perfect squares
        for (let i=0;i<uniq.length;i++){
            if (Math.sqrt(uniq[i]) == Math.floor(Math.sqrt(uniq[i]))){
                counter++;
            }
        }
        arr2D.push([arr[j],counter]);
        counter = 0;    
    }

    //Now that we have a table with perfect square values, lets sort the table. 
    arr2D.sort(sortFunction);

    //now take the first element from the 2D array and report that
    return arr2D.map(el => el[0]).reverse();
    
    function sortFunction(a, b) {
        if (a[1] === b[1]) {
            //if they have an equal number of perfect squares, I want to sort by the original value
            return (a[0] > b[0]) ? -1 : 1;;
        }
        else {//Otherwise just sort by number of perfect squares
            return (a[1] < b[1]) ? -1 : 1;
        }
    }

    //Heap's algorithm
    function permute(permutation) {
        let length = permutation.length,
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


console.log(sortByPerfsq(arr));
