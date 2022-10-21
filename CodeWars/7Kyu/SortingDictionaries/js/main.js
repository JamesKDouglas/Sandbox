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
    let keys = Object.keys(dict);
    // console.log(keys);
    for (k of keys){//could use spread operator
       if (Number.isNaN(+k)){
          arr.push([k, dict[k]]);
        } else {
          arr.push([+k, dict[k]]);
        }
    }

    arr.sort((a,b) => b[1]-a[1]);

    return arr;

}

console.log(sortDict({3:1, 2:2, 1:3}), [[1,3], [2,2], [3,1]]);

console.log(sortDict({1:2, 2:4, 3:6}), [[3,6], [2,4], [1,2]]);

console.log(sortDict({3:1, 2:2, 1:3}), [[1,3], [2,2], [3,1]]);