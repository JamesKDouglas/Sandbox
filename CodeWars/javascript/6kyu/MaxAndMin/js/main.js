//input: arguments, comma separated. Each argument contains an integer or more than one integer or is empty.

//The integers are present as number and string type. It is also possible that an invalid character will be submitted, bundled with the number or otherwise.

//The task is to find the min and max in the collection of numbers.

//Return the highest or lowest as an integer number.

// max(1,2,3,4) //returns 4
// max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
// max(1,2,[3,4]) //returns 4
// max(1,2,[3,[4]]) //returns 4
// max(1,2,[3,['4r']]) //returns NaN
// max([[],[-4]]) // returns -4
// max() or max([]) //returns 0

//So you can see that the arrays may be multi dimensional but need to be flattened. Also, a number may be submitted as a string.

//If nothing is submitted, return 0.

//BigInts? No.
//Job size? Timeout situations? 

function max(...nums){

    //early return if nums is empty
    if (nums.length === 0){
        return 0;
    };

    //Flatten anything multidimensional
    let flatNums = nums.flat();

    //Get rid of any array types, making them a primitive
    flatNums = flatNums.map(el => (typeof(el)==='object'?el[0]:el));

    //Remove undefined values, they are just in the way and can trigger the NaN test.
    flatNums = flatNums.filter(el => el!==undefined);

    //Convert all to number type if you can. If you can't we expect a NaN and deal with that below.
    flatNums = flatNums.map(el => Number(el));

    //Inspect for NaN - if something like 4r failed to convert it should be a NaN
    for (let i=0;i<flatNums.length;i++){
        if (isNaN(flatNums[i])){
            return NaN;
        }
    }

    //Now that we have done the initial checks for 0, NaN, and prepared and parsed stuff into an array as normal integers we can do the core bit - look for the max value.

    let max;
    for (let i=0;i<flatNums.length;i++){
        if (max<flatNums[i] || max === undefined){
            max = flatNums[i];
        }
    }

    return max;
}

function min(...nums){
    //early return if nums is empty
    if (nums.length === 0){
        return 0;
    };

    //Flatten anything multidimensional
    let flatNums = nums.flat();

    //Get rid of any array types, making them a primitive
    flatNums = flatNums.map(el => (typeof(el)==='object'?el[0]:el));

    //Remove undefined values, they are just in the way and can trigger the NaN test.
    flatNums = flatNums.filter(el => el!==undefined);

    //Convert all to number type if you can. If you can't we expect a NaN and deal with that below.
    flatNums = flatNums.map(el => Number(el));

    //Inspect for NaN - if something like 4r failed to convert it should be a NaN
    for (let i=0;i<flatNums.length;i++){
        if (isNaN(flatNums[i])){
            return NaN;
        }
    }

    let min;
    for (let i=0;i<flatNums.length;i++){
        if (min>flatNums[i] || min === undefined){
            min = flatNums[i];
        }
    }

    return min;
}

console.log(max(1,2,3,4), 4);
console.log(max(1,2,3,['4']), 4);
console.log(max(1,2,[3,4]), 4);
console.log(max(1,2,[3,[4]]),4);
console.log(max(1,2,[3,['4r']]), NaN);
console.log(max([[],[-4]]), -4);//consider the [] as just undefined - not NaN, and not 0.
console.log(max(), 0);

console.log("min:");

console.log(min(1,2,3,4), 1);
console.log(min(1,2,3,['4']), 1);
console.log(min(1,2,[3,4]), 1);
console.log(min(1,2,[3,[4]]),1);
console.log(min(1,2,[3,['4r']]), NaN);
console.log(min([[],[-4]]), -4);//consider the [] as just undefined - not NaN, and not 0.
console.log(min(), 0);
