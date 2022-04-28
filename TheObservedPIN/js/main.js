function getPINs(observed){
    
    //Observed comes in as a string. Parse into an array of numbers.

    observedArr = observed.split('').map(function(item){ return parseInt(item, 10) }); //the 10 is for base ten. The default is not 10.
    //I could use Number or forEach above as well.

    //console.log(observedArr);

    //do some stuff with the numbers
    //this array just adds the possible numbers based on index of the given number.
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

    //Build a new array of possible codes as arrays.

    /*
    let possiblePINs = [];
    for(i=0;i<observedArr.length;i++){
        possiblePINs.push(matchArr[observedArr[i]]);
    }
    console.log(`possible pins: ${possiblePINs}`);
    console.log(`possible pins first entry ${possiblePINs[0]}`);
    console.log(`length of possible pins array: ${possiblePINs.length}`)
    */

    //How about analyzing this from the perspective of potential digits. In the description it states that the code is four digits long. However, in the test cases they test up to 3 digits only. 
    //So the solution is ambiguious. Lets try to generate from 1 to 4 digits.

    //if only 1 digit is submitted observedArr.length is just 1
    let possiblePINs = [];

    /*
    for (let i = 0; i<observedArr.length; i++){
        for(let j=0; j<matchArr[i].length; j++){        
            possiblePINs.push(matchArr[observedArr[j]]);
        }
    }
    */

    //Because the number of digits is unknown I'll try using a callback for loop.
    //imagine that this is a combination lock with rotary encoders that we spin.
    //The callback knows which digit it is working with. Numbers start at the left, with the first as 0.
    //The total array that is used to build possibilities is just globally available.
    //But each callback level spits out combinations to possiblePINs.
    let newCombos = [];
    let positionCounter;
    function spin (position, value) {
        console.log(matchArr);
        for(i=0;i<matchArr[value].length;i++){
            newCombos.push(matchArr[value][i]);
        }

        //console.log(newCombos);
        //possiblePINs.push(newCombos);
        if (positionCounter<observedArr.length){
            positionCounter++;
            spin(positionCounter, observedArr[position]);
        }
    }

    spin(0, observedArr[0]);
    /*
    for(j=0;j<observedArr.length;j++){
        spin(j, observedArr[j]);
    }
    */

    console.log(possiblePINs);



    // when we do this it does create an array of arrays. That just isn't shown with square brackets when displayed in the console. 

    //Take that data structured list of possible codes and generate actual codes with a flat structure.

    //this section needs work. I'm making permutations here and may have to use recursion.

    /*
    let allPINs[];
    let counter = 0;
    
    for (i=0;i<possiblePINs.length;i++){
        
        for(j=0;j<possiblePINs[i].length;j++){
            allPINs[counter].push(possiblePINs[i][j])
            counter++ 
        }
    
    }
    */
    
//    observedArr = observedArr.toString();
//    console.log(observedArr);
}

