/*
function add(a, b) {
    
    //Split the numbers in half. The numbers come in as strings.
    // //which is longer, a or b?
    // let longer = "neither";
    // let a_1, b_1, a_2, b_2;

    // if (a.length>b.length){
    //     console.log('a is larger');
    //     longer = "a";
    //     a_1 = a.slice(0, a.length/2);
    //     a_2 = a.slice(a.length/2);

    //     b_1 = b.slice(0, (b.length - a.length/2));
    //     b_2 = b.slice(-((a.length/2)+1));
    // } else if (b.length>a.length){
    //     longer = "b";

    //     b_1 = b.slice(0, b.length/2);
    //     b_2 = b.slice(b.length/2);

    //     a_1 = a.slice(0, (a.length - b.length/2)); //this could end up being negative if b is less than half the length of a, which could give a reverse slice? 
    //     a_2 = a.slice(-((b.length/2)+1));
    // }
    // //add a case with equal length;


//I have an idea - convert the number to binary first. That may make it easier to split. The reason is that a binary number has no carryover(right?).

//Well anyways the point is that you have to represent a number as 2 numbers. one which is precisely represented by a scientific number of known 10 power. Another which is represented by a number of a smaller number of digits. No problem there. We can so up t 30 digits no problem this way.

//if the numbers are, when added, shorter than 19 digits 9007199254740991 is the "maximum safe integer value". That's 16 digits


if (a+b > 9007199254740990){

    //Above I split the numbers in half. Suppose, instead, I keep it a bit less dynamic and just take off the first digits
    let secondNumLength = 15 //digits

    let a_1 = Number(a.slice(0, (a.length - secondNumLength)));//first digits
    let a_2 = Number(a.slice((a.length - secondNumLength)));//to the end. The second numbers have to be the same length
    let b_1 = Number(b.slice(0, (b.length - secondNumLength)));//first digits
    let b_2 = Number(b.slice(b.length - secondNumLength));//to the end
    
    //now just add them together.
    let onesAdded = a_1 + b_1;
    let twosAdded = a_2 + b_2;

    //the above alone works fine for the test case since there is no rollover. But in some cases when the second halfs are added the resulting number will be a larger number of digits than the originals were. In this case we have to 'carry the one'
//    console.log(`Second halfs added before carrying the 1: ${twosAdded}. Digits: ${twosAdded.toString().length}`)
    if (twosAdded.toString().length > secondNumLength){
        //if the second half is larger in digits then the first digits will just be a one. 
        //All we have to do is slice it off, then add one to the first part.
        onesAdded++;
        twosAdded = twosAdded.toString().slice(1);
    }

    let sum = onesAdded.toString() + twosAdded.toString();

    //console.log(a.length);
    //
    console.log(`length of a ${a.length}`);
    console.log(`length of b ${b.length}`);

    console.log(`a: ${a}`)
    console.log(`First part of a: (length) ${a_1.toString().length}`);
    console.log(a_1);
    console.log(`Second part of a: (length) ${a_2.toString().length}`);
    console.log(a_2);
    
    console.log(`b: ${b}`)
    console.log(`First part of b: (length) ${b_1.toString().length}`);
    console.log(b_1);    
    console.log(`Second part of b: (length) ${b_2.toString().length}`);
    console.log(b_2);

    console.log(`First halfs added: ${onesAdded}. Digits: ${onesAdded.toString().length}`)
    console.log(`Second halfs added: ${twosAdded}. Digits: ${twosAdded.toString().length}`)

    console.log(`output: ${sum}.`)
    return sum;
    } else if (a+b < 9007199254740990){
        console.log(`${(Number(a) + Number(b)).toString()}`)
        return (Number(a) + Number(b)).toString();
    }

    //return (Number(a) + Number(b)).toString(); // Fix me!
}
*/

//normal short number:
//expect 1110
//  add("888", "222");

//long number with no rollover:
//expect 91002328220491911630239667963
//    add('63829983432984289347293874', '90938498237058927340892374089')

//long number with rollover:
//
//add('99999999999999999999999999', '90938498237058927340892374089')

