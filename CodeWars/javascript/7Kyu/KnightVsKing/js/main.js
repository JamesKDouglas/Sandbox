function knightVsKing(knightPosition, kingPosition) {
    let knightMoves = [[2,1],[2,-1],[1,2],[1,-2],[-2,1],[-2,-1],[-1,2],[-1,-2]];

    //file comes in as a upercase letter, so convert that to a #
    knightPosition[1] = (knightPosition[1].charCodeAt(0))-64;//A is 65
    kingPosition[1] = (kingPosition[1].charCodeAt(0))-64;

    console.log(`Knight's position: ${knightPosition}`);
    console.log(`King's position: ${kingPosition}`);
    //early returns: if the knight and king are more than 2 away from each other.
    //We're assuming the inputs are valid positions, otherwise they would belong in early returns too.
    if (Math.abs(knightPosition[0]-kingPosition[0])>2 || Math.abs(knightPosition[1]-kingPosition[1])>2){
        return "None";
    }

    //King checking knight is easy because it's just 1 away all around the king.
    if (Math.abs(knightPosition[0]-kingPosition[0])==1 || Math.abs(knightPosition[1]-kingPosition[1])==1){//This decides if the knight is in the rank or file next to the king. But the knight could still be far away so we need a constraint
        if (Math.abs(knightPosition[0]-kingPosition[0])<=1 && Math.abs(knightPosition[1]-kingPosition[1])<=1){
            return "King";
        }
    }

    //knight checking king uses the array
    for (i in knightMoves){
        let newRank = knightPosition[0]+knightMoves[i][0];
        let newFile = knightPosition[1]+knightMoves[i][1];
        let newKnightPosition = [newRank, newFile];
        console.log(`checking ${newKnightPosition}`)
        if (JSON.stringify(newKnightPosition) == JSON.stringify(kingPosition)){//sadly, you cannot just compare arrays so do the stringify
            return "Knight";
        }
    }
    return "None";//If the piece are close enough but the king is in the knight's blind spot this is possible. 

    //Here we go from knight's perspective and scan for a king. A different way of doing this is to go from the King's perspective and just check to see if a knight is in the positions that could attack the king. That could be a nice way of organizing things because everything could just be from the perspective of the king.
}
// let knight = [7, "B"]
// let king = [6, "C"]
//  ---> "King"

let knight = [4,"C"]
let king = [6,"D"]
//--->Knight
console.log(knightVsKing(knight, king));
  