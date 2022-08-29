//edit: This is still too slow. There is one array that I search repeatedly for matching values. Can I store that array as a dataset that is easier to search, like in a heap or trie. Trie is the fastest, I could potentially organize the array just by digit.

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
    //This early return sequence  is not correct. Just because you find a balanced sequence at the start doesn't mean there isn't a longer one in the middle. 

    /*
    if (chartArr.length>100){
        console.log(`try early return tests`)
        
        let spanEnd = 0;
        for(let i=0;i<chartArr.length/2 + 1;i++){
            if (chartArr[i] == chartArr[chartArr.length-1]){
                spanEnd = chartArr.length - i+1;
                printRT(startTime, "found a balanced sequence from the end.");
            }
        }

        let spanStart = 0;
        for(let i=chartArr.length;i>chartArr.length/2 - 1;i--){
            if (chartArr[i] == chartArr[0]){
                spanStart = chartArr.length - i;
                printRT(startTime, "found a balanced sequence from the start.");
            }
        }

        //
        let longestEndSeq=0;
        if (spanEnd > 0 && spanStart > 0 && spanEnd>spanStart){
            console.log(`returning spanEnd`);
            longestEndSeq = spanEnd;
        } else if (spanEnd > 0 && spanStart > 0 && spanEnd<spanStart){
            console.log(`returning spanStart`);
            longestEndSeq = spanStart;
        }
        console.log(`The longest balanced sequences from either the end or start have length: start: ${spanStart} end: ${spanEnd} `)
    }
    */

    //console.log(`no early returns`)
    
    //start the main orthogonal scan

    //Since I can't figure out early returns I'll need to improve this main scan.
    //right now for each line I scan the entire array.
    //Most of the values are just rejected. How can I shorten that?

    //Well, this is not a normal xychart. For a normal xychart for any increment of Y or X there could be any increment in the pair. For this chart we know the slope can only be 1/2.
    //That means I can identify which part of the next line to scan, based on what was in the previous line. 
    //One issue with that is you need input parameters. The algorithm is following a line, and it needs to start somewhere.
    //In particular, a new input parameter for the line following algorithm must be input when there is a peak. 
    //So I could identify all peaks, put them into an array and check that arrray to see if a new line should be input into the line scanner/follower.

    //Another thing I can to is just shorten the scan by trimming Y. If the Y value appears only once then there is no balanced sequence there. One of the easiest ways to do this is indeed find the highest peak and lowest trough then trim based on them. 
    
    let max = chartArr.reduce((a,b) => Math.max(a,b), -Infinity);
    let min = chartArr.reduce((a,b) => Math.min(a,b), Infinity);
    printRT(startTime, "after min/max peak calculations, before scan and peak calc");

    console.log(`scanning this many lines: ${max-min}`);
    console.log(`xy chart array: ${chartArr}`);

    
    //find peaks. troughs are interesting too but lets start with peaks.

    let peaksArr = [];

    for(let i=0;i<chartArr.length;i++){
        if (chartArr[i] < chartArr[i+1] && chartArr[i+2] < chartArr[i+1]){
            //found a peak!
            console.log(`found a peak`);
            peaksArr.push([(i+1),chartArr[i+1]]);//store Y value and location by index.
        }
    }
    //add first and last values as "peaks". I will use this to find the line later.

    peaksArr.push(0,chartArr[0]);
    peaksArr.push(chartArr.length-1, chartArr[chartArr.length-1]);
    console.log(`peaks identified (index, value): ${peaksArr}. first peak ${peaksArr[0]}`);    

    //Scan line by line, using guidance from the peaks
    let lineScanTimeAcc =0, lineScanTime=0, lineScanTimeP = 0;

    //Note that right now there is no trimming of the top and bottom, so likely more lines than necessary are scanned. But having a bump up or down is common so trimming based on peaks doesn't help much.

    //peak height could be useful, since it is directly related to the span in this type of data.

    for(let i=max;i>=min;i--){

        //I have a list of peaks. That seems helpful. Now, how do I use that to scan a line and skip most of the values?
        
        // let scanPositions = [];

        // //This just looks for all registered peaks on the line
        // for (let q=0;q<peaksArr.length;q++){
        //     if (peaksArr[q][1]==i){
        //         scanPositions.push(q);
        //     }
        // }

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

console.log(`span: ${binarray(a)}`);
