//pseudocode:
//Lets try again with that orthogonal analysis. This is considered dynamic programming. 
//in dynamic programming you take the data you want to examine then generate some sort of like meta data.
//so first, go through the array and generate a second one. Score 1 for a 1 and -1 for a zero.
//then scan from the maximum downwards (or min upwards). When multiple X values are found for a given Y then take the min, max and calculate the span. test to see if it is larger than the old span. If it is, rewrite the old span length.

//try to put some data into local storage so I can use the same set multiple times.

//rewrite using console.time? It seems to give microseconds. Whatever ms is fine. 

function genData(name){//To test for timing stuff I need a largish data set.
    let arr = [];
    let digit = 0;
    for(let i=0;i<1200000;i++){//I'm getting a span reported of 122569 even though I only generate 120 kb sets. I think somehow it's appending the data to the existing dataset each time it runs. The dataset is double the size that it should be, indicated by running .length;
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

    //timestamp
    printRT(startTime, "after xychart, before scan");

    //early returns. If we approach from either end and find a balanced sequence over half the length of the total array, then it must be the longest. This is a helpful early return because in a random data set balance is unusual. The scan is fast because it is only one of 120 000^2 possible scans and will be commonly the case.

    //From the start, for the case where the longest sequence is at one end.
    //lol this totally doesn't work.

    if (chartArr.length>100){//only for reasonably large datasets.

        //This detects the case where the longest balanced sequence is attached to the end. Note that with a random sequence this is likely, so I hope it reduces the time to process multiple cases.
        //The number of lines to scan is what, related to the root of the number of digits for a random sequence? Note that for real data there is likely a header and something to indicate the end of the disk, so this likely wouldn't help much.
        //First, start scanning from the beginning to see if we have balance all the way from there to the end.
        //Go up to halfway through the dataset. If there isn't balance then, it means the longest sequence could be in the middle or just starting from the beginning.

        //Ok so just because there is a long start doesn't mean the end won't be longer!

        let spanEnd = 0;
        for(let i=0;i<chartArr.length/2 + 1;i++){
            if (chartArr[i] == chartArr[chartArr.length-1]){
                spanEnd = chartArr.length - i;
                printRT(startTime, "found an early return (end)");

                //Isn't it true though that there could be a long sequence from the end, but even longer from the start?
            }
        }


        //From the end, for the case where the longest sequence is at the start.
        let spanStart = 0;
        for(let i=chartArr.length;i>chartArr.length/2 - 1;i--){
            if (chartArr[i] == chartArr[0]){
                span = chartArr.length - i;
                printRT(startTime, "found an early return (start)");
            }
        }

        //It may be that there are two balanced sequences from each end. They can even overlap. Anyways which is longer?
        if (spanEnd>spanStart){
            return spanEnd;
        } else {
            return spanStart;
        }
    }

    //now do the scan
    // let max = Math.max(...chartArr);//This uses the apply method only works with small arrays. Reduce doesn't have that issue so lets use that here.

    //start at the top
    let max = chartArr.reduce((a,b) => Math.max(a,b), -Infinity);
    let min = chartArr.reduce((a,b) => Math.min(a,b), Infinity);
    console.log(`scanning this many lines: ${max-min}`);

    // console.log(`xy array generated: ${chartArr}. max: ${max} min: ${min} `);

    // scan every value for every line.
    for(let i=max;i>=min;i--){
        //Imagine a line scans downwards. When the horizontal line intersects the xychart line it intersects with it once, twice or more. Record all those x values and put them in to an array called indexes.
 
        let indexes = [];

        //This is too slow when multiple jobs are submitted. Try handling that with faster early returns.
        // printRT(startTime, "start building indexes arr for a line");
        let length = chartArr.length;
        for(let j = 0; j < length; j++){
            // console.log(`building indexes array. Line is at ${i}, examining element ${j}`);
            if (chartArr[j] === i){
                // console.log(`found an intersection`);
                indexes.push(j);
            }
        }
    
        // printRT(startTime, "end building indexes arr for a line");
        //This for loop takes 5-7ms for a 2.4mb file. Right now I go through the array element by element. That's a method. Does the array have useful properties already calculated?
        //I use a for loop to look for a character. I could also use regex
        // https://stackoverflow.com/questions/12234019/is-regex-faster-than-array-comparison-in-this-case
        //


        
        //scan based on previously known position:

        // let start = chartArr.findIndexOf(max);//this only returns the first one though. I want to know if there is more than one

        
        // let indexes = [];//
        // let scanLine = max;

        // //Do just one scan to see if there are any other values at this max start. Then we have the input positions and can follow the line.
        // for (let i=max;i<chartArr.length;i++){
        //     if (chartArr[i] === max){
        //         // console.log(`found a second max`);
        //         indexes.push(i);
        //     }
        // }
        // console.log (`peak positions: ${indexes}`);

        // console.log(`Done the scan. indexes is ${indexes}`);

        let maxIndex = indexes.reduce((a,b) => Math.max(a,b), -Infinity);
        // printRT(startTime, "after finding max intersection of a horz line");
        let minIndex = indexes.reduce((a,b) => Math.min(a,b), Infinity);
        // printRT(startTime, "after finding min intersection of a horz line");
        //Finding the max intersection of a 2.4MB horizontal line this way takes up to 4ms. 

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

//sigh, ok how can I make it faster? Well, about 10x the time is from the scan, this raster type scan. What can I do to more rapidly collapse that? It takes almost exactly 1ms to scan a line of 120k characters. So about 10 microseconds to check a character I guess.

//https://hackernoon.com/performance-tests-on-common-javascript-array-methods
//It looks like map is slower than a for loop - 10million elements in 1800ms is 1.8x10^-4 ms per element. I'm seeing 1ms for 120000 elements so 8.0x10^-6 ms per element.

//Really I'm looking at a 1.2MB file -10x larger than the 120kb.

// main.js:24 1660508692660
// 13:24:52.660 main.js:26 runtime before xychart: 0
// 13:24:52.964 main.js:24 1660508692660
// 13:24:52.964 main.js:26 runtime after xychart, before scan: 304
// 13:24:53.060 main.js:58 scanning this many lines: 1528
// 13:24:58.704 main.js:24 1660508692660
// 13:24:58.704 main.js:26 runtime after scan and span calc: 6044
// 13:24:58.705 main.js:89 span: 1315897
// 13:24:58.709 1315897
// That's with a 2.4Mb file. idk why I'm getting double the sizes btw. 
//So here we see that each line scan takes 3.75ms. That's 2.4 million items in 3.75ms or 1.5x10^-6 ms per element.

// What I'm trying to do is go through an array that is mostly empty. I only want a list of indexes to be returned. Well, actually only the highest and lowest indexes that contain any values.

// ya nothing is really faster than just a for loop
// https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/

//remember that one way to go faster is to divide into cases and pipe? How can I use the fact that the max and min slope are 45 deg? Realize that the xychart is actually sort of missing a partial dimension.
//Well, when you do a scan downwards you know where the line is going to be, roughly. So take the previously found line position and just check the surrounding positions - don't scan the whole line. 

//Finding the max intersection of a horizontal line this way takes up to 4ms. 

//How about I try to follow the line instead of raster scan? Going from the top, this is difficult. How about from both ends?  Well this is an excellent way to do early returns,
//Another thing I could try is moving to hexadecimal. Just convert the array to hex. Find balance in the same fashion, rounding down and giving the benefit of the doubt. In this way you can find a mostly balanced region. Then run 16 scans to explore the edges of the sequence to see how long it is more precisely. 