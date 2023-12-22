// parameters: Two arrays are input. They contain integers and are of the same length. The length is over two elements.
// return: A single 2D array in which the provided arrays are sorted in the following way: Each is sorted in the ascending order of the other.
// example:
// sortArrays([5,4,3,2,1],[6,5,7,8,9]) 
//should return
//           [[4,5,3,2,1],[9,8,7,5,6]]

// pseudocode:
// Join the arrays together, sort them, then split them. Then combine them into the return value.

// ex the input :
//[5,4,3,2,1],[6,5,7,8,9]
//becomes a new array,
// [[5,6],[4,5],[3,7],[2,8],[1,9]]

// From this, generate two new ones. One sorted ascending by the first dimension and the other by ascending the second:
// [1,9],[2,8],[3,7],[4,5],[5,6]
// extract the second digits into an array for [9,8,7,5,6]
// [4,5],[5,6],[3,7],[2,8],[1,9]
// extract the first digits into an array for  [4,5,3,2,1]

// Finally, put these two arrays together as [[4,5,3,2,1], [9,8,7,5,6]] and return that.

//input
// [ 5, 6, 9, 2, 6, 5 ]
// [ 3, 6, 7, 4, 8, 1 ]

// [ [ 5, 5, 2, 6, 9, 6 ], [ 4, 1, 3, 6, 8, 7 ] ] 
//to deeply equal 
// [ [ 5, 5, 2, 6, 9, 6 ], [ 4, 3, 1, 6, 8, 7 ] ]

//Locally, I do see a 4,3,1. But on the codewars server it is different. Whatever default sort function they are using is different from my version. When I change the lines 61 and 68 to return -1 it works. So the sort function they use is the opposite or what? Well it can't be that simple because otherwise the entire arrays would be backwards.

// arr1 = [885,599,899,593,294,581,449,601,386,119,928,848,900,868,432,589,610,327,938,240,476,469,461,762,679,531,817,41,956,754,104,513,812,230,644,604,991,479,327,63,329,651,405,452,611,526,986,908,614,170,671,846,310,806,258,975,164,467,633,922,995,821,414]
// arr2 = [372,482,49,193,833,101,132,320,473,108,443,132,276,529,430,508,533,293,445,260,281,506,869,555,118,445,66,53,44,173,524,35,241,849,498,614,968,710,910,716,331,841,55,434,335,201,130,955,460,366,384,469,559,161,777,422,954,41,757,246,710,715,240] 

// expected [ [ 513, 467, 956, 899, 41, 405, 817, 581, 119, 679, 986, 848, 449, 806, 754, 593, 526, 414, 812, 922, 240, 900, 476, 327, 601, 329, 611, 170, 885, 671, 975, 432, 452, 928, 938, 531, 614, 846, 386, 599, 644, 469, 589, 104, 868, 610, 762, 310, 604, 479, 995, 821, 63, 633, 258, 294, 651, 230, 461, 327, 164, 908, 991 ], 
//            [ 53, 716, 524, 108, 954, 366, 849, 260, 777, 833, 559, 293, 910, 331, 473, 55, 240, 430, 132, 434, 869, 41, 506, 281, 710, 35, 201, 445, 101, 508, 193, 482, 320, 614, 533, 335, 460, 757, 498, 841, 384, 118, 173, 555, 161, 241, 66, 715, 469, 132, 529, 372, 49, 276, 955, 246, 443, 445, 44, 422, 130, 968, 710 ] ] 

// to deeply equal 
//          [ [ 513, 467, 956, 899, 41, 405, 817, 581, 119, 679, 986, 449, 848, 806, 754, 593, 526, 414, 812, 922, 240, 900, 476, 327, 601, 329, 611, 170, 885, 671, 975, 432, 452, 928, 938, 531, 614, 846, 386, 599, 644, 469, 589, 104, 868, 610, 762, 310, 604, 479, 995, 821, 63, 633, 258, 294, 651, 230, 461, 327, 164, 908, 991 ], 
//           [ 53, 716, 524, 108, 954, 366, 849, 260, 777, 833, 559, 293, 910, 331, 473, 55, 240, 430, 132, 434, 869, 41, 506, 281, 710, 35, 201, 445, 101, 508, 193, 482, 320, 614, 533, 335, 460, 757, 498, 841, 384, 118, 173, 555, 161, 241, 66, 715, 469, 132, 529, 372, 49, 276, 955, 246, 443, 445, 44, 422, 130, 968, 710 ] ]

// The error here comes from 449 and 848 in the first array sharing an associated value of 132 in the second array. 449 comes first in the original array, so it should come first also in the final.
// The "expected" array shows the opposite, with 848 coming first.

//The instructions state, "if some elements have same value, sort them according to their index"
//That is born out in the simple example. 

//So the testing expect something that is not consistent with the problem description.

// I will also note though that changing lines 91 and 84 to return 1 doesn't change this in the random testing although it does change it in the simple testing and that is very odd. Neither 0, -1 or 1 allows it to pass random testing. Random testing expects 2 values with identical associated values in the other array to be reported in the reverse order that they originally appear. The simple test expects them to be reported in the same order, as described. Oddly, changing the line does not alter the order in the random testing.
    
arr1 = [ 5, 6, 9, 2, 6, 5 ];
arr2 = [ 3, 6, 7, 4, 8, 1 ];

function sortArrays(arr1,arr2){
    let arr2D = [];
    for (let i=0;i<arr1.length;i++){
        arr2D.push([arr1[i], arr2[i]]);
    }

    let sortedByFirst = arr2D.slice();
    sortedByFirst.sort(sortFunc1);//sort does mutate the array so watch out for that!

    let sortedBySecond = arr2D.slice();
    sortedBySecond.sort(sortFunc2);

    let first = [];
    let second = [];
    // console.table(sortedByFirst);

    for (let i=0;i<arr1.length;i++){
        first.push(sortedByFirst[i][1]);
        second.push(sortedBySecond[i][0]);
    }
    // console.log(first);
    // console.log(second);

    return [second,first]

    function sortFunc1(a,b){
        if (a[0]==b[0]){
            return -1;
        } else {
            return (a[0]-b[0]);
        }
    }
    function sortFunc2(a,b){
        if (a[1] == b[1]){
            return -1;
        }else {
            return (a[1]-b[1]);
        }
    }
}

console.log(sortArrays(arr1, arr2));