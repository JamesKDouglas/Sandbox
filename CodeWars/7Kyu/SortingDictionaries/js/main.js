//input an object with key value pairs. 
//output that object as an array sorted by value from largest to smallest. 
//integers only. 

//If there is a repeat the order doesn't matter.

//sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]];
//sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]

//sortDict({1:2, 2:2, 4:6}) == [[3,6], [2,4], [1,2]]

//remove repeats? When there is a repeat value what should we do there? Doesn't matter.
//size of job? Just small don't worry about it.

function sortDict(dict) {
    let arr = [];
    for (el in dict){//could use spread operator
        arr.push([el[0], el[1]]);
    }

    arr.sort((a,b) => a[1]>b[1] ? 1 : 0);

    return arr;

}

console.log(sortDict({3:1, 2:2, 1:3}, [[1,3], [2,2], [3,1]]));

console.log(sortDict({1:2, 2:4, 3:6}, [[3,6], [2,4], [1,2]]));

console.log(sortDict({3:1, 2:2, 1:3}, [[1,3], [2,2], [3,1]]));