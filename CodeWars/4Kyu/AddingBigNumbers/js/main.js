
function add(a,b){
    if (Number(a)+Number(b) > 9007199254740990){//special number! This is 16 digits.

        //I want both numbers to be the same size because later I'll break them up and add them.
        //Add zero elements to the start of the shortest array to make them the same length
        let length = (a.length>=b.length)?a.length:b.length;//length of the longest, whichever that is
        a = a.padStart(length, '0');
        b = b.padStart(length, '0');

        //now break them up
        let piecesA = breakup(a);
        let piecesB = breakup(b);

        //The way the arrays are made the pieces backwards. That's just counterintuitive to me so lets fix it.
        piecesA.reverse();
        piecesB.reverse();
        
        console.log(piecesA);
        console.log(piecesB);
        
        //now, add the pieces
        return (subAdd(piecesA, piecesB));
        
        
    } else if (+a + +b < 9007199254740990){ //not a special number
        return (Number(a) + Number(b)).toString();
    }
    
}

function subAdd(arrA, arrB){
    let summedNums = [];
    let carryTheOne = 0;
    for(let i=(arrA.length-1);i>=0;i--){
        summedNums[i] = +arrA[i] + +arrB[i]
        summedNums[i] += Number(carryTheOne);
        carryTheOne = 0;
        
        // console.log(`adding pieces: ${arrA[i]} and ${arrB[i]}`);
        // console.log(`sum: ${summedNums[i]}`);
        // console.log(`length of sum: ${summedNums[i].toString().length}`);

        if(summedNums[i].toString().length>arrA[i].toString().length && i!=0){
            //Note that we don't carry the one for the last element we sum
           // console.log(`carry the one`);
            carryTheOne = 1;//now, next time I go through the loop I need to add an extra 1
            //also, we need to slice off the extra 1 so it doesn't interfere with the later join.
            summedNums[i] = Number(summedNums[i].toString().slice(1, summedNums[i].length));
        } else {
            carryTheOne = 0;
        }
    }
    //console.log(summedNums);
    summedNums = summedNums.join('');
    return summedNums.toString();
}

function breakup(a){
    let pieceSize = 14;
    let piecesA=[];
    let numPieces = parseInt(a.length/pieceSize);

    for (let i=0; i<(numPieces+1);i++){
        piecesA[i] = a.slice((a.length-pieceSize*i), (a.length-pieceSize*(i-1)));//start, end. I want to cut the number up like a pop - chop from the end.
    }
    //the first element is empty. oops. I could fix that but lets patch it for now
    piecesA.shift(1);

    //last piece
    piecesA[numPieces] = a.slice(0, (a.length - numPieces*pieceSize));

    return piecesA;
};
//In this kata it is useful to acquire the test cases by console logging the arguments.

// console.log(add('823094582094385190384102934810293481029348123094818923749817','234758927345982475298347523984572983472398457293847594193837'));
//            823094582094385190384102934810293481029348123094818923749817
//            234758927345982475298347523984572983472398457293847594193837
//Expected: '1057853509440367665682450458794866464501746580388666517943654', 
//           1057853509440367665682450458794866464501746580388666517943654
//////////////665853513440373671681950538802826459508747383368266526943154
//            665853513440373671681950538802826459508747383368266526943154
//     got: '  57853509440367665682450458794866464501746580388666517943654'
//             57853509440367665682450458794866464501746580388666517943654 
// The 10 is missing in front! This issue came from carrying the one on the last piece by accident.
