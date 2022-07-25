function code(strng) {
    //Encode base 10 as 'binary'
    let digits = strng.split('');

    let k;

    let digitsBinary = [];

    let stringDigits = "";

    for (let i=0;i<digits.length;i++){
        console.log(`digit: ${digits[i]}`);
        console.log(`in binary: ${Number(digits[i]).toString(2).toString()}`)
        
        k = Number(digits[i]).toString(2).toString().length;
        
        console.log(`number of bits, k: ${k}`);
       
        stringDigits = "";
        for (let j=0;j<k-1;j++){
            stringDigits = stringDigits + "0";
            // console.log('added a zero');
        }
        stringDigits = stringDigits + "1";
        // console.log(`digits[i]: ${digits[i]}`);
        // console.log(typeof(digits[i]));

        // console.log(`try to convert to binary: ${Number(digits[i]).toString(2).toString()}`);
        stringDigits = stringDigits + Number(digits[i]).toString(2).toString();
        // console.log(`stringDigits: ${stringDigits}`);
        digitsBinary.push(stringDigits);
    }
    // console.log(digitsBinary);
    numBinary = digitsBinary.join('');
    return numBinary;
}
function decode(str) {
    let binaryDigits = str.split('');
    let baseTenDigs = [];
    let k = 0;
    for (let i = 0 ; i<binaryDigits.length ;i++){
        // console.log(`looking at i: ${i} in ${binaryDigits}`);
        if (binaryDigits[i] ==0){
            k++;
            // console.log(`Found a zero, k is now ${k}`);
        }
        if (binaryDigits[i] ==1){
            k++;
            //found a number with k binary digits to follow
            
            let bin = binaryDigits.slice(i+1, i+k+1).join('');
            let dig = parseInt(bin, 2);
            
            // console.log(`Decoded a digit!  ${bin} becomes ${dig}`);
            baseTenDigs.push(dig);
            // console.log(`decoded so far: ${baseTenDigs}`);
            i = i+k;//Skip past the known binary digits
            k=0;//Reset digit counter
            
        }
    }
    return baseTenDigs.join('');
}

let num = "77338855";

// console.log(code(num));

//1110111111 0110110111
//1110111111 0110110111
let digNum = "001111001111011101110001100000011000001101001101";

console.log(decode(digNum))


//77338855
//  001 111 001 111 01 11 01 11 0001 1000 0001 1000 001 101 001 101
//  001 111 001 111 01 11 01 11 0001 1000 0001 1000 001 101 001 101