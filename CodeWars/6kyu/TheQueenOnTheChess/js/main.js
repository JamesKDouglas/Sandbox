// valid input will be a string representing a position on a chess board.
// that means A-H and 1-8
// ex A2 is valid. A9 is not. J1 is not.

// An invalid input may be provided. If the type isn't a string, or a string
//indicates outside the range that is valid, return an empty array.

// If the input is valid the goal is to return an array that represents
// a list of all positions the queen could move to.
// Assume there are not other pieces on the board.

//ex:
//A1 => ["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]

//edge cases? case? Always uppercase. 
//Timeouts? 12 000ms

function availableMoves(position) {
  //early returns: invalid inputs.
  //first, typeof check.
  //then, range check.  just use >< operators.
  
  if (typeof(position)!="string") return [];
  if (position.charAt(0)>"H") return [];
  if (+position.charAt(1)>8 || +position.charAt(1)<0) return [];
  
  
  //Now for computing the valid moves.
  //divide it into horizontal, vertical and diagonal.
  //What order should this array be returned in?
  
  //horizontal:
  //All of the squares in the row except the one the queen is already on.
  let movesArr = [];
  for (let i=1;i<=8;i++){
    if (+position.charAt(1) === i) {
      continue;
    } else {
      movesArr.push(`${position.charAt(0)}${i}`);
    } 
  }
  
  //vertical
  //all of the squares in the column except the one the queen is already on.
  for (let i="A".charCodeAt(0);i<="H".charCodeAt(0);i++){
    if (position.charAt(0) === String.fromCharCode(i)){
      continue;
    } else {
      movesArr.push(`${String.fromCharCode(i)}${position.charAt(1)}`);
    }
  }
  
  //now for the diagonals. Lets use a division of up and down.
  //up
  let col1 = "";
  let col2 = "";
  
  for (let i=+position.charAt(1)-1;i>=1;i--){
    col1 = `${String.fromCharCode(position.charCodeAt(0)-i)}`;
    col2 = `${String.fromCharCode(position.charCodeAt(0)+i)}`;

    //check range, only add positions if the range is valid. 
    //The row is already controlled for that via i.
    if (col1>="A") movesArr.push(`${col1}${i}`);
    if (col2<="H") movesArr.push(`${col2}${i}`);
    
  }
  //Now for downward. Reset variables.
  col1 = col2 = "";
  for (let i=+position.charAt(1)+1;i<=8;i++){
    col1 = `${String.fromCharCode(position.charCodeAt(0)-i)}`;
    col2 = `${String.fromCharCode(position.charCodeAt(0)+i)}`;

    //check range, only add positions if the range is valid. 
    //The row is already controlled for that via i.
    if (col1>="A") movesArr.push(`${col1}${i}`);
    if (col2<="H") movesArr.push(`${col2}${i}`);
    
  }
  
  return movesArr.sort((a,b)=>a-b);
}
let arr1 =  ["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"];
arr1 = arr1.sort((a,b)=>a-b);

console.log(availableMoves("A1"),arr1);
console.log(availableMoves("C5"), ["A3", "A5", "A7", "B4", "B5", "B6", "C1", "C2", "C3", "C4", "C6", "C7", "C8", "D4", "D5", "D6", "E3", "E5", "E7", "F2", "F5", "F8","G1", "G5", "H5"]);
console.log(availableMoves("H3"), ["A3", "B3", "C3", "C8", "D3", "D7", "E3", "E6", "F1", "F3", "F5", "G2", "G3", "G4", "H1", "H2", "H4", "H5", "H6", "H7", "H8"]);
console.log(availableMoves("H9"), []);
