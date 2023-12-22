// input: just 1 array. Booleans. not Empty not 0. just null/undefined. some values may also be, even if length >0.
//example 36. 

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// [true,  true,  true,  false,
//   null,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// [undefined]

[true,  true,  true,  false,
  null,  true,  true,  true ,
  true,  false, undefined,  null,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

// integer returned is just # present. Just the number. Just 0 in null or undefined cases. Null or undefined counts as falsy.

function countSheeps(arrayOfSheep) {
    // let counter = 0;
    // for (let sheep of arrayOfSheep){
    //     // console.log(sheep);
    //     if (sheep === true){
    //         counter++;
    //     }
    // }

    // for (let i = 0; i<arrayOfSheep.length; i++){
    //     if (arrayOfSheep[i] === true){
    //         counter++;
    //     }
    // }

    // let counter = arrayOfSheep.reduce((acc, el) => {
    //     if (el===true) {
    //         return ++acc; //acc++ would return before incrementing!!
    //     } else {
    //         return acc;
    //     };
    //     // return el ? acc+1:acc;
    //  }, 0);

    return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]), "17");

console.log(countSheeps([true,  true,  true,  false,
    null,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]), "16");

console.log(countSheeps([undefined]), "0");

console.log(countSheeps([true,  true,  true,  false,
    null,  true,  true,  true ,
    true,  false, undefined,  null,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]), "15");