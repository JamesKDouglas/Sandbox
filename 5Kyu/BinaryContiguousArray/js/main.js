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
    let span = 0;
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
    console.log(`original data: ${a}`);
    console.log("chartArr", chartArr);
    
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
    let binSize = 10;
    console.log("chartArr size:", chartArrCopy.length)
    let binnedData = [];

    // console.log('empty binned data arr', binnedData);

    //This doesn't work. There should be a maximum of 200 bins if there are 20 000 data points. The console suggests that is working, but the resultant bin array contains an incorrect number of points - 2669. If length is reporting all the points it should be 20000 in size. If it's only the bins it should be 200 max.

    //ok one of the complications is that binning has to start at a negative value. 
    let yVals = chartArr.map(el => el[1]);
    let min = yVals.reduce((a,b) => Math.min(a,b), Infinity);
    console.log('minimum value in xychart', min);

    for (let i=0;i<chartArrCopy.length/binSize;i++){//Choose the bin #. This is not the same as the start location of the bin because bins start at negative values.
        console.log(`adding to bin ${i}`);
        binnedData.push([]);//make an empty bin

        for (let j=0;j<chartArrCopy.length;j++){//Scan the data. I speed this scanning by taking the point out of the array once the point is binned.
            console.log("examining element with Y value:", chartArrCopy[j][1]);
            if (chartArrCopy[j][1]<(min+(i+1)*binSize) && chartArrCopy[j][1]>=(min+i*binSize)){
                console.log(`Put ${chartArrCopy[j]} into bin # ${i}`);
                binnedData[i].push(chartArrCopy[j]);
                chartArrCopy.splice(j,1);//delete element
                j--;//correct j after deletion
            }
        }
        console.table(`Contents of bin ${i}`, binnedData[i]);
    }
    console.log("binnedData", binnedData);

    //Now write something to scan each bin


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
    return span;

}

let data = localStorage.getItem("smallerSet");
data = JSON.parse(data.trim());
console.log(`detected max balanced binary sequence in dataset from localStorage: ${binarray(data)}`)