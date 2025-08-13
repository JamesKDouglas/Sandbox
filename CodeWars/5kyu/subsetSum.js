function subsetSum(xs,target) {
    xs.sort((a,b)=>b-a);
    let sum = 0;
    let subset = [];
    let ind = 0;

    //What I'm doing here is going back and forth, from the start of the array or the end of it.
    //then rejecting numbers if accepting them will create the inability to reach the sum

    for (let i=0;i<xs.length;i++){
        //start
        if (sum+xs[i] <= target){
            remainder = target - (sum + xs[i]);
            // console.log("start", remainder);
            if (remainder<Math.min(xs.slice(i)) && remainder!=0){
                console.log("found a number I'd like to add but nope, doing that will make solving impossible");
            } else {
                sum += xs[i];
                subset.push(xs[i]);
            }
        } 
        if (sum==target){
            break;
        }
        //end
        ind = xs.length - i;
        if (sum+xs[ind] <= target){
            remainder = target - (sum + xs[ind]);
            // console.log("end",remainder);
            console.log(Math.min(...xs.slice(0,ind)));
            if (remainder<Math.min(...xs.slice(0,ind)) && remainder!=0){
                console.log("found a number I'd like to add but nope, doing that will make solving impossible");
            } else {
                sum += xs[ind];
                subset.push(xs[ind]);
            }
        } 
        if (sum==target){
            break;
        }
    }

    if (sum!=target){
        console.log("done going through list, can't add up to sum");
        return null;
    }
    if (subset.length == 0 && target!=0){
        console.log("subset empty or target just zero")
        return null;
    } else {
        return subset;
    }
}

//the problem now is it will grab the 10 and reach only 63, then can't get to 64.
//If I add this, am I going to be unable to reach the target?
//that is, is the target - (current sum + number) larger than the minimum value in the array? 
let arr = [5,4,3,2,1];
let target = 14;
let subset = subsetSum(arr, target)
console.log("solution:", subset);
// console.log(subset.reduce((a,c)=>a+c,0))