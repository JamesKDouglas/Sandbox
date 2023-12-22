// parameters: An array of integers in input. The array represents a line, with the index as x and value as y.
// return: the location of the local peaks. That is, maxima excluding any start and end values. If there is a plateau, report the start of it.
// example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]}
// pseudocode:
//Find the derivative.
//Hunt through the derivative array and look for a rise. 
// When you find one check the derivative value of the next index in the array.
// If it is zero, we have a plateau. Begin the plateau end detection function.
// If it is negative, we have a peak.
// If it is positive, the line is just rising. 

function pickPeaks(arr){
    function findDeriv(arr){
        let deriv = [];
        for (let i = 0;i<arr.length-1;i++){
            deriv.push(arr[i+1] - arr[i]);//peak will be index 1 smaller.
        }
        return deriv;
    }

    let peakPositions = [];//How would you return two arrays? Use 2 functions instead? Here I'm settig up a 'side effect' which is suppose to be poor practice but it is easy here.

    //in the end we do have to return two arrays, and as an object.
    let peakValues = [];

    function findPeaks(deriv, arr){
        let a,b=0;

        for (let i=0;i<deriv.length-1;i++){
            a = deriv[i];
            b = deriv[i+1];
            if (a>0&&b<0){
                console.log(`found peak position at ${i+1}`);
                peakPositions.push(i+1);
                console.log(`with value ${arr[i+1]}`)
                peakValues.push(arr[i+1]);
            }
            if (a>0&&b==0){
                findPlateau(deriv, arr, i);
            }
        }
    }

    function findPlateau(deriv, arr,j){
        console.log(`Maybe found a plateau? I see a rise then flat. Inspecting.`)
        for (let i=j;i<deriv.length;i++){

            let a, b = 0;
            a = deriv[i];
            b = deriv[i+1];

            if (a>0&&b==0){//It is on the first round because that's what triggered the function to run. But I'll keep going onwards with b.
                console.log(`taking a look onwards from the flat, looking for a fall`);
                let hunterCounter = i+1;//begin looking for a fall.
                while(b==0){
                    hunterCounter++;
                    b = deriv[hunterCounter];
                    if (hunterCounter>=deriv.length){
                        return;//This is not a plateau, just the end of the array. 
                    } 
                }
                if (b<0){
                    //found a fall after a flat, which is a plateau!
                    peakPositions.push(i+1);
                    console.log(`Recorded a plateau with value ${arr[i+1]}`)
                    peakValues.push(arr[i+1]);
                    return;
                }
                if (b>0){
                    //this is an inflection then - interesting but not what we're looking for. 
                    return;
                }
            }
        }
    }

    let deriv = findDeriv(arr);
    findPeaks(deriv, arr);
    findPlateau(deriv, arr);

    return {
    //    deriv: deriv,
        pos: peakPositions,
        peaks: peakValues
    }
    //  return {pos:[],peaks:[]}
}

// let arr = [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3];
// let arr = [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]
let arr = [
    -1,  4, 10,  9, 10,  1, 11,  5,  1,  8,  6,
     0, -4, -3, -4,  9,  2,  8, 15,  2,  6,  1,
    -3,  2,  8, -1,  6, 14, 15,  0, 15,  8, 14,
     6, 13,  8,  0, 15, 15, -1,  2,  7, 14,  6,
    10,  1, 12
  ]
console.log(pickPeaks(arr));


// expected 
//{ pos: [ 2, 4, 6, 9, 13, 15, 18, 20, 24, 28, 30, 32, 34, 42, 44, 37 ],
//     
//peaks: [ 10, 10, 11, 8, -3, 9, 15, 6, 8, 15, 15, 14, 13, 14, 10, 15 ] } to deeply equal 
//{ pos: [ 2, 4, 6, 9, 13, 15, 18, 20, 24, 28, 30, 32, 34, 37, 42, 44 ],
//peaks: [ 10, 10, 11, 8, -3, 9, 15, 6, 8, 15, 15, 14, 13, 15, 14, 10 ] }

//So I missed the 15, 15 plateau at position 37? No, I got it but it isn't sorted correctly which is odd. Well that's how I do it - find all the peaks, then look for plateaus. I need to splice in the plateaus if I want to do that. Or call the plateau detection from the peak function.

// //locally
// peaks:[10, 10, 11, 8, -3, 9, 15, 6, 8, 15, 15, 14, 13, 14, 10, 15]
// pos:   [2, 4, 6, 9, 13, 15, 18, 20, 24, 28, 30, 32, 34, 42, 44, 37]

// a shorter solution posted,
// function pickPeaks(arr){
//     var result = {pos: [], peaks: []};
//     if(arr.length > 2) {
//       var pos = -1;
//       for(var i=1; i<arr.length;i++){
//         if(arr[i] > arr[i-1]) {
//           pos = i;
//         } else if(arr[i] < arr[i-1] && pos != -1) {
//           result.pos.push(pos);
//           result.peaks.push(arr[pos]);
//           pos = -1;
//         }
//       }
//     }
//     return result;
//   }
// In this, they look for a rise. If there is a rise, then remember that position. If you then detect a downslope, push the recore position to the array in the object. If it's flat then just carry on to the next item.

//and another, even more concise, demonstrating the power of map but also with low readability:
// function pickPeaks(arr){
//     var pos = arr.map((x,i)=>i > 0 ? Math.sign(x - arr[i-1]) * i : 0)
//       .filter(i => i != 0)
//       .filter((x,i,a) => i < a.length-1 && (a[i+1] < 0 && x > 0));
//     return {pos:pos, peaks:pos.map(i=>arr[i])}
//  }