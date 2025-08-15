//The input type is a bit confusing. The examples seem to input a string, but then the type stuff at the top indicates an array.
//Well, this code below takes in a string not an array. Perhaps another day I can rewrite it to take in an array.
/** 
 * @param {Uint8Array} decoded
 * @returns string
 */
function toBase64(data) {
    //Get the ascii code of each character, in binary.
    //charCodeAt gives utf-16 but that's the same as ascii for basic characters.
    let codes = [];
    data = String(data);
    for (let i=0;i<data.length;i++){
        codes.push(data.charCodeAt(i));
    }
    //sew them all together and keep leading zeros.
    let codesBin = codes.map((c)=>c.toString(2).padStart(8,"0"));
    let codesBigBin = codesBin.join("");

    //Split that binary up into sections of 6 each
    let codesSix = [];
    for (let i=0;i<codesBigBin.length;i+=6){
        codesSix.push(codesBigBin.substring(i,i+6));
    }
    //Determine the associated character of the 6 bit section
    let base64Map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let codesBTen = codesSix.map((c)=>parseInt(c,2));
    let codesB64 = codesBTen.map((c)=>base64Map[c]);

    //Sew them together.
    return codesB64.join("");
}

/** 
 * @param {string} encoded
 * @returns Uint8Array
 */
function fromBase64(encoded) {

    //backwards from the other function.
    //First, find the base 64 index.
    let base64Map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let codes = [];
    for (let i=0;i<encoded.length;i++){
        codes.push(base64Map.indexOf(encoded[i]));
    }
    //Now convert those to binary
    codes = codes.map((c)=>c.toString(2).padStart(6,'0'));
    //combine and cut into pieces of 8
    codes = codes.join("");
    let ascii = [];
    for (let i=0;i<codes.length;i+=8){
        ascii.push(parseInt(codes.substring(i,i+8),2));
    }
    //recover the character
    ascii = ascii.map((c)=>String.fromCharCode(c));
    return ascii.join("");
}

// b'this is a bytestring!' -> "dGhpcyBpcyBhIGJ5dGVzdHJpbmch"

let str = "this is a bytestring!";
let b64 = toBase64(str);
console.log(b64);
let original = fromBase64(b64);
console.log(original);