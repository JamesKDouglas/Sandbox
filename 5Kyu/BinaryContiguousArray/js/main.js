//pseudocode:
//Lets try again with that orthogonal analysis. This is considered dynamic programming. 
//in dynamic programming you take the data you want to examine then generate some sort of like meta data.
//so first, go through the array and generate a second one. Score 1 for a 1 and -1 for a zero.
//then scan from the maximum downwards (or min upwards). When multiple X values are found for a given Y then take the min, max and calculate the span. test to see if it is larger than the old span. If it is, rewrite the old span length.

//try to put some data into local storage so I can use the same set multiple times.

function genData(){//To test for timing stuff I need a largish data set.
    let arr = [];
    let digit = 0;
    for(let i=0;i<120000;i++){//I'm getting a span reported of 122569 even though I only generate 120 kb sets. I think somehow it's appending the data to the existing dataset each time it runs. The dataset is double the size that it should be, indicated by running .length;
        digit = Math.round(Math.random());
        arr.push(digit);
    }
    localStorage.setItem('a dataset', arr);
    console.log(`robot makes a dataset!`);
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

    //timestamp
    printRT(startTime, "after xychart, before scan");

    //now do the scan
    // let max = Math.max(...chartArr);//This uses the apply method only works with small arrays. Reduce doesn't have that issue so lets use that here.

    //start at the top
    let max = chartArr.reduce((a,b) => Math.max(a,b), -Infinity);
    let min = chartArr.reduce((a,b) => Math.min(a,b), Infinity);
    console.log(`scanning this many lines: ${max-min}`);

    // console.log(`xy array generated: ${chartArr}. max: ${max} min: ${min} `);

    for(let i=max;i>=min;i--){
        //Imagine a line scans downwards. When the horizontal line intersects the xychart line it intersects with it once, twice or more. Record all those x values and put them in to an array called indexes.
 
        let indexes = [];

        //This is too slow?
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

// to get a from local storage in the console
// localStorage.getItem("a dataset");
console.log(`span: ${binarray(a)}`);

//These are examples, with the value at the end the expected one
// [[[0,1], 2],
// [[0], 0],
// [[1,1,0,1,1,0,1,1], 4],
// [[0,1,1,0,1,1,1,0,0,0], 10],
// [[0,0,1,1,1,0,0,0,0,0], 6]]

// This does work. However, again it is too slow and times out. How can I make it faster?

//Ok my 2013 macbook pro runs this program in between 300 and 600 ms for a dataset with 240 000 elements. 
//CodeWars is taking over 12 000 ms to run it. 

// binarray(localStorage.getItem("a dataset"));
// 12:35:11.801 main.js:22 1660505711801
// 12:35:11.801 main.js:24 runtime before xychart: 0
// 12:35:11.852 main.js:22 1660505711801
// 12:35:11.852 main.js:24 runtime after xychart, before scan: 51
// 12:35:12.407 main.js:22 1660505711801
// 12:35:12.409 main.js:24 runtime after scan and span calc: 608
// 12:35:12.417 122569

//By putting logging into the codewars run code (copying this) I can see that the spans returned at 100 000 in size are takin about 100ms to run the code. So then why does a "very big" 120 000 crash it?
// runtime before xychart: 0
// 1660506203060
// runtime after xychart, before scan: 5
// 1660506203060
// runtime after scan and span calc: 81
// span: 114412

//Ok I think what is happening is that CodeWars is submitting -many- 120k jobs. That is adding up to over 12 000 ms of runtime. Ok well I don't know how to make this code any faster. They are asking this code to run, what in 10ms? 100 is obviously too long. How many jobs are being submitted?

//sigh, ok how can I make it faster? Well, about 10x the time is from the scan, this raster type scan. What can I do to more rapidly collapse that? It takes almost exactly 1ms to scan a line.