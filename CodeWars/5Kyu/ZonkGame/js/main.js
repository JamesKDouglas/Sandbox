//Zonk: A game. 
//A turn works like this
//6 dice rolled.
//each combo give certain points.
//it's like poker where the dice issue a hand. 

//After a roll the dice are scored by forming the hands.

//input is number type array. 

//Those dice that are counted are not considered twice.

//Just consider the input and the combos that can be made
//with current roll.

// scoring rules are;

// 
// Straight (1,2,3,4,5 and 6)	6 3 1 2 5 4	1000 points
// Three pairs of any dice	2 2 4 4 1 1	750 points
// Three of 1	1 4 1 1	1000 points
// Three of 2	2 3 4 2 2	200 points
// Three of 3	3 4 3 6 3 2	300 points
// Three of 4	4 4 4	400 points
// Three of 5	2 5 5 5 4	500 points
// Three of 6	6 6 2 6	600 points
// Four of a kind	1 1 1 1 4 6	2 × Three-of-a-kind score (in example, 2000 pts)
// Five of a kind	5 5 5 4 5 5	3 × Three-of-a-kind score (in example, 1500 pts)
// Six of a kind	4 4 4 4 4 4	4 × Three-of-a-kind score (in example, 1600 pts)
// Every 1	4 3 1 2 2	100 points
// Every 5	5 2 6	50 points

//The input will be the number sequence from the 'dice'
//The output is the highest possibel score that can be made from the sequence.
//after so many turns that the die run out.

//(6 sided dice)

//edge cases? dice are invalid? No. 
//timeouts? 12 000 ms. How many jobs? idk. Multiple. 10?

//no overlap in types. Discreet sets.

function getScore(dice) { 
  //sort the hand.
  //It's coming in as number type array so just sort.
  let sortedDice = dice.sort((a,b)=> a-b);
  
  console.log(sortedDice);  

  //Use a function that looks for the hand:
  //First look for the sequences.

  //The recusive function for scoring looks like this:
  //If the input is empty, return 0.
  // Is the second the same as the first?
    // If not, look for a straight. If it's a straight return the value. If not, subtract the number score for 1 or 5 and return shortened version.
  // If so, record the level and call the function - is the third also the same? 
  // If so, record the level and call the function - is the fourth also the same?
  // If so, record the level and call the function - is the fifth also the same?
  // If so, record the level and call the function - is the sixth also the same?
  // If so, this is the base case. return 6 high score for that number type. We can just 
  //use the number itself. 
  //also, return the shortened array.

  //Call this recursive function 6 times. Build an array.
  //This is the highest scoring combinations. Add the array (reduce).

  //So we can use recursion. The base case is a series of 6 - the highest score.
  

  //Another way is to use list checking. Just have an array of possible searches and go down in highest/
  //value to lowest.
  //Generate the scoring table as a 2D array. 
  //Then search the array by column, which is to say digits.
  // test the cases in order of their points value. So I just look at an ordered list of possible scores and go down the list.
  // i.e. The very highest score of all is a 6 of a kind. So check that first. If it's a six of a kind return.
  //If not, go to the next line and check to see if it is a straight.
  
  //ok that's a sensible way of doing it but I want to check that assumption. I mean, could there be a single hand
  //that gets scored the wrong way and returns a lower value than it should?

  //in order to answer that, let's generate an array of scores and take a look.

  let scores = [];
  //now populate that with name and value. [name, value]
  scores.push(["123456", 1000]);

//3 pair:
//Generate all possible pairs.
for (let i=1;i<=6;i++){
  for (let j = i+1;j<=6;j++){
    for (let k = j+1;k<=6;k++){
      // console.log([i,i,j,j,k,k].join(""));
      scores.push([[i,i,j,j,k,k].join(""), 750]);
    }
  }
}

for (let num = 2;num<=6;num++){
  for (let repeats = 3;repeats<=6;repeats++){
    scores.push([`${num.toString().repeat(+repeats)}`, num*(repeats-2)*100])
  }
}

  //ones and fives are the only numbers counted as singles and pairs:
  scores.push(["5", 50]);
  scores.push(["55", 100]);
  scores.push(["1", 100]);
  scores.push(["11", 200]);

  scores.push(["15", 150]);//one other pair must be present or it's a straight
  scores.push(["1155", 300]);
  scores.push(["155", 200]);
  scores.push(["115", 250]);

  scores.sort((a,b)=>b[1]-a[1]);
  console.log(scores);

  //Now that I have a sorted list, just sort the dice roll and 
  //see if the combinations occur, going downwards.

  let diceString = sortedDice.join("");
  let searchString = "";
  for (let i = 0;i<scores.length;i++){
    //Just search down the list and report when you find something
    searchString = scores[i][0];
    //Ok the search method is not working as described.
    if (diceString.search(/searchString/)!=-1){
      console.log(diceString.search(/scores[i][0]/));
      console.log(diceString);
      console.log("found a", scores[i]);
      return scores[i][1];
    };
    console.log(scores[i][0]);
    console.log(diceString);
    console.log(diceString.search(/scores[i][0]/));
  }
//   //6 of a kind
//   //detect a straight easily:
//   let setDice = new Set(dice);
// //6 of a kind could also pass this
//   setDice = setDice.sort((a,b) => a-b);

//   if (setDice === dice.sort((a,b)=>a-b)){
//     return 1000;
//   };

//   //Then detect three pair
//   let orderedDice = dice.sort((a,b)=> a-b);
//   let oneHalf = [orderedDice[0],orderedDice[2],orderedDice[4]];
//   let secondHalf = [orderedDice[1],orderedDice[3],orderedDice[5]];
// //well, no because six of a kind could also be three pair ex 44 44 44 
//   if (oneHalf === secondHalf){
//     console.log("found three pair");
//     return 750;
//   }

//   //then on to the duplicates. So hands that contain only a pair, triple or so on.
//   //
  

  
//   //Generate the 2D matrix for scoring:

//   //declare the 2d Array
//   let scoreBoard = [new Array(6)];

//   //Then I need to populate it.
//   //Starting at the 6th row, which is for a 6 digit sequence, 
//   //I want to populate it with an array of 6 types. so
//   //arr = [ new Array [6]];
//   // let string = '';
//   //for (let i=6;i>1;j--){//chose the digit to repeat

//   //  arr[j-1].push[`${j}`.repeat(6)]
//   // }
//   let score = 0;
//   for (let col=5;col>0;col--){
//     // for (let roll)
//     scoreboard[col].push(score);
//     score = 0;
//   }
  
}

console.log(getScore([2,2,4,4,1,1]),750);
// console.log(getScore([2,3,4,2,2]), 200);
// console.log(getScore([4,4,4]),400);
// console.log(getScore([1,1,1,1,4,6]),2000);

  