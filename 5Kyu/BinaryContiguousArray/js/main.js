//pseudocode:
//Lets try again with that orthogonal analysis. This is considered dynamic programming. 
//in dynamic programming you take the data you want to examine then generate some sort of like meta data.
//so first, go through the array and generate a second one. Score 1 for a 1 and -1 for a zero.
//then scan from the maximum downwards (or min upwards). When multiple X values are found for a given Y then take the min, max and calculate the span. test to see if it is larger than the old span. If it is, rewrite the old span length.
function binarray(a){
    let span = 0;
    let chartArr = [0];
    let yHeight = 0;

    //make the xy chart
    for (let i=0;i<a.length;i++){
        if(a[i]==0){
            yHeight--;
        }
        if(a[i] == 1){
            yHeight++;
        }
        chartArr.push(yHeight);
    }

    //now do the scan
    // let max = Math.max(...chartArr);//This uses the apply method only works with small arrays. Reduce doesn't have that issue so lets use that here.
    
    //start at the top
    let max = chartArr.reduce((a,b) => Math.max(a,b), -Infinity);
    // console.log(max);
    let min = chartArr.reduce((a,b) => Math.min(a,b), Infinity);

    // console.log(`xy array generated: ${chartArr}. max: ${max} min: ${min} `);

    for(let i=max;i>=min;i--){
        //Imagine a line scans downwards. When the horizontal line intersects the xychart line it intersects with it once, twice or more. Record all those x values and put them in to an array called indexes.
 
        let indexes = [];
        for(let j = 0; j < chartArr.length; j++){
            // console.log(`building indexes array. Line is at ${i}, examining element ${j}`);
            if (chartArr[j] === i){
                // console.log(`found an intersection`);
                indexes.push(j);
            }
        }
        // console.log(`Done the scan. indexes is ${indexes}`);

        let maxIndex = indexes.reduce((a,b) => Math.max(a,b), -Infinity);
        let minIndex = indexes.reduce((a,b) => Math.min(a,b), Infinity);

        let newSpan = maxIndex-minIndex;

        if (newSpan>span){
            span = newSpan;
        }
    }
    return span;
}


a=[0,0,1,1,1,0,0,0,0,0];

console.log(binArray(a));

//These are examples, with the value at the end the expected one
// [[[0,1], 2],
// [[0], 0],
// [[1,1,0,1,1,0,1,1], 4],
// [[0,1,1,0,1,1,1,0,0,0], 10],
// [[0,0,1,1,1,0,0,0,0,0], 6]]

// This does work. However, again it is too slow and times out. How can I make it faster?