/*const array = [0,1,2,3,4];

let total = 0;
array.forEach(num => {
    total += num;
});


let total = [0,1,2,3,4].reduce((accumulator, currentValue) => accumulator+currentValue);
*/

let observedNum = '65';

let observedNumArr = observedNum.split('');

let matchArr = [
    [0,8], 
    [1,2,4],
    [2,1,5,3],
    [3,2,6],
    [4,1,5,7],
    [5,2,4,6,8],
    [6,3,5,9],
    [7,4,8],
    [8,5,7,9],
    [9,6,8]
]

//console.log(matchArr[observedNumArr[0]]);//It comes in as a string, but that's fine Javascript coerces it into an integer.

//let allPins = matchArr[observedNumArr[1]].reduce((acc, curr) => acc = acc + curr);

//console.log(allPins);
console.log(observedNumArr.length);

let allPins = [];

for (i=0;i<observedNumArr.length; i++){
    console.log(`Digit held index: ${i}`);
    console.log(`Held digit value: ${observedNumArr[i]}`)
    console.log(`Possible digits: ${matchArr[observedNumArr[i]]}`);
    //console.log(`matchArr[observedNumArr[i]].length ${matchArr[observedNumArr[i]].length}`)

    for (j=(observedNum.length-1); j>=0; j--){
        console.log(`rolling through digit index: ${j}`)

        //allPins = allPins + matchArr[observedNumArr[i]].map(el => "" + el + matchArr[observedNum[j]]);//for some reason map doesn't coerced the number into an integer. This addition just concatenates, which is what I want.
        allPins = allPins + ','
        console.log(allPins);
    }
}
//console.log(allPins);

//console.log(matchArr[observedNumArr[0]][0]);