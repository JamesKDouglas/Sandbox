// parameters: input is comprised of a message string. 
// return:That string is spread out to form a sort of step ascii art thing.
// // example:
//                                          7891012
//                              TUWvXY      6     3
//                    ABCDE     S    Z      5
//            lmno    z   F     R    1      4
//      abc   k  p    v   G     Q    2      3
// .34..9 d...j  q....x   H.....P    3......2
// 125678 efghi  rstuwy   IJKLMNO    45678901
//THE CHARACTER COUNT is basically a square. Add one to the square for each step, starting at 0.
// // pseudocode:
//
//Get the string into an array. I'll do this again with string methods but first lets do array.
// besides then we can compare speeds.
// declare a 2D array that is big enough to hold the image. I guess that's about the square root of the length.
//Keep a counter in a pair of nested loops, one for the line and one for the height. So wer'e making the array line by line, character by character.
//  As you go across the line, skip according to the count character. Skipping just means pushing i forward by count. Maybe set a flag counter too just to count the number of finished steps if it's easier?

// The index of the for loop tracks which character goes on the screen. Then skipping happens, as defined by which line you're on.

//on the second line up the skipping will have a different pattern.

//pff, sounds complicated.

//The steps are basically a tetris shape. Like the sideways mirror image z. Make array blocks then assemble them?

//Check screen output method?

//separate the logic and the filling? That is, I could start with just an x pattern.

//hm ok what's an equation that could describe a character from the character index, like the x axis.

//Count blocks. The first block is 0 in size. 
//Build block by block. Keep track of the index inside the block.
//The horizontal space that the block takes up is the block size*2-1

function tops(msg) {
    let screenArr = new Array(new Array); //lines on the exterior, position on the interior

    //line by line, character by character.
    let numLines = Math.ciel(Math.sqrt(msg.length));
    let numChars = numLines;
    let stepCounter = 0;
    for(let i=0;i<numLines;i++){
        for (let j=0;j<numChars;j++){
            for (let k=0;k<=stepCounter;k++){
                if (i=0){
                    //build the bottom line
                    screenArr[i][j] = "x";
                }
                if (i>0){
                    //could be a wall or could be a cap
                    if ()
                }
            }
            let j = j+stepCounter;
            stepCounter++;
        }
    }

    return msg;
}