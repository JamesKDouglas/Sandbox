//input is the current position and directions in terms of 
//movement - compass points and grid positions moved.
//no diagonal movement.

//There is an map that is hardcoded.

//The goal is to navigate around the map. Follow the directinos
//Then return the final position. That is, return the name at that position.

//edge cases - what if we move off the edge? return "The Wall blocks your way".

//invalid input? Not expected



var finalDestination = function(currentPos, directions) {
    var locales = [
      ["Deepwood Motte", "Shadow Tower", "Castle Black", "Eastwatch", "Bay of Seals"],
      [ "The Stony Shore", "Torrhen's Square", "Winterfell", "The Dreadfort", "Karhold"],
      [ "Flint's Finger", "Barrowtown", "Moat Cailin", "White Harbour", "Widow's Wat"],
      [ "Pyke", "Seagard", "The Twins", "Sisterton", "The Fingers"],
      [ "The Crag", "Riverrun", "Darry", "The Eyrie", "Gulltown"],
      [ "Castamere", "Acorn Hall", "Harrenhal", "Maidenpool", "Dragonstone"],
      [ "Lannisport", "Stoney Sept", "King's Landing", "Blackwater Bay", "Sharp Point"],
      [ "High Garden", "Bitterbridge", "King's Wood", "Storm's End", "Evenfall"],
      [ "Old Town", "Horn Hill", "Prince's Pass", "Planky Town", "Sunspear"]
    ];
    //5x9 columnsxrows.
    
    //First, lookup start position. Hold the value as a row/column.
    //For this, we need a search function. A nested for loop is fine.
    
    let column = 0;
    let row = 0;
    
    for (let i=0;i<9;i++){
      for (let j=0;j<5;j++){
        if (locales[i][j] === currentPos){
          row = i;
          column = j;
        }
      }
    }
    // console.log("start at row, column:", row, column);
    
    //get those moves more manageable.
    let moves  = directions.split(" ");
    // console.log(moves);
    //Make moves
    for (let i=0;i<moves.length;i++){
      if (moves[i][0] === "N"){
        row = row - +moves[i][1];
      }
      if (moves[i][0] === "S"){
        row = row + +moves[i][1];
      }
      if (moves[i][0] === "E"){
        column = column + +moves[i][1];
      }
      if (moves[i][0] === "W"){
        column = column - +moves[i][1];
      }
      if (row>8 || column>4 || column<0 || row<0 ){
        return "The Wall blocks your way"
      }
    }
    
    // console.log(row, column);
    //Finally, lookup the value there.
    return locales[row][column];
  
  }
  
  console.log(finalDestination("King's Landing", "N5"), "Winterfell");
  console.log(finalDestination("King's Landing", "N2 W1"), "Riverrun");
  console.log(finalDestination("King's Landing", "S2 E2"), "Sunspear");