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


//The main bit
function binarray(a){
    console.time('overall');
    let chartArr = [];
    let yHeight = 0;

     //make the xy chart
    for (let i=0;i<a.length;i++){
        if(a[i]==0){
            yHeight--;
        }
        if(a[i] == 1){
            yHeight++;
        }
        chartArr.push([i,yHeight]);
    }
    // console.log(`original data: ${a}`);
    // console.log("chartArr", chartArr);
    
    //#1
    //the bin array will look something like this
    // [[0, 10, 14], [10, 15, 17]]
    // In this case 0 is the start of the bin, and the bins are a size of 10 long.
    // The lowest value in the x range 0 to 10 is 10, the highest is 14.

    // Note that this may mean the second section, the 10 section, starts at either 13 or 15. Or, it could be that the height is in the center of the bin. 
    
    //Note that the travel or Y range is limited by the bin size. The range cannot be larger than the bin size.

    //After the binned array is prepared, go through the bins and identify which one contains a section that will have an intersection.

    //The comparison will look like this:
    //Sort the bins by the start. 
    //start the for loop:
    //select an element.
    //compare the upper range of the 

    //After identifying the bin we need to go into the original array and determine the actual location.

    //for example, we will go through the array,
    //[[0, 10, 20], [10, 15, 21], [20, 15, ]]

    //and notice that 


    ///----#2
    //bins look like this:
    //Bin 1: from min to min+10.
    //Bin 1 contains all of the points with corresponding y values between min and min+10. So it is a 2D array, containing points.
    //So we process the binary once, into a chart, then process the chart once. 
    //After the bins are made, examine them:
    //Calculate the max span in bin 1.
    //Calculate the max span in bin 2. Abort the calculation if the span value is smaller than already found.

    //etc. for all bins

    //So we have 3 different scans. Doing so we avoid the uselessness of checking each element against every other to find the span. We take advantage of the fact that the slope can only be 1:1, so bins can be used.

    //do some binning.
    let chartArrCopy = chartArr.slice();
    let binSize = 50;
    // console.log("chartArr size:", chartArrCopy.length)
    let binnedData = [];

    // console.log('empty binned data arr', binnedData);

    //This doesn't work. There should be a maximum of 200 bins if there are 20 000 data points. The console suggests that is working, but the resultant bin array contains an incorrect number of points - 2669. If length is reporting all the points it should be 20000 in size. If it's only the bins it should be 200 max.

    //ok one of the complications is that binning has to start at a negative value. 
    let yVals = chartArr.map(el => el[1]);
    let min = yVals.reduce((a,b) => Math.min(a,b), Infinity);
    // console.log('minimum value in xychart', min);
    console.time('binningProcess');
    for (let i=0;i<chartArrCopy.length/binSize;i++){//Choose the bin #. This is not the same as the start location of the bin because bins start at negative values.
        // console.log(`adding to bin ${i}`);
        binnedData.push([]);//make an empty bin
        let length = chartArrCopy.length;
        for (let j=0;j<length;j++){//Scan the data. I speed this scanning by taking the point out of the array once the point is binned.
            // console.log("examining element with Y value:", chartArrCopy[j][1]);
            if (chartArrCopy[j][1]<(min+(i+1)*binSize) && chartArrCopy[j][1]>=(min+i*binSize)){
                // console.log(`Put ${chartArrCopy[j]} into bin # ${i}`);
                binnedData[i].push(chartArrCopy[j]);
                // chartArrCopy.splice(j,1);//delete element
                // j--;//correct j after deletion
                // length--;
            }
        }
        // console.table(`Contents of bin ${i}`, binnedData[i]);
    }
    console.timeEnd('binningProcess');
    console.time('spanCalc');
    // console.log("binnedData", binnedData);
    let span =0;
    let tempSpan=0;

    let yLine = 0;
    let tempyLine = 0;
    let offset =0;
    let ind = 0;
    //Now write something to scan each bin. This helps because effectively what happens is we skip a lot of the scanning useless values.
    for (let k=0;k<binnedData.length;k++){//Select the bin
        let binSize = binnedData[k].length;
        for (let i=0;i<binSize;i++){//Select the starting point
            for (let j=i+1;j<binSize-i;j++){//Select the comparison point
                ind = binnedData[k][i][0];
                    // console.log('index', ind);
                    if (a[ind] == 0){
                        offset = -1;
                    } else {
                        offset = 1 ;
                    }
                    // console.log(`first element is a ${a[ind]}  so offset is:`, offset);

                if (binnedData[k][i][1] == binnedData[k][j][1]+offset) {
                    tempSpan = binnedData[k][j][0] - binnedData[k][i][0] + 1;
                    // console.log(`first element index is a ${binnedData[k][i][0]}. second element index is ${binnedData[k][j][0]}  so span is:`, tempSpan);
                    tempyLine = binnedData[k][i][1];
                }
            }
            if (tempSpan>span) {
                span = tempSpan;
                yLine = tempyLine;
            }
        }
    }   
    console.timeEnd('spanCalc');
    // console.log(span);
    // console.log(yLine);
    // console.time('scan');
    // let start, end;
    // for (let i = 0;i<chartArr.length-1;i++){
    //     if (chartArr[i][0] == chartArr[i+1][0]){
    //         // console.log(`found an intersection!`);
    //         start = chartArr[i][1];
    //         //now look for the end
    //         for (let j=i+2;j<chartArr.length;j++){
    //             if (chartArr[i][0] != chartArr[j][0]){
    //                 end = chartArr[j-1][0];
    //             }
    //         }
    //     }
    //     if (start-end>span){
    //         // console.log(`update span`)
    //         span = start-end;
    //     }
    // }
    // console.timeEnd('scan');

    console.log(`span: ${span}`);
    console.timeEnd('overall')
    return span;

}

//I'm gettin 353ms for a 20 000 element set.
//big set string takes way too long.
//also way too long with a 200 000 byte long set. 14.7s.
// Of course it varies. Overall 18.2s, spancalc only takes 1.5s. 
// Overall 11.5s, binning 10s, spancalc 1.5s.

//So yes the binning speeds up the scan but the binning itself is too slow!
//Why is it so slow? I'm only going through the array once.
//The bin size does have a substantial, roughly linear effect on binning speed. 100 is about 10x the speed.
//But then the scanning takes longer!
//Balancing them does help but I don't know if it will be sufficient. the 200 000 dataset can be finished in about 9s with bin size 50.

//Ugh, binning fails because it can't process small datasets.

//The "very big size" is actually 200 000 or so, so I am actually doing it fast enough here. 
//But it is also calculating the span incorretly, sometimes. 

// Yes I incorrectly calculate the span. The array [0,1] should return a span of 2. However, when I make the xychart it will result in [[0,-1],[1,0]] which returns a span of zero. So that's an offset of one error.
//When we are calculating the span I could detect if the first element is a 0. If it is offset should be -1. If it is a 1 offset should be +1. Offset is applied to the second point only. So [0,1] will give an xy of [[0,-1],[1,-1]]. The modification happens when when we calculate the span. [1,0] will give an xy of [[0,1],[1,1]]

//I should try literally just counting the 0's and one's. Enough of this xychart stuff.
// let data = localStorage.getItem("midSizedSet");
// data = JSON.parse(data.trim());

//I tried fixing this offset error but I can't get it. And it's still timing out.

let data = [0,1,0,1];
console.log(`detected max balanced binary sequence in dataset from localStorage: ${binarray(data)}`)