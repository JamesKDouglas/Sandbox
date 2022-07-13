
function  closest(strng) {
    //put that string into an array so I can do things with it.

    nums = strng.split(" ");
    console.log(nums);
    nums2D = Array.from(Array(nums.length), () => new Array (3));//declaring a 2D array is actually a bit complicated. This is one option. Another is to use a for loop and new Array, or just make the elements and add them at that time rather than declaring an empty array first?

    //generate an array of arrays with [weight, index, number]. I could use forEach or map for this?
    for (i in nums){
        for (let j = 0; j<=3;j++){
            if (j==0){//add 'weight'
                let digs = nums[i].split('');
                digs = digs.map(x => parseInt(x,10))
                // console.log(digs);
                let weight = 0;
                //calculate weight
                for (k in digs){
                    // console.log(`examining ${digs[k]}`)
                    weight += digs[k];
                }
                nums2D[i][j] = weight;
            }  
            if (j==1){//add index
                nums2D[i][j] = i;
            }
            if (j==2){//add actual number
                nums2D[i][j] = nums[i];
            }
        }
    }
    console.log(nums2D);
    //oddly, this array is already sorted according to weight. Why?

    //sort the array by weight. If two things have the same weight sort by index in the string.

    nums2D.sort(sortByWeight);
    function sortByWeight(a,b){
        if (a[0] === b[0]){
            return 0;
        }
        else {
            return (a[0]<b[0]) ? -1 : 1;
        }
    }
    console.log(nums2D);
    //return the top two elements

}

s = "80 70 63 53";
console.log(closest(s));