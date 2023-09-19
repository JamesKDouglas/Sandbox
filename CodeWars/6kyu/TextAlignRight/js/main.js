//Input is a big string and a justified width.

//Split it up into lines, right justified.

//no funny stuff.

function alignRight(text, width){
  //split it up into words.
  //then create lines one by one. Count the length of the words and make them part of a string.
  //then pad with spaces.

  let wordsArr = text.split(" ");
  let linesArr = [""];
  let counter = 0;
  let lineCounter = 0;
  let lineLen = 0;
  do{
    //would-be line length
    // console.log("linesArr:", linesArr);
    // console.log("working on the line:", lineCounter);

    // console.log("current line length: ", linesArr[lineCounter].length);
    // console.log("next word length: ", wordsArr[counter].length);
    
    lineLen = linesArr[lineCounter].length + wordsArr[counter].length;
    // console.log("can this word be added? : ", wordsArr[counter]);
    //does adding the next word puts us over the width?
    // console.log("lineLen:", lineLen, "width: ", width);

    if (lineLen===width){
      // console.log("just barely fits!");
      // console.log("adding word and newline char");
      linesArr[lineCounter] = `${linesArr[lineCounter].concat(wordsArr[counter])}`;
      linesArr[lineCounter] = linesArr[lineCounter].concat("\n");
      //and move on to the next line
      lineCounter++;
      linesArr.push("");
    }else if(lineLen>width){
      // console.log("word doesn't fit!");
      //just add padding
      linesArr[lineCounter] = " ".repeat(width-linesArr[lineCounter].length).concat(linesArr[lineCounter]);
      //and a newline character. Does a newline character take up space?
      linesArr[lineCounter] = linesArr[lineCounter].concat("\n");
      //and move on to the next line
      lineCounter++;
      linesArr.push("");
    } else {
      // console.log("lots of space!")
      //just add the word and a space
      linesArr[lineCounter] = `${linesArr[lineCounter].concat(wordsArr[counter])}`;
      //Are we done was that the last word?
      if (counter === wordsArr.length){
        //yes we are done. Add paddign and terminate with newline
        linesArr[lineCounter] = " ".repeat(width-linesArr[lineCounter].length).concat(linesArr[lineCounter]);
        //and a newline character. Does a newline character take up space?
        linesArr[lineCounter] = linesArr[lineCounter].concat("\n");
      } else {
        //just add a space for the next word
        linesArr[lineCounter] = `${linesArr[lineCounter]} `;
      }
    }


    //consider the next word
    counter++;
  } while (counter<200 && counter<wordsArr.length)

  linesArr[linesArr.length-1] = " ".repeat(width-linesArr[linesArr.length-1].trim().length).concat(linesArr[linesArr.length-1].trim());
  // console.log(linesArr);

  //trim last newline char
  linesArr[linesArr.length-1] = linesArr[linesArr.length-1].slice(0,-1);
  return linesArr.join("");
}

  console.log(alignRight("abc def",10),"\n",'   abc def');
  console.log(alignRight("I take up the whole line",24), "\n",'I take up the whole line');
  console.log(alignRight("Two lines, I am",10), "\n",'Two lines,\n      I am');