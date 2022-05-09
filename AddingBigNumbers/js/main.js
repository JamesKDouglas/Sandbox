//test cases:
// Expected: '105 785 350 944 036 766 568 245 045 879 486 646 450 174 658 038 866 651 794 365 4', instead got: '1.0578535094403677e+45388666517943654'
// Expected: '1 222 288 369 471 848 635 431 742 533 238 794 347 796 709 858 386 130 887 087 383', instead got: '1.2222883694718487e+45386130887087383'
// Expected: '1188027920792406899351871815238255333339717894129824807166673', instead got: '1.188027920792407e+45129824807166673'
// Expected: '1131313130303031311313030303131313121212131313129120030130132', instead got: '1.1313131303030313e+45129120030130132'
// Expected: '1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272327', instead got: '1.8231729642602637e+105262963360272327'

//this number is 121 digits long!

// - split the number into 15 digit pieces that can be correctly added. Looks like I should make an array because there can be up to 10 of them. 
// - Add them, starting from the end. 
// - After adding a pair, decide if you need to carry the one. 
// - if you do need to carry the one, that's fine just carry it by adding one to the next added pair.
// - It is possible that it will literally carry through to the next pair. That's fine, no need to change anything.
// - this method goes up to 10 15 digits pieces. After that we'll have to, well, potentially carry a 1 twice or something. There will be a sort of overflow. Anyways the largest number is 121 digits.

function add(a,b){
    if (Number(a)||Number(b) > 9007199254740990){//special number!
        let piecesA = breakup(a);
        let piecesB = breakup(b);

        //The way the arrays are made they are a bit backwards. That's just counterintuitive to me so lets fix it.
        
        piecesA.reverse();
        piecesB.reverse();
        
        //I like the reverse because it makes an array where the elements just look like the original number, broken up into pieces
        //But it does mean that I cannot simply add the pieces all together with the same index in a for loop.
        //Lets make it so I can.
        
        //Add zero elements to the start of the shortest array to make them the same length
        
        let forLength = Math.abs(piecesA.length-piecesB.length);
        for (let i = 0; i<forLength;i++){
            
            if (piecesA.length<piecesB.length){
                piecesA.unshift(0);
            } else {
                piecesB.unshift(0);
            }
        }
        
        return (subAdd(piecesA, piecesB));
        //now, add the pieces
        
    } else if (a+b < 9007199254740990){ //not a special number
        return (Number(a) + Number(b)).toString();
    }
    
}

function subAdd(arrA, arrB){
    let summedNums = [];
    let carryTheOne = 0;
    for(let i=(arrA.length-1);i>=0;i--){
        summedNums[i] = +arrA[i] + +arrB[i]
        summedNums[i] += Number(carryTheOne);
        if(summedNums[i].length>arrA[i].length){
            carryTheOne = 1;//now, next time I go through the loop I need to add an extra 1
            //also, we need to slice off the extra 1 so it doesn't interfere with the later join.
            console.log()
            summedNums[i] = summedNums[i].slice(0, summedNums[i].length);

        } else {
            carryTheOne = 0;
        }
    }
    console.log(summedNums);
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
}
//expected 1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272327
//add('1 823172964260263 830982280609675 150766951754355 882242391698277 783797094232179 652457248777050 585906182180138 262963360272327', '32179652457248777050585906182180138262963360272327');
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
//00063829983432984289347293874
//90938498237058927340892374089
//91002328220491911630239667963

//910023282204901911630239667963


//// Expected: '91002328220491911630239667963', 
//instead got: '910023282204901911630239667963'
////////////////91002328220491911630239667963
////////////////81002328220491911630239667963
////////////////910023282204901011630239667963
////////////////910023282204901011630239667963
////////////////910023282204901011630239667963

// Expected:   '91002328220491911630239667963', 
//             910023282204918111630239667963
//   ad got:   '91002328220490 191163023966796 3'
//Seems to me that the program is not correctly slicing off the leading one and adding it to the next section. So this is a rollover issue.
//the code i wrote for rollover just isn't working.