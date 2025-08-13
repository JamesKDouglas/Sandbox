function subsetSum(xs, target){
    let subset = [];

    for (let i=0;i<xs.length;i++){
        //either tripped up or imposible
        if (xs[i]>target) continue;

        if (xs[i]==target){
            return subset.push(xs[i]);
        } else {
            subsetSum(xs, target-xs[i]);
        }
    }
    return subset;
}

let arr = [5,4,3,2,1];
let target = 14;
let subset = subsetSum(arr, target)
console.log("solution:", subset);