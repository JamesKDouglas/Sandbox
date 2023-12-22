//The input will be an array of arrays. This is a data set of marks 
//recieved by students taking courses
//Each sub-array contains: the name of the student, the total score, and an array of 
//letter grades.

//The total score is supposed to be based on a combination of the letter grades 
//as follows:
//A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points

//If there are over 5 courses and all of them have a grade of B or above (A)
//then an additional 20 points are awarded.
//The total score can only every be 200.

//The goal is to inspect this data set and look for errors. The idea is that
//someone has altered the total score.

//return the name of the entries that have incorrect score/grade array matches
//as an array.

//job size? Timeouts? Assume no bigInts 
//edge cases? capitalization? Expect valid inputs.
//No marks, or undefined score? Not expected.

function findHack(arr) {
  //Declare an array to keep names that have errors.
  
  //Early returns:
  //Add all names with scores over 200
//   let errorArr = arr.map(el => if(el[1]>200){return el[0]});
  //nevermind about the early return, it doesn't help because it produces a possible
  //duplicate
  // console.log(arr);
  //Generate real scores:
  function realScore(marks){
    let totalScore = 0;
    let highMarkBonus = true;
    // console.log("begin");
    for (let i=0;i<marks.length;i++){
      let el = marks[i];
      
      if (el === 'A'){
        totalScore += 30;
      } else if (el === 'B'){
        totalScore += 20;
      } else if (el === 'C'){
        totalScore += 10;
        highMarkBonus = false;
      } else if (el === 'D'){
        totalScore += 5;
        highMarkBonus = false;
      } else {
        highMarkBonus = false;
      };
      // console.log(totalScore);
    };
          
  
    if (highMarkBonus && marks.length>=5){
      // console.log("bonus!");
      totalScore += 20;
    };
          
    //cap
    if (totalScore>200){
      totalScore = 200;
    }

    // console.log(totalScore);
    return totalScore;
  };

  // add the real scores to the array
  arr = arr.map(el => {
      // console.log(el);
      el.splice(2, 0, realScore(el[2]));
      // console.log(el);
      return el;
    }
  );
  //filter out only the ones that have been hacked
  // console.log(arr);

  let errorArr = arr.filter(el => el[1] !== el[2]);
  // console.log(errorArr);
  // //extract just the names
  errorArr = errorArr.map(el => {
      // console.log(el[0]);
      return el[0];
    }
  );

  return errorArr;
  
}

let arr1 = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];

console.log(findHack(arr1), ["name1", "name3"]);

let arr2 = [
["name1", 150, ["B", "A", "A", "C", "A", "A"]],
["name2", 120, ["B", "A", "A", "A"]],
["name3", 160, ["B", "A", "A", "A","A"]],
["name4", 140, ["B", "A", "A", "C", "A"]]
];

console.log(findHack(arr2), ["name2", "name4"]);
