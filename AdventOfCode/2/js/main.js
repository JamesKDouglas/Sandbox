//We will get a set of data that looks like this,

// Game 1: 2 green, 6 blue, 7 red; 12 green, 6 blue, 3 red; 5 red, 18 green, 4 blue
// Game 2: 10 green, 4 red; 2 red; 12 green, 11 red, 1 blue; 1 blue, 11 red, 5 green; 10 red, 9 green, 1 blue
// Game 3: 3 green; 15 red, 7 blue, 1 green; 3 red, 6 blue, 1 green; 14 blue, 13 red, 2 green; 1 green, 6 blue, 6 red; 16 red, 13 blue, 2 green

//This is in fact the first 3 lines. There are 100 lines. Each line ends in a hard return.

//This represents a bag containing cubes. Each game starts with a certain number of cubes of each color. 
//The sets delineated by ; are samples drawn from the bag.

//The goal is to determine the minimum number of cubes possible for each game to be possible.
//That is, gather the maximum red, green, blue, cubes present in the sampling. For example in game on it's [7, 18, 6]
//Generate a checksum by taking these numbers for each game and multiplying them together then adding all of the products.

//return the checksum.

//no invalid inputs.
//no edge cases. Just calculate the 1 value from 1 dataset.
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
//The input text mixes them up, often. So they must be sorted.

//Then I'll go through the games like games[i][1][j] where i is the game index, 1 is the sampls drawn and j examines each sample.

//for each game compute a maxRed, maxGreen, maxBlue;

//Then find the product and add it to a sum.

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
  ]);
  
  // console.log(data);

  //Now manage the trials/samples

  let newData = [];
  for (let i=0;i<data.length;i++){
    //for each game
    let game = [];

    //take the trial data and separate it, then sort so the color order is consistent
    game = [data[i][0], data[i][1].map(el => el.split(', ').map(el=>el.trim()).sort((a,b) => a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1)) )];

    // console.log("game data before beginning:", game);

    //For each game, take the trials and make the data simple numerical data.
    //Data is often missing. Use a 0 to fill.
    for (let j=0;j<game[1].length;j++){
      //For each game I remake each trial as a simple array.
      let simpleSampleData = [0,0,0];
      for (let k=0;k<game[1][j].length;k++){
        // console.log("k:, ", k)
        // console.log(game[1][j][k]);
        if (game[1][j][k].includes("red")){
          simpleSampleData[0] = game[1][j][k].split(" ")[0];
          // console.log("found red data", simpleSampleData);

        } else if (game[1][j][k].includes("green")){
          simpleSampleData[1] = game[1][j][k].split(" ")[0];
          // console.log("found green data", simpleSampleData);

        } else if (game[1][j][k].includes("blue")){
          simpleSampleData[2] = game[1][j][k].split(" ")[0];
          // console.log("found blue data", simpleSampleData);
        }
      }
      game[1][j] = simpleSampleData;
    }
    newData.push(game);
  }
  // console.log(newData);
  return newData;
}

let dataInFrame = parseData(input);

// console.log(dataInFrame);

//Now to deal with part 1 or part 2 - the question posed.

let sum = 0;
let maxRed, maxGreen, maxBlue;

for (let i=0;i<dataInFrame.length;i++){
  //go through each game.
  maxRed = maxGreen = maxBlue = 0;

  //Inspect each trial
    for (let j=0;j<dataInFrame[i][1].length;j++){
        if (+dataInFrame[i][1][j][0]>maxRed){
          maxRed = +dataInFrame[i][1][j][0];
        } 
        
        if (+dataInFrame[i][1][j][1]>maxGreen){
          maxGreen = +dataInFrame[i][1][j][1];
        }
        
        if (+dataInFrame[i][1][j][2]>maxBlue){
          maxBlue = +dataInFrame[i][1][j][2];
        }
    }

    sum += maxRed*maxBlue*maxGreen;
}

console.log(sum);


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