//edit: This is still too slow. There is one array that I search repeatedly for matching values. Can I store that array as a dataset that is easier to search, like in a heap or trie. Trie is the fastest, I could potentially organize the array just by digit.

//Also I'd like to try to use chart.js to visualize this data, just for practice and because it could help solve this..
//pseudocode:
//This uses "orthogonal analysis". This is considered dynamic programming. 
//In dynamic programming you take the data you want to examine then generate some sort of like meta data. Then analyze the meta data. 

//I'm a scientist who often uses charts, so lets try to solve this rather the way a human would with a chart.

//Generate the chart by going through the array and generate a second array that tracks the balance of the first. This is the meta data, a sort of running sum. Score 1 for a 1 and -1 for a zero. The counter value gets put into the new array. This represents a line chart with position as x and value as y. 

//Scan from the maximum chart value downwards (or min upwards). Imagine this as drawing a horizontal line through the generated chart and moving it down, scanning to see where it intersects the chart line. 

//The maximum span of intersection of a horizontal line with the chart line represents the span of the longest balanced binary sequence. When multiple X values are found for a given Y then the line is intersecting multiple times. All of these intersections go into an array then I take the min, max indexes and calculate the span.  Test to see if it is longer than any previous sequences by comparing the previous longest span. If it is longer, rewrite the old span length.

//P.S. I put some data into local storage so I can use the same set multiple times.

//I use a custom timing function but console.time() could be helpful here.

//Make a data set I can use.
function genData(name){
    let arr = [];
    let digit = 0;
    for(let i=0;i<1200000;i++){
        digit = Math.round(Math.random());
        arr.push(digit);
    }
    let stringArr = JSON.stringify(arr);

    localStorage.setItem(name, stringArr); //Items in localstorage are strings.
    console.log(`robot makes a dataset named ${name}!`);
    return (`robot makes a dataset!`);
}

//Print runtime of an enclosed piece of code
function printRT(start, comment){
    //timestamp to console.
    console.log(start);
    let elapsedTime = Date.now() - start;
    console.log(`runtime ${comment}: ${elapsedTime}`);
}

//The main bit
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

    
    let max = chartArr.reduce((a,b) => Math.max(a,b), -Infinity);
    let min = chartArr.reduce((a,b) => Math.min(a,b), Infinity);

    console.log(`scanning this many lines: ${max-min}`);
    console.log(`xy chart array: ${chartArr}`);

    let lineScanTime, lineScanTimeAcc =0;
    for(let i=max;i>=min;i--){

        let indexes = [];
        let length = chartArr.length;

        lineScanTime = Date.now();

        for(let j = 0; j < length; j++){

            if (chartArr[j] === i){
                indexes.push(j);
            }
        }
        lineScanTimeP = Date.now();
        lineScanTimeAcc += lineScanTimeP-lineScanTime;

        //These arrays are quite small, so even though reduce is half the speed of a for loop this doesn't take much time.
        let maxIndex = indexes.reduce((a,b) => Math.max(a,b), -Infinity);
        let minIndex = indexes.reduce((a,b) => Math.min(a,b), Infinity);

        let newSpan = maxIndex-minIndex;

        if (newSpan>span){
            span = newSpan;
        }
    }
    
    printRT(startTime, "after scan and span calc");
    console.log(`total time spent scanning lines with the for loop: ${lineScanTimeAcc}`);
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

//console.log(`span: ${binarray(a)}`);

let data = localStorage.getItem("big set string");
data = JSON.parse(data.trim());
console.log(`detected max balanced binary sequence in dataset from localStorage: ${binarray(data)}`)