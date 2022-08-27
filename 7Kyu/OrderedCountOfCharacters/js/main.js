// parameters: 
// return:
// example:
// pseudocode:

//The input is a string with both upper and lowercase characters.

//The output is a list of characters and the frequency of which they occur in the string.

// The order of the letters is the first order in which they appear.
// for example in abracadabra abr sets the relative order of the letters in the abundance array.
// Then the count just adds to this.
// So we'll use an index lookup tool to increment it if we find a character in the string.
// and if the character is not found in the abundance array we'll add it.

//capital letters are just unique from lowercase. punctuation counts as a character.
let text = 'abracadabra'
console.log(orderedCount(text));

//using object notation

function orderedCount(text){
    let textArr = text.split('');
    let obsFreq = {};

    for (let i=0;i<textArr.length;i++){
        if (!obsFreq[textArr[i]]){//Note how angle brackets are required here because then evaluation takes place before the key is looked up.
            obsFreq[textArr[i]] = 1;
        }else{
            obsFreq[textArr[i]]++;
        };
    }
    return obsFreq;
}
//using an array, which is a type of object of course:
// function orderedCount(text) {
//     let textArr = text.split('');
//     let arrFreq = new Array(new Array);

//     for (let i=0;i<text.length;i++){
//         let index = arrFreq.findIndex(el => (el[0] == textArr[i]));//find the letter index in the array

//         if(index == -1){
//             //we're seeing the letter for the first time
//             arrFreq.push([textArr[i], 1]);
//         }
//         if (index !== -1){
//             //just need to increment the counter
//             let letterCount = arrFreq[index];//extract count array
//             let count = letterCount[1];//extract the actual count
//             let letter = letterCount[0];
//             count++;//increment
//             arrFreq[index] = [letter, count];//rewrite with new count

//         }
//     }
//     arrFreq.shift();

//     return arrFreq;
//   }