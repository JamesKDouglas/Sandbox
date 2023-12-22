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
function genData(name, size){
    let arr = [];
    let digit = 0;
    for(let i=0;i<size;i++){
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
    let chartArr = [];
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
        chartArr.push([yHeight,i]);
    }

    printRT(startTime, "after xychart, before processing");

    chartArr.sort(sortFunction);
    console.log(chartArr);
    
    //Now I want to detect duplicates.

    //The goal here is to simply go through the array and look for duplicate entries in the chartArr for the first dimension element. That represents a horizontal line that intersects in at least two points.

    //But the algorithm must also continue because there is likely to be more than one intersection point. Right now it only can compare two intersection points.

    console.time();
    let start, end;
    for (let i = 0;i<chartArr.length-1;i++){
        if (chartArr[i][0] == chartArr[i+1][0]){
            // console.log(`found an intersection!`);
            start = chartArr[i][1];
            //now look for the end
            for (let j=i+2;j<chartArr.length;j++){
                if (chartArr[i][0] != chartArr[j][0]){
                    end = chartArr[j-1][0];
                }
            }
        }
        if (start-end>span){
            // console.log(`update span`)
            span = start-end;
        }
    }
    console.timeEnd();

    //This is even slower! I'm not sure why it's so slow but it takes 19s for 20 000 points. ok Math.abs is slow now it takes 1.3s but the span is incorrectly calculated as 35! reversing start and end gives ... a different number. I'm not really sure what the correct number is anymore. 

    //Well, it's a good idea but it's not really working right now. Next time, try with a better characterized dataset and see if you can address the magnitude issue (by better sorting?).
    
    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return (a[1] < b[1]) ? -1 : 1;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }

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

let data = localStorage.getItem("smallSet");
data = JSON.parse(data.trim());
console.log(`detected max balanced binary sequence in dataset from localStorage: ${binarray(data)}`)