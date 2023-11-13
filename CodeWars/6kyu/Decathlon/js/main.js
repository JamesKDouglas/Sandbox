//They use the word "diszipline" but mean "discipline" in the problem description.
//Not sure why.

//The input will be an object.
//The object contains data about althletes and their scores in various event.

//There are 10 event described. Each event score is associated with an appropriate unit.

//Detemine which athlete has the highest score.

//Scoring using a formula. There are two- one formula for track and one for field
//type events.

//for track events points = (A*(B-P)**C). For field points = (A*(P-B))**C)

//Order of operations are parentheses, exponents. So B-P should be evaluated first then raised to C
//then multiplied by A.

//A, B and C are constants associated with the event. pTable object is available
//and contains the values. (ex: pTable.100m.A).

//-Negative points aren't awarded, just award 0 if points are negative.
//-Points gathered are rounded down to the nearest integer for each event.
//-Assume input units are correct and inputs are valid. P is null if an athlete
//doesn't performin that event.

//Return the name of the winning athlete.

//edge cases? all nulls? Null valued at 0 I guess.
//Same scores? Report the first?
//Assume rounding errors don't matter.
//timeouts? not an issue 12 000ms


// let pTable = {
//   '100m': { A: 25.4347, B: 18, C: 1.81 },
//   'Long jump': { A: 0.14354, B: 220, C: 1.4 },
//   'Shot put': { A: 51.39, B: 1.5, C: 1.05 },
//   'High jump': { A: 0.8465, B: 75, C: 1.42 },
//   '400m': { A: 1.53775, B: 82, C: 1.81 },
//   '110m hurdles': { A: 5.74352, B: 28.5, C: 1.92 },
//   'Discus throw': { A: 12.91, B: 4, C: 1.1 },
//   'Pole vault': { A: 0.2797, B: 100, C: 1.35 },
//   'Javelin throw': { A: 10.14, B: 7, C: 1.08 },
//   '1500m': { A: 0.03768, B: 480, C: 1.85 }
// }

function decathlon(athletes){
  //Go through the object, calculate the score for each athlete.
  //Add the score to a 2D array [["name",score]]. Then sort by second element.
  //And return the first value in the array.
  let scores = [];
  let score = 0;
  for (let i in athletes){
    //i will be the name of the athlete
    
    for (let j in pTable){
      //j will be the name of the event
      if (athletes[i][j] === null){
        continue;
      }
      if (j === "100m" || j === "400m" || j === "110m hurdles" || j === "1500m"){
        score += Math.floor(pTable[j].A*(pTable[j].B-athletes[i][j])**pTable[j].C)>0?Math.floor(pTable[j].A*(pTable[j].B-athletes[i][j])**pTable[j].C):0;
      } else {
        score += Math.floor(pTable[j].A*(athletes[i][j] - pTable[j].B)**pTable[j].C)>0?Math.floor(pTable[j].A*(athletes[i][j] - pTable[j].B)**pTable[j].C):0;
      }

      console.log(i, " did event ", j , " and has score: ", score);
    }  

    scores.push([i,score]);//add the athlete to the scores array
    score = 0;

  }
  //Now find the highest score
  scores = scores.sort((a,b)=> - a[1] + b[1]);
  console.log(scores)
  return scores[0][0];  
}

let athletes1 = {
                  "Bob": {"100m": 12.3, "Long jump": 530, "Shot put": 9.4, "High jump": 160, "400m": 59.6, "110m hurdles": 19.2, "Discus throw": 23, "Pole vault": 270, "Javelin throw": 19, "1500m": 300.5 },
                  "Fred": {"100m": 11.9, "Long jump": 500, "Shot put": 9.4, "High jump": 150, "400m": 59.6, "110m hurdles": 19.2, "Discus throw": 19, "Pole vault": 320, "Javelin throw": 19, "1500m": 295.5 }
               }
console.log(decathlon(athletes1), "Fred")

let athletes2 = {
                  "Usain": {"100m": 9.58, "Long jump": 550, "Shot put": 12, "High jump": 220, "400m": 45, "110m hurdles": 29, "Discus throw": 60, "Pole vault": 450, "Javelin throw": 55, "1500m": 250 },
                  "Justin": {"100m": null, "Long jump": 400, "Shot put": 15, "High jump": 156, "400m": 50, "110m hurdles": 19, "Discus throw": 25, "Pole vault": 400, "Javelin throw": 70, "1500m": 290 },
                  "Christian": {"100m": 9.4, "Long jump": 450, "Shot put": 19, "High jump": 190, "400m": 55, "110m hurdles": 16.5, "Discus throw": 40, "Pole vault": 420, "Javelin throw": 65, "1500m": 280 }
               }
console.log(decathlon(athletes2), "Usain")

let athletes3 = {
                  "Usain": {"100m": 9.58, "Long jump": 550, "Shot put": 12, "High jump": 220, "400m": 45, "110m hurdles": 29, "Discus throw": 60, "Pole vault": 450, "Javelin throw": 55, "1500m": 250 },
                  "Justin": {"100m": null, "Long jump": 100, "Shot put": 15, "High jump": 156, "400m": 50, "110m hurdles": 19, "Discus throw": 25, "Pole vault": 400, "Javelin throw": 70, "1500m": 290 },
                  "Christian": {"100m": 9.4, "Long jump": 450, "Shot put": 19, "High jump": 190, "400m": 55, "110m hurdles": 16.5, "Discus throw": 40, "Pole vault": 420, "Javelin throw": 65, "1500m": 280 }
               }
console.log(decathlon(athletes3), "Usain")


