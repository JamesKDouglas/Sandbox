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

function orderedCount(text) {
    let textArr = text.split('');
    console.log(textArr);

    let arrFreq = new Array(new Array);

    console.log(arrFreq);

    for (let i=0;i<text.length;i++){
        console.log(`looking at letter ${textArr[i]} index ${i}`)
        let index = arrFreq.findIndex(el => (el[0] == textArr[i]));//find the letter index in the array
        console.log(`index is ${index}`);

        if(index == -1){
            //we're seeing the letter for the first time
            console.log(`ooh a  letter I haven't seen`)
            arrFreq.push([textArr[i], 1]);
        }
        if (index !== -1){
            //just need to increment the counter
            console.log(`a letter I have seen before!`)
            let letterCount = arrFreq[index];//extract count array
            console.log(arrFreq[index]);
            let count = letterCount[1];//extract the actual count
            let letter = letterCount[0];
            console.log(`I've seen ${count} of these before`)
            count++;//increment
            arrFreq[index] = [letter, count];//rewrite with new count
            console.log(arrFreq[index]);

        }
    }
    arrFreq.shift();


    return arrFreq;
  }