//We will get a set of data that looks like this,

// Game 1: 2 green, 6 blue, 7 red; 12 green, 6 blue, 3 red; 5 red, 18 green, 4 blue
// Game 2: 10 green, 4 red; 2 red; 12 green, 11 red, 1 blue; 1 blue, 11 red, 5 green; 10 red, 9 green, 1 blue
// Game 3: 3 green; 15 red, 7 blue, 1 green; 3 red, 6 blue, 1 green; 14 blue, 13 red, 2 green; 1 green, 6 blue, 6 red; 16 red, 13 blue, 2 green

//not only does it look like this, this is in fact the first 3 lines. There are 100 lines. Each line ends in a hard return.

//This represents a bag containing cubes. Each game starts with a certain number of cubes of each color. 
//The sets delineated by ; are samples drawn from the bag.

//Imagine that a sample is drawn, which is composed of
//12 red cubes, 13 green cubes, and 14 blue cubes

//Determine which games this is possible for. Then add together all of the game numbers.

// return the sum of the game numbers

//no invalid inputs.
//no edge cases. the problem is for only 1 input set and 1 sample set.
//timeouts not a problem.


//First, lets import the data from a text file
let input = importText("games.txt")

function importText(textFile) {
  "use strict";
  let rawFile = new XMLHttpRequest();
  let allText = "";
  rawFile.open("Get", textFile, false);
  rawFile.onreadystatechange = function()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              allText = rawFile.responseText;
          }
      }
  }

  rawFile.send(null);
  return allText; 
}

// console.log(input);

//After importing the data I want to parse it so that I can use it. We'll use the idea of the data frame and make a table like,

// games = [ [[game #], [R,G,B], [R,G,B], [R,G,B]], [[game #], [R,G,B], [R,G,B], [R,G,B]]] 
//or [G,B,R]. The input text mixes them up, often. So they must be sorted.

//Then prepare the test case as an array, [12, 13, 14]. That's 12 red, 13 green 14 blue.

//So that's a 3D array. Game, column, number. The game # is an array to keep it consistent but there is only 1 value.

//Then I'll go through the games like games[i][j] where i counts upwards and j goes from 1 to the end of the game.

//For each game make an R list, G and B array. [[R,R,R],[B,B,B],[G,G,G]]. Then use the array.every() method to see if all the R, B and G's are below or equal to the threshold.

//If it passes the test, add the game # to a sum.


// Game 1: 2 green, 6 blue, 7 red; 12 green, 6 blue, 3 red; 5 red, 18 green, 4 blue
function parseData(input){
  //split into games
  let data = input.split("\n");

  //make the first column - game #
  data = data.map(el =>{
    let newEl = el.split(":");
    newEl = [+newEl[0].replace("Game ", ""), newEl[1]];
    return newEl;
  });

  //separate the trials
  data = data.map(el => [el[0], el[1].trim().split(";")
  //.map((el) => {
    // console.log(el);
    // if (el.includes(",")) { el.split(", ") }
  // } )
]);
  
  console.log(data);

  //Now separate the color results in each trial

  let newData = [];
  for (let i=0;i<data.length;i++){
    //for each game
    let game = [];

    //take the trial data and separate it, then sort so the color order is consistent
    game = [data[i][0], data[i][1].map(el => el.split(', ').map(el=>el.trim()).sort((a,b) => a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1)) )];

    console.log("game data before beginning:", game);

    //now for each game, take the trials and make the data simple numerical data.
    //This is complicated because data is often missing and I have to use a 0 to fill.
    for (let j=0;j<game[1].length;j++){
      //Now for each game I remake each trial
      let simpleSampleData = [0,0,0];
      for (let k=0;k<game[1][j].length;k++){
        //I want the data in the order of [R,G,B]. Often, data is missing and we place a 0 there.
        console.log("k:, ", k)
        console.log(game[1][j][k]);
        if (game[1][j][k].includes("red")){

          simpleSampleData[0] = game[1][j][k].split(" ")[0];
          console.log("found red data", simpleSampleData);

        } else if (game[1][j][k].includes("green")){
          simpleSampleData[1] = game[1][j][k].split(" ")[0];
          console.log("found green data", simpleSampleData);

        } else if (game[1][j][k].includes("blue")){
          simpleSampleData[2] = game[1][j][k].split(" ")[0];
          console.log("found blue data", simpleSampleData);
        }
      }
      game[1][j] = simpleSampleData;
    }
    newData.push(game);
  }
  
  console.log(newData);
// Not bad, but now I somehow have to turn,
// ['3 green'] => [0,0,3]
// ['15 red', '7 blue', '1 green'] => [15,7,1]
// I guess use if string.contains("red") then extract first part (split by " ") into arr[0]. 


  // console.log([data[0][0],data[0][1].split(";")]);
}

parseData(input);

//alternate import methods:

// Promise.all([
//   fetch(textFile).then(x => x.text())
// ]).then(([sampleResp]) => {
//   console.log(sampleResp);
// }); 

// async function getGameData(fileName) {
//   let games = (await fetch(fileName)).text();
//   return games;
// }

// getGameData("games.txt").then(console.log("promise returned!"))