//pseudocode:
//Lets try again with that orthogonal analysis. This is considered dynamic programming. 
//in dynamic programming you take the data you want to examine then generate some sort of like meta data.
//so first, go through the array and generate a second one. Score 1 for a 1 and -1 for a zero.
//then scan from the maximum downwards (or min upwards). When multiple X values are found for a given Y then take the min, max and calculate the span. test to see if it is larger than the old span. If it is, rewrite the old span length.

//try to put some data into local storage so I can use the same set multiple times.

//rewrite using console.time? It seems to give microseconds. Whatever ms is fine. 

function genData(name){
    let arr = [];
    let digit = 0;
    for(let i=0;i<1200000;i++){
        digit = Math.round(Math.random());
        arr.push(digit);
    }
    localStorage.setItem(name, arr);
    console.log(`robot makes a dataset named ${name}!`);
    return (`robot makes a dataset!`);
}

function printRT(start, comment){
    //timestamp to console.
    console.log(start);
    let elapsedTime = Date.now() - start;
    console.log(`runtime ${comment}: ${elapsedTime}`);
}

function binarray(a){
    let span = 0;
    let chartArr = [0];
    let yHeight = 0;

    const startTime = Date.now();

    printRT(startTime, "before xychart");

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

    printRT(startTime, "after xychart, before scan");

    //early returns.

    if (chartArr.length>100){
        console.log(`try early return tests`)
        
        let spanEnd = 0;
        for(let i=0;i<chartArr.length/2 + 1;i++){
            if (chartArr[i] == chartArr[chartArr.length-1]){
                spanEnd = chartArr.length - i+1;
                printRT(startTime, "found an early return (end)");
            }
        }

        let spanStart = 0;
        for(let i=chartArr.length;i>chartArr.length/2 - 1;i--){
            if (chartArr[i] == chartArr[0]){
                spanStart = chartArr.length - i;
                printRT(startTime, "found an early return (start)");
            }
        }

        //
        if (spanEnd > 0 && spanStart > 0 && spanEnd>spanStart){
            console.log(`returning spanEnd`);
            return spanEnd;
        } else if (spanEnd > 0 && spanStart > 0 && spanEnd<spanStart){
            console.log(`returning spanStart`);
            return spanStart;
        }
    }

    //start the main orthogonal scan

    let max = chartArr.reduce((a,b) => Math.max(a,b), -Infinity);
    let min = chartArr.reduce((a,b) => Math.min(a,b), Infinity);
    
    console.log(`scanning this many lines: ${max-min}`);

    for(let i=max;i>=min;i--){

        let indexes = [];
        let length = chartArr.length;
        for(let j = 0; j < length; j++){

            if (chartArr[j] === i){
                indexes.push(j);
            }
        }
    
        let maxIndex = indexes.reduce((a,b) => Math.max(a,b), -Infinity);
        let minIndex = indexes.reduce((a,b) => Math.min(a,b), Infinity);

        let newSpan = maxIndex-minIndex;

        if (newSpan>span){
            span = newSpan;
        }
    }
    
    printRT(startTime, "after scan and span calc");
    console.log(`span: ${span}`);
    return span;
}
// a=[
//     1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0,
//     1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0,
//     1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0,
//     0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1,
//     1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
//     1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
//     0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1,
//     1, 0, 1, 1
//   ];

// let a = [
//     0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1,
//     0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
//     1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0,
//     0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0,
//     0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1,
//     1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1,
//     0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1,
//     0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1,
//     1, 1, 0, 1
//   ];
    //expect 96 gets 71 with early return of start type.
    //

let a=[
        0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1,
        1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0
      ];
    //   expected 0 to equal 8.
    
// let a=[
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
//         0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0,
//         0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
//         0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0,
//         1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
//         0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0,
//         0, 0, 0, 0
//       ];
      //expect 14 got undefined.

console.log(`span: ${binarray(a)}`);