// //Some test cases are failing. Why?
// Expected: '105 785 350 944 036 766 568 245 045 879 486 646 450 174 658 038 866 651 794 365 4', instead got: '1.0578535094403677e+45388666517943654'
//well that's because it's 61 digits long! I only designed the above functon to handle the test cases, which is up to 30 digits. I guess I should have tested what the actual test cases are first.
// Expected: '1 222 288 369 471 848 635 431 742 533 238 794 347 796 709 858 386 130 887 087 383', instead got: '1.2222883694718487e+45386130887087383'
// Expected: '1188027920792406899351871815238255333339717894129824807166673', instead got: '1.188027920792407e+45129824807166673'
// Expected: '1131313130303031311313030303131313121212131313129120030130132', instead got: '1.1313131303030313e+45129120030130132'
// Expected: '1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272327', instead got: '1.8231729642602637e+105262963360272327'

//this number is 121 digits long!

//I can still use a similar logic though - 
// - split the number into 15 digit pieces that can be correctly added. Looks like I should make an array because there can be up to 10 of them. 
// - Add them, starting from the end. 
// - After adding a pair, decide if you need to carry the one. 
// - if you do need to carry the one, that's fine just carry it by adding one to the next added pair.
// - It is possible that it will literally carry through to the next pair. That's fine, no need to change anything.
// - this method goes up to 10 15 digits pieces. After that we'll have to, well, potentially carry a 1 twice or something. There will be a sort of overflow. Anyways the largest number is 121 digits.
function add(a,b){
    if (a+b > 9007199254740990){

        let piecesA = breakup(a);
        let piecesB = breakup(b);
    //The way the arrays are made they are a bit backwards. That's just counterintuitive to me so lets fix it.
    //hm maybe I shouldn't reverse. During adding I basically just want to put the first pieces together.
        
        piecesA.reverse();
        piecesB.reverse();
        
        //I like the reverse because it makes an array where the elements just look like the original number, broken up into pieces
        //But it does mean that I cannot simply add the pieces all together with the same index in a for loop.
        //Lets make it so I can, by adding zero elements to the start of the shortest array to make them the same length
        
        let forLength = Math.abs(piecesA.length-piecesB.length);
        for (let i = 0; i<forLength;i++){
            //console.log(piecesB.length);    
            if (piecesA.length<piecesB.length){
                piecesA.unshift(0);
            } else {
                piecesB.unshift(0);
            }
        }

        //examine(piecesA);
        //examine(piecesB);
    
        //now, lets do some adding.
        function add(arrA, arrB){
            let summedNums = [];
            let carryTheOne = 0;
            for(let i=(arrA.length-1);i>=0;i--){
                //console.log(`summing: ${arrA[i]} and ${arrB[i]}`)
                summedNums[i] = +arrA[i] + +arrB[i] + +carryTheOne;
                if(summedNums.length>arrA.length){
                    //console.log(`carry the one!`)
                    carryTheOne = 1;//now, next time I go through the loop I need to add an extra 1
                } else {
                    carryTheOne = 0;
                }
                //console.log(`${summedNums[i]}`)
            }
            summedNums = summedNums.join('');    
            return summedNums;
        }
        console.log(`expected: 1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272327`)
        console.log(`returned: ${add(piecesA, piecesB)}`);

        
    // function examine(a){
    //     console.log(`number of pieces: ${a.length}`)
    //     for (let i=0;i<a.length;i++){
    //         console.log(`piece ${i}: ${a[i]}`)
    //     } 
    //    }

    } else if (a+b < 9007199254740990){ //not a special number
        console.log(`${(Number(a) + Number(b)).toString()}`)
        return (Number(a) + Number(b)).toString();
    }

    function breakup(a){
        let pieceSize = 15;
        let piecesA=[];
        let numPieces = parseInt(a.length/pieceSize);
        //console.log(a.length);
    
        for (let i=0; i<(numPieces+1);i++){
            //console.log(`run for loop ${i}`);
            piecesA[i] = a.slice((a.length-pieceSize*i), (a.length-pieceSize*(i-1)));//start, end. I want to cut the number up like a pop - chop from the end.
            //console.log(`piece ${i} : ${piecesA[i]}`);
        }
        //the first element is empty. oops. I could fix that but lets patch it for now
        piecesA.shift(1);

        //last piece
        //console.log(`number of 15 digit pieces: ${numPieces}`)
        piecesA[numPieces] = a.slice(0, (a.length - numPieces*pieceSize));
        //console.log(`last piece: ${piecesA[numPieces+1]}`)

        return piecesA;
    }
    
    }
}

//expected 1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272327
//add('1 823172964260263 830982280609675 150766951754355 882242391698277 783797094232179 652457248777050 585906182180138 262963360272327', '32179652457248777050585906182180138262963360272327');
add('1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272326', '1');
