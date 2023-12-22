//The input is a string.
//Remove parts of the string according to the stepwise diagram.
//This diagram isn't actually what we return. It's just a weird way of visually explaining the algorithm.
//What we actually return is the tops, rearranged into a string and starting with the longest.

// ex:

// input string 123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123

//Then you may imagine that it is somehow arranged as:
//                                          7891012
//                              TUWvXY      6     3
//                    ABCDE     S    Z      5
//            lmno    z   F     R    1      4
//      abc   k  p    v   G     Q    2      3
// .34..9 d...j  q....x   H.....P    3......2
// 125678 efghi  rstuwy   IJKLMNO    45678901

// and when we return, we are not returning an ascii drawing. Rather, we return a string composed of the tops:
// 7891012TUWvXYABCDElmnoabc34
//7891012 TUWvXY ABCDE lmno abc 34

// We could just directly make that string. 

//but lets proceed in an orderly fashion. 
//The first 2 characters just get discarded, always.
// Then we are watching a sort of step counter go up from 0 onwards.
// This step counter affects the characters skipped. 
// When the counter is 0 we skip 1 characters;
// increment the counter
// include zero characters in the top
// When the counter is 1 we skip 1 character.
// include two characters in the top
//increment the counter to 2
// when the counter is 2 we skip 5 characters;
// include three characters in the top.
// increment the counter
// when the counter is 3 
// when the counter is 2 we skip 


// The length of the included string is the stepSize + 1 except for the zero step.
// The length of the skipped string is the stepSize*3

//We're including indexes (inclusive) (1)2-3, (2)9-11, 21-24... 
function tops(msg){
    if (msg.length == 0){
      return "";
    }

    let arr = new Array();

    //just skip the zero it's always the same. 
    let stepSize = 1;
    let charIndex = 2;
    while(charIndex<msg.length){
        // console.log(`start with charIndex of ${charIndex}`)
        arr[stepSize] = msg.substring(charIndex, charIndex+stepSize+1);
        // console.log(`add ${arr[stepSize]}`);
        charIndex += stepSize+1;
        stepSize++;
        // console.log(`advance charIndex by string size to ${charIndex}`);
        charIndex += stepSize*3 -1;
        // console.log(`advance charIndex by skipped size to ${charIndex}`);
    
    }
    arr.shift();

    return arr.reverse().join('');
}

let msg = "123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123";

console.log(tops(msg));