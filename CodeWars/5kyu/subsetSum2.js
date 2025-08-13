// a recursive attempt
function subsetSum(xs,target) {
    xs.sort((a,b)=>a-b);

    function recur(sum, startInd, xs, target){
        let subset = [];
        for (let i=startInd;i<xs.length;i++){
            if (sum+xs[i] == target){
                sum += xs[i];
                subset.push(xs[i]);
                return subset;
            } else if (sum+xs[i]<target){
                sum += xs[i];
                subset.push(xs[i]);
                recur(sum, startInd-1, xs, target);
            } else {
                recur(sum, startInd-1, xs, target);
            }
        }
    }
    return recur(0, 0, xs, target);
}

let arr = [5,4,3,2,1];
let target = 14;
let subset = subsetSum(arr, target)
console.log("solution:", subset);