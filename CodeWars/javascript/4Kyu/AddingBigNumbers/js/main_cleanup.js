function add(a, b) {
//in JS 9007199254740991 is the "maximum safe integer value". That's 16 digits long
//This function just adds numbers similarly to how we would do it by hand.

//but I only want to do special stuff if the numbers are problematically long
    if (a+b > 9007199254740990){

        let secondNumLength = 15 //digits

        let a_1 = Number(a.slice(0, (a.length - secondNumLength)));//first digits
        let a_2 = Number(a.slice((a.length - secondNumLength)));//to the end. The second numbers have to be the same length
        let b_1 = Number(b.slice(0, (b.length - secondNumLength)));//first digits
        let b_2 = Number(b.slice(b.length - secondNumLength));//to the end
        
        //now just add the two halves together.
        let onesAdded = a_1 + b_1;
        let twosAdded = a_2 + b_2;

        //The above alone works fine for the test case since there is no rollover. But in some cases when the second halfs are added the resulting number will be a larger number of digits than the originals were. In this case we have to 'carry the one'
        if (twosAdded.toString().length > secondNumLength){
            //if the second half is larger in digits then the first digits will just be a one. 
            //All we have to do is slice it off, then add one to the first part.
            onesAdded++;
            twosAdded = twosAdded.toString().slice(1);
        }

        let sum = onesAdded.toString() + twosAdded.toString();

        //some outputs used to check and debug:
        // console.log(`length of a ${a.length}`);
        // console.log(`length of b ${b.length}`);

        // console.log(`a: ${a}`)
        // console.log(`First part of a: (length) ${a_1.toString().length}`);
        // console.log(a_1);
        // console.log(`Second part of a: (length) ${a_2.toString().length}`);
        // console.log(a_2);
        
        // console.log(`b: ${b}`)
        // console.log(`First part of b: (length) ${b_1.toString().length}`);
        // console.log(b_1);    
        // console.log(`Second part of b: (length) ${b_2.toString().length}`);
        // console.log(b_2);

        // console.log(`First halfs added: ${onesAdded}. Digits: ${onesAdded.toString().length}`)
        // console.log(`Second halfs added: ${twosAdded}. Digits: ${twosAdded.toString().length}`)

        // console.log(`output: ${sum}.`)

        return sum.toString();

    } else if (a+b < 9007199254740990){
            return (Number(a) + Number(b)).toString();
    }
}
//normal short number:
//expect 1110
//  add("888", "222");

//long number with no rollover:
//expect 91002328220491911630239667963
//    add('63829983432984289347293874', '90938498237058927340892374089')

//long number with rollover:
//
add('99999999999999999999999999', '90938498237058927340892374089')