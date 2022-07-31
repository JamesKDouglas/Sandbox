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
        let peakPositions = [];
        let peakValuse = [];
        for (let i=0;i<deriv.length-1;i++){
            a = deriv[i];
            b = deriv[i+1];
            if (a>0&&b<0){
                peakPositions.push(i+1);
                peakValues.push(arr[i]);
            }
        }
    }

    let deriv = findDeriv(arr);
    findPeaks(deriv, arr);

    return deriv;
    //  return {pos:[],peaks:[]}
}

let arr = [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3];
console.log(pickPeaks(arr));