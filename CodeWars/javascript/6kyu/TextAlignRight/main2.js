//Input is a big string and a justification width, in characters.

//The goal is to cut the string up into lines and justify them to the
//right using spaces as padding.

//edge cases: well the longest word is never greater than the just. width.
//the input has words separated by just 1 space.
//no timeouts.

function alignRight(text,width){
    //first, split up the text into words.
    
    //Then, start building the lines from the top.
    //Build a new array with the lines, including spaces.
    //Count the characters that contribut to word length. Count spaces.
    //then fill the rest with spaces.
    
    let lines = [""];
    let words = text.split(" ");
    let len = 0;
    for (let i=0; i<words.length;i++){
      len = words[i].length;
      //if the current length of the line plus the word being considered is smaller
      //than the justification with, then add the word.
      if (lines[lines.length-1].length+len <= width){
        lines[lines.length-1] = lines[lines.length-1].concat(` ${words[i]}`);
      } else {
        //otherwise, we must be over. so add spaces instead.  Then finish the line and make space for the next
        lines[lines.length-1] = " ".repeat(width - lines[lines.length-1].length).concat(lines[lines.length-1]);
        lines[lines.length-1] = lines[lines.length-1].concat("\n");
        lines.push([]);
      }
    }
    return lines.join("");
  }
  // console.log(alignRight("abc def",10),'   abc def');
  // console.log(alignRight("I take up the whole line",24),'I take up the whole line');
  console.log(alignRight("Two lines, I am",10),'Two lines,\n      I am');